import React, { useState, useRef, useCallback } from "react";
import axios from "axios";
import "moment/locale/ko";
import MusicModal from "./MusicModal";
import Painting from "../painting/Painting";
import "./DiaryWriting.css";
import { connect } from "react-redux";
import emojis from "../../icons/imojis";
import {
  addNewPublicDiary,
  addNewPrivateDiary,
  modifyDiary,
  modifyPublicDiary,
  changeToPublic,
  changeToPrivate,
} from "../../actions";
import LoadingModal from "./LoadingModal";
import { diffCheck, handleFileUpload } from "./diaryfunc";
import Text from "./Text";
import DiaryHeader from "./DiaryHeader";
import modifyAxios from "./modifyFunction";
import {
  ModalWrapper,
  TextArea,
  Footer,
  FooterClose,
  FooterPost,
  FooterHide,
} from "../../styles/modals/DiaryWriting.style";
import moment from "moment";

const DiaryWriting = ({
  clickmoment,
  closeDiaryModal,
  userInfo,
  addNewPublicDiary,
  addNewPrivateDiary,
  selectedDiary,
  passDiaryId,
  modifyDiary,
  modifyPublicDiary,
  changeToPrivate,
  changeToPublic,
}) => {
  console.log(clickmoment);
  const [emojiOpen, setEmojiOpen] = useState(false); //모달창 오픈 클로즈
  const [emojiChosen, setEmojiChosen] = useState(() => {
    if (selectedDiary) {
      return emojis.filter((el) => el.id === selectedDiary.feeling)[0];
    } else {
      return 0;
    }
  }); //선택한 이모티콘 정보 여기 담김
  const [musicOpen, setMusicOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isPublic, setIsPublic] = useState(() =>
    selectedDiary ? selectedDiary.isPublic : false
  );
  const [diaryText, setDiaryText] = useState("");
  const [weatherChosen, setWeatherChosen] = useState(() =>
    selectedDiary ? selectedDiary.weather : null
  );
  const [musicChosen, setMusicChosen] = useState(null);
  const [loadingModalOpen, setLoadingModalOpen] = useState(false);
  const [paintingChange, setPaintingChange] = useState(false);

  const textRef = useRef();
  const canvasRef = useRef(null);

  const paintingChangeCheck = useCallback(() => {
    if (paintingChange) {
      return;
    }
    setPaintingChange(true);
  }, [paintingChange]);

  const emojiModalOnOff = () => {
    //이모지 모달창 끄고 닫기
    setEmojiOpen(!emojiOpen);
  };

  const musicModalOnOff = () => {
    //뮤직 모달창 끄고 닫기
    setMusicOpen(!musicOpen);
  };

  const whatEmoji = (emoji) => {
    //이모지에서 선택한 놈 가져오는 함수
    setEmojiChosen({ emoji: emoji.emoji, color: emoji.color, id: emoji.id });
  };

  const canvasHeight = (window.innerWidth / 2) * 0.4;
  const textAreaHeight = window.innerHeight - 135 - canvasHeight;

  const weatherData = (weather) => {
    setWeatherChosen(weather);
  };

  const getMusicData = (music) => {
    setMusicChosen(music);
  };

  const completeDiary = async () => {
    if (emojiChosen.id && weatherChosen && diaryText && musicChosen) {
      setLoadingModalOpen(true);
      await handleFileUpload(canvasRef, userInfo).then((res) => {
        const url = res.Location;
        return axios
          .post(
            "https://oneul.site/O_NeulServer/diary/write",
            {
              date: clickmoment.format("YYYY-M-D"),
              feeling: emojiChosen.id,
              weather: weatherChosen,
              image: url,
              text: diaryText,
              isPublic: isPublic,
              musicId: Number(musicChosen),
            },
            {
              headers: {
                authorization: "Bearer " + userInfo.login.accessToken,
                "Content-Type": "application/json",
              },
            },
            {
              withCredentials: true,
            }
          )
          .then((data) => {
            return data.data.data;
          })
          .then((res) => {
            console.log("res::", res);
            if (res.isPublic) {
              addNewPublicDiary(res);
            } else {
              addNewPrivateDiary(res);
            }
            setLoadingModalOpen(false);
            closeDiaryModal(); //모달창 닫기
            // alert("오늘도 수고하셨습니다");
          })
          .catch((res) => {
            setLoadingModalOpen(false);
            console.log(res, "Error has been occured");
          });
      });
    } else {
      if (!emojiChosen.id) {
        alert("오늘의 기분을 선택해주세요");
      } else if (!weatherChosen) {
        alert("오늘의 날씨를 선택해주세요");
      } else if (!diaryText) {
        alert("일기를 입력해주세요");
      } else if (!musicChosen) {
        alert("음악을 선택해주세요");
      }
    }
  };

  const recompleteDiary = async () => {
    const url = "https://oneul.site/O_NeulServer/diary/edit";

    const diffObj = diffCheck(
      selectedDiary,
      diaryText,
      weatherChosen,
      musicChosen,
      emojiChosen,
      isPublic
    );

    setLoadingModalOpen(true);
    let uploadUrl =
      paintingChange && (await handleFileUpload(canvasRef, userInfo));
    if (!uploadUrl && !diffObj) {
      // 아무것도 변경 안 했을 때 !
      setLoadingModalOpen(false);
      return setIsEditing(false);
    } else if (uploadUrl && !diffObj) {
      // 그림만 그린 경우
      return modifyAxios(
        url,
        { image: uploadUrl.Location, diaryId: selectedDiary.id },
        userInfo
      )
        .then((res) => res.data.data)
        .then((data) => {
          if (data.isPublic) {
            modifyPublicDiary(data.id, data);
          } else {
            modifyDiary(data.id, data);
          }
          setLoadingModalOpen(false);
          setIsEditing(false);
        })
        .catch((err) => {
          console.log(err);
          setLoadingModalOpen(false);
        });
    } else if (!uploadUrl && diffObj) {
      // 그림 빼고 바꿨을 때
      return modifyAxios(
        url,
        { ...diffObj, diaryId: selectedDiary.id },
        userInfo
      )
        .then((res) => res.data.data)
        .then((data) => {
          if (selectedDiary.isPublic && !data.isPublic) {
            modifyDiary(data.id, data);
            changeToPrivate(data.id);
          } else if (!selectedDiary.isPublic && data.isPublic) {
            modifyPublicDiary(data.id, data);
            changeToPublic(data);
          } else if (data.isPublic) {
            modifyPublicDiary(data.id, data);
          } else {
            modifyDiary(data.id, data);
          }
          setLoadingModalOpen(false);
          setIsEditing(false);
        })
        .catch((err) => {
          console.log(err);
          setLoadingModalOpen(false);
        });
    } else {
      return modifyAxios(
        url,
        { image: uploadUrl.Location, ...diffObj, diaryId: selectedDiary.id },
        userInfo
      )
        .then((res) => res.data.data)
        .then((data) => {
          if (selectedDiary.isPublic && !data.isPublic) {
            modifyDiary(data.id, data);
            changeToPrivate(data.id);
          } else if (!selectedDiary.isPublic && data.isPublic) {
            modifyPublicDiary(data.id, data);
            changeToPublic(data);
          } else if (data.isPublic) {
            modifyPublicDiary(data.id, data);
          } else {
            modifyDiary(data.id, data);
          }
          setLoadingModalOpen(false);
          setIsEditing(false);
        })
        .catch((err) => {
          console.log(err);
          setLoadingModalOpen(false);
        });
    }
  };

  /* ----------------------------------------------------------------------------------------------------------------------------------------------- */

  // 일기 존재 && Read Only
  if (selectedDiary !== undefined && isEditing === false) {
    return (
      <>
        <ModalWrapper>
          <DiaryHeader
            clickmoment={moment(selectedDiary.date)}
            emojiChosen={emojiChosen}
            emojiModalOnOff={emojiModalOnOff}
            emojiOpen={emojiOpen}
            musicModalOnOff={musicModalOnOff}
            whatEmoji={whatEmoji}
            weatherData={weatherData}
            weatherChosen={weatherChosen}
            setWeatherChosen={setWeatherChosen}
            isEditing={isEditing}
          />

          <Painting
            canvasRef={canvasRef}
            musicModalOnOff={musicModalOnOff}
            selectedImage={selectedDiary.image}
            isEditing={isEditing}
          />

          <TextArea
            textAreaHeight={textAreaHeight}
            ref={textRef}
            defaultValue={selectedDiary.text}
            readOnly
          />

          <Footer>
            <FooterClose
              onClick={() => {
                closeDiaryModal();
                passDiaryId(0);
              }}
            >
              닫기
            </FooterClose>
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
                {selectedDiary.isPublic
                  ? "공개 일기입니다"
                  : "비공개 일기입니다"}
              </label>
              {selectedDiary.isOtherDiary !== true ? (
                <FooterPost onClick={() => setIsEditing(true)}>
                  수정하기
                </FooterPost>
              ) : (
                <FooterHide />
              )}
            </div>
          </Footer>
        </ModalWrapper>

        <MusicModal
          musicOpen={musicOpen}
          musicModalOnOff={musicModalOnOff}
          getMusicData={getMusicData}
          selectedMusicId={selectedDiary.music.id}
          musicChosen={musicChosen}
          setMusicChosen={setMusicChosen}
          style={{ display: "flex", position: "relative" }}
          isEditing={isEditing}
        />
      </>
    );
  }
  // 선택된 다이어리 존재 && 편집 중
  else if (selectedDiary !== undefined && isEditing === true) {
    return (
      <>
        <ModalWrapper>
          <DiaryHeader
            clickmoment={clickmoment}
            emojiChosen={emojiChosen}
            emojiModalOnOff={emojiModalOnOff}
            emojiOpen={emojiOpen}
            musicModalOnOff={musicModalOnOff}
            whatEmoji={whatEmoji}
            weatherData={weatherData}
            weatherChosen={weatherChosen}
            setWeatherChosen={setWeatherChosen}
            isEditing={isEditing}
          />

          <Painting
            canvasRef={canvasRef}
            musicModalOnOff={musicModalOnOff}
            isEditing={isEditing}
            selectedImage={selectedDiary && selectedDiary.image}
            paintingChangeCheck={paintingChangeCheck}
          />

          <TextArea
            textAreaHeight={textAreaHeight}
            ref={textRef}
            defaultValue={selectedDiary.text}
            placeholder="오늘은 어떠셨나요?"
            onChange={(e) => {
              setDiaryText(e.target.value);
            }}
          />

          <Footer>
            <FooterClose onClick={closeDiaryModal}>닫기</FooterClose>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
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

              <label
                for="check_box"
                className="private"
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
              <FooterPost className="post" onClick={recompleteDiary}>
                재등록하기
              </FooterPost>
            </div>
          </Footer>
        </ModalWrapper>

        <MusicModal
          musicOpen={musicOpen}
          musicModalOnOff={musicModalOnOff}
          getMusicData={getMusicData}
          musicChosen={musicChosen}
          setMusicChosen={setMusicChosen}
          style={{ display: "flex", position: "relative" }}
          isEditing={isEditing}
        />

        <LoadingModal loadingModalOpen={loadingModalOpen} />
      </>
    );
  } else {
    return (
      <>
        <ModalWrapper>
          <DiaryHeader
            clickmoment={clickmoment}
            emojiChosen={emojiChosen}
            emojiModalOnOff={emojiModalOnOff}
            emojiOpen={emojiOpen}
            musicModalOnOff={musicModalOnOff}
            whatEmoji={whatEmoji}
            weatherData={weatherData}
            weatherChosen={weatherChosen}
            setWeatherChosen={setWeatherChosen}
          />

          <Painting canvasRef={canvasRef} musicModalOnOff={musicModalOnOff} />
          <Text setDiaryText={setDiaryText} />

          <Footer>
            <FooterClose onClick={closeDiaryModal}>닫기</FooterClose>
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
          </Footer>
        </ModalWrapper>

        <MusicModal
          musicOpen={musicOpen}
          musicModalOnOff={musicModalOnOff}
          getMusicData={getMusicData}
          style={{ display: "flex", position: "relative" }}
        />
        <LoadingModal loadingModalOpen={loadingModalOpen} />
      </>
    );
  }
};

//이렇게 써도됌
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addNewPublicDiary: (newobj) => dispatch(addNewPublicDiary(newobj)),
//     addNewPrivateDiary: (newobj) => dispatch(addNewPublicDiary(newobj)),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(DiaryWriting);

const mapStateToProps = ({ loginReducer }) => {
  return {
    userInfo: loginReducer,
  };
};

export default connect(mapStateToProps, {
  addNewPublicDiary,
  addNewPrivateDiary,
  modifyDiary,
  modifyPublicDiary,
  changeToPrivate,
  changeToPublic,
})(DiaryWriting);
