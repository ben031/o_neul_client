import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";
import "../../style.css";
import Calendar from "./calendar/Calendar";
import CalendarHeader from "./calendar/CalendarHeader";
import Diary from "../modals/Diary";
import {
  MainSection,
  CalendarWrapper,
  MainInnerSection,
  MainInnerWrapper,
  DiaryWrapper,
} from "../../styles/main/Main.style";
import MainHeaderCompo from "./MainHeaderCompo";
import MyCards from "./cards/MyCards";
import OtherCards from "./cards/OtherCards";
import { connect } from "react-redux";
import { fetchAllLoginDiary, fetchAllUnloginDiary } from "../../actions";
import fetchAxios from "./useFetch";
import LoadingModal from "../modals/LoadingModal";

const Main = ({ userInfo, fetchAllLoginDiary, fetchAllUnloginDiary }) => {
  const [value, setValue] = useState(moment());
  const [isClick, setIsClick] = useState(false);
  const [clickmoment, setClickmoment] = useState(null);
  const [selectedDiaryId, setSelectedDiaryId] = useState(0);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // 비 로그인시, 퍼블릭 다이어리 정보 fetch...
  // 로그인시, 퍼블릭 및 개인 다이어리 정보 fetch.
  useEffect(() => {
    fetchAxios(userInfo)
      .then((result) => {
        if (userInfo.login.accessToken) {
          return fetchAllLoginDiary(
            result.publicDiary,
            result.myDiary,
            result.musicList
          );
        } else {
          return fetchAllUnloginDiary(result.publicDiary, result.musicList);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //
  useEffect(() => {
    if (clickmoment !== null) {
      return setIsClick(true);
    }
  }, [clickmoment]);

  const changeModalState = useCallback(() => {
    setIsClick((prev) => !prev);
    setClickmoment(null);
  }, [setIsClick]);

  const momentHandler = useCallback(
    (day) => {
      setClickmoment(day);
    },
    [setClickmoment]
  );

  const passDiaryId = useCallback(
    (diaryId) => {
      setSelectedDiaryId(diaryId);
    },
    [setSelectedDiaryId]
  );

  const next = () => {
    setValue(value.add(1, "month").clone());
  };

  const before = () => {
    setValue(value.subtract(1, "month").clone());
  };

  return (
    <>
      {isClick && (
        <Diary
          clickmoment={clickmoment}
          closeDiaryModal={changeModalState}
          selectedDiaryId={selectedDiaryId}
          passDiaryId={passDiaryId}
        />
      )}
      <MainSection>
        <MainHeaderCompo />
        <MainInnerSection>
          <MainInnerWrapper>
            <CalendarWrapper>
              <CalendarHeader value={value} next={next} before={before} />
              <Calendar value={value} modalHandle={momentHandler} />
            </CalendarWrapper>
            <DiaryWrapper>
              <MyCards
                modalHandle={momentHandler}
                setDeleteLoading={setDeleteLoading}
              />
              <OtherCards
                closeDiaryModal={changeModalState}
                passDiaryId={passDiaryId}
              />
            </DiaryWrapper>
          </MainInnerWrapper>
        </MainInnerSection>
      </MainSection>
      <LoadingModal loadingModalOpen={deleteLoading}>오늘 삭제 중</LoadingModal>
    </>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  return {
    userInfo: loginReducer,
  };
};

export default connect(mapStateToProps, {
  fetchAllLoginDiary,
  fetchAllUnloginDiary,
})(Main);
