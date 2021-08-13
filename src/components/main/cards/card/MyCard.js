import React, { useState, useRef, useEffect } from "react";
import {
  MyDiary,
  MyDiaryFrontHeader,
  MyDiaryCardFront,
  MyDiaryBack,
  MyDiaryBackTextWrapper,
  MyDiaryBackText,
  IconWrapper,
} from "../../../../styles/main/cards/MyCards.style";
import { findEmj, splitDate } from "./cardfunction";
import { ic_more_horiz } from "react-icons-kit/md/ic_more_horiz";
import { icons } from "../../../../../src/icons/icons";
import { FaceWeather } from "../../../../styles/main/cards/OtherCards.style";
import { removeDiary, removePublicDiary } from "../../../../actions/index";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import { Icon } from "react-icons-kit";
import { trash2 } from "react-icons-kit/feather/trash2";
import axios from "axios";
import moment from "moment";

const MyCard = ({
  diary,
  removeDiary,
  removePublicDiary,
  userInfo,
  modalHandle,
  setDeleteLoading,
}) => {
  const [setting, setSetting] = useState(false);
  const { faceIcons, weatherIcons } = icons;
  const { id, isPublic, date, feeling, text, weather } = diary;
  const { accessToken } = userInfo.login;
  const textBoxRef = useRef(null);
  const [scrollCheck, setScrollCheck] = useState(false);

  useEffect(() => {
    if (textBoxRef.current.scrollHeight > textBoxRef.current.offsetHeight) {
      setScrollCheck(true);
    }
  }, []);

  const deleteUrl = "https://oneul.site/O_NeulServer/diary/delete";

  const removePost = (e) => {
    e.stopPropagation();
    setDeleteLoading(true);
    return axios
      .delete(deleteUrl, {
        headers: { authorization: "Bearer " + accessToken },
        data: { diaryId: id },
        withCredentials: true,
      })
      .then(() => {
        if (isPublic) {
          removePublicDiary(id);
        } else {
          removeDiary(id);
        }
        setDeleteLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const openModifyDiaryModal = () => {
    modalHandle(moment(date));
  };

  return (
    <MyDiary onClick={openModifyDiaryModal}>
      <MyDiaryCardFront>
        <MyDiaryFrontHeader>
          {splitDate(date)[0]}년 {splitDate(date)[1]}월 {splitDate(date)[2]}일
        </MyDiaryFrontHeader>
        <img src={userInfo.userInfo.picture} alt="" />
        <IconWrapper>
          <FaceWeather>
            {weather && findEmj(weatherIcons, weather).icon}
            {feeling && findEmj(faceIcons, feeling).icon}
          </FaceWeather>
        </IconWrapper>
      </MyDiaryCardFront>
      <MyDiaryBack>
        <MyDiaryBackTextWrapper
          onClick={() => setSetting(setSetting(() => setting && false))}
        >
          <SettingDiv>
            <Icon
              icon={ic_more_horiz}
              size={25}
              onClick={(e) => {
                e.stopPropagation();
                setSetting(!setting);
              }}
            />
            <DragDown
              click={setting}
              onClick={(e) => {
                e.stopPropagation();
                removePost(e);
              }}
            >
              <Icon icon={trash2} size={20} />
              <span>삭제하기</span>
            </DragDown>
          </SettingDiv>
          <Mouse overflow={scrollCheck}>
            <Wheel />
          </Mouse>
          <MyDiaryBackText ref={textBoxRef}>{text}</MyDiaryBackText>
        </MyDiaryBackTextWrapper>
      </MyDiaryBack>
    </MyDiary>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  return { userInfo: loginReducer };
};

export default connect(mapStateToProps, { removePublicDiary, removeDiary })(
  MyCard
);

const SettingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  color: black;
  font-size: 1.5rem;
  top: 0.4rem;
  right: 0.8rem;
`;

const DragDown = styled.div`
  display: ${({ click }) => (click ? "flex" : "none")};
  align-items: flex-end;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background: white;
  padding: 0.5rem 1rem;
  transition: background 0.3s ease;

  & span {
    margin-left: 0.8rem;
  }

  &:hover {
    background: #f2f3f4;
  }
`;

const wheel = keyframes`
  0% {
    top: 10%;
    transform: translate(-50%,-10%);
    opacity: 1;
  }
  
  100%{
    top: 70%;
    transform: translate(-50%,-70%);
    opacity: 0;
  }
`;

const Mouse = styled.div`
  display: ${({ overflow }) => (overflow ? "block" : "none")};
  position: absolute;
  height: 25px;
  width: 16px;
  border: 2px solid rgba(0, 0, 0, 0.4);
  border-radius: 85px;
  right: 6px;
  bottom: 6px;
`;

const Wheel = styled.div`
  position: absolute;
  width: 3px;
  height: 8px;
  background: rgba(0, 0, 0, 0.4);
  left: 50%;
  border-radius: 15px;
  animation: ${wheel} 1.5s ease;
  animation-iteration-count: 10;
`;
