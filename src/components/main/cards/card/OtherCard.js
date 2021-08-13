import React from "react";
import { MyDiaryFrontHeader } from "../../../../styles/main/cards/MyCards.style";
import {
  NameSpan,
  OtherDiary,
  OtherDiaryIconWrapper,
  FaceWeather,
  Heart,
  Count,
} from "../../../../styles/main/cards/OtherCards.style";
import { Icon } from "react-icons-kit";
import { heart, heartO } from "react-icons-kit/fa";
import { splitDate, findEmj, checkEmpha } from "./cardfunction";
import { connect } from "react-redux";
import { icons } from "../../../../icons/icons";
import { addEmpathy, removeEmpathy } from "../../../../actions";
import axios from "axios";

const OtherCard = ({
  diary,
  userInfo,
  addEmpathy,
  removeEmpathy,
  closeDiaryModal,
  passDiaryId,
}) => {
  const { faceIcons, weatherIcons } = icons;
  const { id, nickname } = userInfo.userInfo;
  const { accessToken } = userInfo.login;
  const { date, feeling, user, weather, emphathies } = diary;

  const addEpt = (e) => {
    // stop Bubbling of Event
    e.stopPropagation();
    if (!userInfo.userInfo.id) {
      alert("로그인 후 이용하실 수 있습니다🙈");
      return;
    }

    return axios
      .post(
        "https://oneul.site/O_NeulServer/emphathy/add",
        { diaryId: diary.id },
        {
          headers: { authorization: "Bearer " + accessToken },
          withCredentials: true,
        }
      )
      .then((res) => {
        return res.data.data.emphathy.id;
      })
      .then((data) => {
        addEmpathy(diary.id, { id: data, user: { id, nickname } });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeEpt = (e) => {
    // stop Bubbling of Event
    e.stopPropagation();

    return axios
      .delete("https://oneul.site/O_NeulServer/emphathy/delete", {
        headers: { authorization: "Bearer " + accessToken },
        data: { diaryId: diary.id },
        withCredentials: true,
      })
      .then((res) => {
        removeEmpathy(diary.id, res.data.data.emphathy.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <OtherDiary
      onClick={() => {
        passDiaryId(diary.id);
        closeDiaryModal();
      }}
    >
      <MyDiaryFrontHeader>
        {splitDate(date)[0]}년 {splitDate(date)[1]}월 {splitDate(date)[2]}일
      </MyDiaryFrontHeader>
      <img src={user && user.picture} alt="" />
      <NameSpan>{user && user.nickname}</NameSpan>
      <OtherDiaryIconWrapper>
        <Heart>
          <Count>{emphathies.length}</Count>
          {checkEmpha(emphathies, id) ? (
            <Icon
              icon={heart}
              size={26}
              style={{
                color: "#f06f83",
                cursor: "pointer",
              }}
              onClick={(e) => removeEpt(e)}
            ></Icon>
          ) : (
            <Icon
              icon={heartO}
              size={26}
              style={{ color: "#f06f83", cursor: "pointer" }}
              onClick={(e) => addEpt(e)}
            ></Icon>
          )}
        </Heart>
        <FaceWeather>
          {weather && findEmj(weatherIcons, weather).icon}
          {feeling && findEmj(faceIcons, feeling).icon}
        </FaceWeather>
      </OtherDiaryIconWrapper>
    </OtherDiary>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  return { userInfo: loginReducer };
};

export default connect(mapStateToProps, { addEmpathy, removeEmpathy })(
  OtherCard
);
