import React from "react";
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
      {selectedDiary && !isEditing ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <label
            for="check_box"
            style={{
              fontSize: "1.5rem",
              color: "#605138",
              fontFamily: "var(--thick-font)",
              fontWeight: "800",
              display: "flex",
              alignItems: "center",
            }}
          >
            {selectedDiary && selectedDiary.isPublic
              ? "공개 일기입니다"
              : "비공개 일기입니다"}
          </label>
          {selectedDiary && selectedDiary.isOtherDiary !== true ? (
            <FooterPost onClick={() => setIsEditing(true)}>수정하기</FooterPost>
          ) : (
            <FooterHide />
          )}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <input
            type="checkbox"
            id="check_box"
            onClick={() => {
              setIsPublic(!isPublic);
            }}
          ></input>
          <label
            for="check_box"
            style={{
              fontSize: "1.5rem",
              color: "#605138",
              fontFamily: "var(--thick-font)",
              fontWeight: "800",
              display: "flex",
              alignItems: "center",
            }}
          >
            글 공개
          </label>
          <FooterPost onClick={completeDiary}>등록하기</FooterPost>
        </div>
      )}
    </Footer>
  );
};

export default ModalFooter;
