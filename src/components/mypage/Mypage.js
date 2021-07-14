import { useState, useEffect } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Modify from './modify/Modify';
import MypageHeader from './MypageHeader';
import ProfileImg from './profile/ProfileImg';
import './MyDiary.css';
import DiaryPost from './diary/DiaryPost';
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
  UserContent,
  Button,
} from '../../styles/mypage/Mypage.style';
import { connect } from "react-redux";
import { login } from '../../actions';


const Mypage = ({ login, userLogin }) => {
  const [users, setUsers] = useState({
    nickname: userLogin.userInfo.nickname,
    email: userLogin.userInfo.email
  });
  // console.log(userLogin.userInfo)

  return (
    <>
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
                    <UserContent>
                      <DiaryPost />
                    </UserContent>
                  </UserContentForm>
                </nav>
              </div>
            </ContentContainer>
          </FormContainer>
        </Wrapper>
      </BoxContainer>
    </>
  )
}

const mapStateToProps = ({ loginReducer }) => {
  return {
    userLogin: loginReducer,
  };
};

export default connect(mapStateToProps, { login })(Mypage);
