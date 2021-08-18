import React from "react";
import styled from "styled-components";
import {
  Footer,
  FooterClose,
  FooterHide,
  FooterPost,
} from "../../../styles/modals/DiaryWriting.style";
import "./DiaryWriting.css";

const ModalFooter = ({
  closeDiaryModal,
  selectedDiary,
  setIsEditing,
  passDiaryId,
  completeDiary,
  recompleteDiary,

  isPublic,
  setIsPublic,
  isEditing,
}) => {
  return (
    <Footer>
      <FooterClose
        onClick={() => {
          closeDiaryModal();
          passDiaryId(0);
        }}
      >
        닫기
      </FooterClose>
      {!selectedDiary ? (
        <FooterDiv>
          <input
            type="checkbox"
            id="check_box"
            onClick={() => {
              setIsPublic(!isPublic);
            }}
          ></input>
          <CheckBoxLabel htmlFor={"check_box"}>글 공개</CheckBoxLabel>
          <FooterPost onClick={completeDiary}>등록하기</FooterPost>
        </FooterDiv>
      ) : !isEditing ? (
        <FooterDiv>
          <CheckBoxLabel htmlFor={"check_box"}>
            {selectedDiary && selectedDiary.isPublic
              ? "공개 일기입니다"
              : "비공개 일기입니다"}
          </CheckBoxLabel>
          {selectedDiary && selectedDiary.isOtherDiary !== true ? (
            <FooterPost onClick={() => setIsEditing(true)}>수정하기</FooterPost>
          ) : (
            <FooterHide />
          )}
        </FooterDiv>
      ) : (
        <FooterDiv>
          {isPublic === false ? (
            <input
              type="checkbox"
              id="check_box"
              checked={false}
              onChange={() => {
                setIsPublic(!isPublic);
              }}
            ></input>
          ) : (
            <input
              type="checkbox"
              id="check_box"
              checked={true}
              onChange={() => {
                setIsPublic(!isPublic);
              }}
            ></input>
          )}

          <CheckBoxLabel htmlFor={"check_box"}>글 공개</CheckBoxLabel>
          <FooterPost className="post" onClick={recompleteDiary}>
            재등록하기
          </FooterPost>
        </FooterDiv>
      )}
    </Footer>
  );
};

export default ModalFooter;

const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CheckBoxLabel = styled.label`
  font-size: 1.5rem;
  color: #605138;
  font-family: var(--thick-font);
  font-weight: 800;
  display: flex;
  align-items: center;
`;

/**
 * #check_box[type="checkbox"] + label {
  display: block;
  margin: 0.2em;
  cursor: pointer;
  padding: 0.2em;
}

#check_box[type="checkbox"] {
  display: none;
}

#check_box[type="checkbox"] + label:before {
  content: "";
  border: 0.1rem solid #827870;
  border-radius: 50%;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  vertical-align: center;
  align-items: center;
  color: transparent;
  transition: 0.2s;
}

#check_box[type="checkbox"] + label:active:before {
  transform: scale(0);
}

#check_box[type="checkbox"]:checked + label:before {
  background-color: #837970;
  border-color: #837970;
  color: #fff;
}
 */
