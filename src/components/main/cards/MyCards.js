import React, { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import { myDiaryArrow, diaryResponsive } from "../../landing/card/carousel";
import { Icon } from "react-icons-kit";
import { unlock } from "react-icons-kit/fa/unlock";
import { pencil } from "react-icons-kit/entypo/pencil";
import {
  MyCardWrapper,
  MyDiaryHeader,
  DiaryLogin,
} from "../../../styles/main/cards/MyCards.style";
import { connect } from "react-redux";
import MyCard from "./card/MyCard";
import { useState } from "react";
import Signup from "../../modals/signup_in/Signup";
import AOS from "aos";
import Diary from "../../modals/Diary";
import moment from "moment";

const MyCards = ({ diary, userInfo, modalHandle, setDeleteLoading }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [modal, setModal] = useState(false);
  const [diaryModal, setDiaryModal] = useState(false);

  // login modal handler
  const changeModal = () => {
    setModal((prev) => !prev);
  };

  // today's diary modal handler
  const changeDiaryModal = () => {
    setDiaryModal((prev) => !prev);
  };

  const content = React.useMemo(
    () =>
      diary.myDiary.length === 0 ? (
        <DiaryLogin onClick={changeDiaryModal}>
          첫 일기 남기기
          <Icon icon={pencil} />
        </DiaryLogin>
      ) : (
        <Carousel
          breakPoints={diaryResponsive}
          renderArrow={myDiaryArrow}
          pagination={false}
          itemPadding={[0, 50]}
        >
          {diary.myDiary &&
            diary.myDiary.map((diary) => (
              <MyCard
                key={diary.id}
                diary={diary}
                modalHandle={modalHandle}
                setDeleteLoading={setDeleteLoading}
              />
            ))}
        </Carousel>
      ),
    [diary.myDiary]
  );

  return (
    <MyCardWrapper>
      <MyDiaryHeader>나의 오늘 .</MyDiaryHeader>
      {userInfo.login.accessToken === "" ? (
        <DiaryLogin onClick={changeModal}>
          로그인
          <Icon icon={unlock} />
        </DiaryLogin>
      ) : (
        content
      )}
      {modal && <Signup handleModal={changeModal} />}
      {diaryModal && (
        <Diary closeDiaryModal={changeDiaryModal} clickmoment={moment()} />
      )}
    </MyCardWrapper>
  );
};

const mapStateToProps = ({ loginReducer, mainReducer }) => {
  return {
    userInfo: loginReducer,
    diary: mainReducer,
  };
};

export default connect(mapStateToProps)(MyCards);
