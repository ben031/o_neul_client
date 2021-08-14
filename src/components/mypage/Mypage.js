import { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Modify from "./modify/Modify";
import MypageHeader from "./MypageHeader";
import ProfileImg from "./profile/ProfileImg";
import "../../styles/mypage/MyDiary.css";
import DiaryPost from "./diary/DiaryPost";
import {
  BoxContainer,
  FormContainer,
  Wrapper,
  UserInfoForm,
  UserContentForm,
  ContentContainer,
  ContentTitle,
  Frame,
  Info,
  Input,
  Button,
} from "../../styles/mypage/Mypage.style";
import { connect } from "react-redux";
import { login, fetchAllLoginDiary } from "../../actions";
import Diary from "../modals/diary_modal/Diary";
import fetchAxios from "../main/useFetch";
import AOS from "aos";

const Mypage = ({ login, userLogin, userInfo, fetchAllLoginDiary }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [users, setUsers] = useState({
    nickname: userLogin.userInfo.nickname,
    email: userLogin.userInfo.email,
  });
  const [isClick, setIsClick] = useState(false);
  const [clickmoment, setClickmoment] = useState(null);
  const [selectedDiaryId, setSelectedDiaryId] = useState(0);
  const [myDiaries, setMyDiaries] = useState(null);

  useEffect(() => {
    fetchAxios(userInfo)
      .then((result) => {
        fetchAllLoginDiary(
          result.publicDiary,
          result.myDiary,
          result.musicList
        );
        setMyDiaries(result.myDiary);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (clickmoment !== null) {
      return setIsClick((prev) => !prev);
    }
  }, [clickmoment]);

  const closeDiaryModal = () => {
    setIsClick((prev) => !prev);
  };

  const momentHandler = (day) => {
    setClickmoment(day);
  };

  const passDiaryId = (diaryId) => {
    setSelectedDiaryId(diaryId);
  };

  return (
    <>
      {isClick && (
        <Diary
          clickmoment={clickmoment}
          closeDiaryModal={closeDiaryModal}
          selectedDiaryId={selectedDiaryId}
          passDiaryId={passDiaryId}
        />
      )}
      <BoxContainer>
        <MypageHeader />
        <Wrapper>
          <FormContainer>
            <ContentContainer>
              <UserInfoForm>
                <Switch>
                  <Route path="/mypage/modify" exact>
                    <Frame>
                      <Modify />
                    </Frame>
                  </Route>
                  <Frame>
                    <ContentTitle>나의 오늘,</ContentTitle>
                    <Info>나의 프로필</Info>
                    <ProfileImg />
                    <Input
                      type="text"
                      value={users.nickname}
                      name="nickname"
                      readOnly
                    />
                    <Input
                      type="email"
                      value={users.email}
                      name="email"
                      readOnly
                    />
                    <Link to="/mypage/modify">
                      <Button>나의 정보수정</Button>
                    </Link>
                  </Frame>
                </Switch>
              </UserInfoForm>
              <div class="diary">
                <input id="diary" type="checkbox" />
                <label for="diary">나의일기</label>
                <nav>
                  <UserContentForm>
                    <DiaryPost
                      myDiaries={myDiaries}
                      setMyDiaries={setMyDiaries}
                      modalHandle={momentHandler}
                    />
                  </UserContentForm>
                </nav>
              </div>
            </ContentContainer>
          </FormContainer>
        </Wrapper>
      </BoxContainer>
    </>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  return {
    userLogin: loginReducer,
    userInfo: loginReducer,
  };
};

export default connect(mapStateToProps, { login, fetchAllLoginDiary })(Mypage);
