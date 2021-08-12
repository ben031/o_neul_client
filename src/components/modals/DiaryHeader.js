import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile as farSmile } from "@fortawesome/free-regular-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import EmojiModal from "./EmojiModal";
import WeatherModal from "./Weather";

const DiaryHeader = ({
  clickmoment,
  emojiChosen,
  emojiModalOnOff,
  emojiOpen,
  musicModalOnOff,
  whatEmoji,
  weatherData,
  weatherChosen,
  isEditing,
}) => {
  const emojiModalHandler = React.useCallback(() => {
    emojiModalOnOff();
  }, [emojiModalOnOff]);

  return (
    <Header className="header">
      <HeaderDate className="date">
        <span> {clickmoment && clickmoment.format("LL dddd")}</span>
      </HeaderDate>

      <HeaderEmoji className="emoji">
        <FontAwesomeIcon
          icon={emojiChosen ? emojiChosen.emoji : farSmile}
          onClick={() => {
            if (isEditing) {
              emojiModalHandler();
            } else {
              return;
            }
          }}
          style={{
            fontSize: 40,
            cursor: "pointer",
            color: emojiChosen ? emojiChosen.color : "#86888a",
            backgroundColor: "transparent",
          }}
        />
        <EmojiModal
          emojiModalOnOff={emojiModalOnOff}
          emojiOpen={emojiOpen}
          whatEmoji={whatEmoji}
        ></EmojiModal>
      </HeaderEmoji>

      <HeaderWeather className="weather">
        <WeatherModal
          weatherData={weatherData}
          weatherChosen={weatherChosen}
          isEditing={isEditing}
        />
      </HeaderWeather>

      <button className="music_btn" onClick={musicModalOnOff}>
        <FontAwesomeIcon
          icon={faMusic}
          style={{
            color: "#7a706d",
            fontSize: 20,
            border: "none",
            pointerEvents: "none",
          }}
        />
      </button>

      <button className="music_btn_up" onClick={musicModalOnOff}>
        <FontAwesomeIcon
          icon={faMusic}
          style={{
            color: "#7a706d",
            fontSize: 20,
            border: "none",
            pointerEvents: "none",
          }}
        />
      </button>
    </Header>
  );
};

export default React.memo(DiaryHeader);

const Header = styled.div`
  border: none;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  min-height: 4.5rem;
  background-color: #f7f8e7;
  background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
`;

const HeaderDate = styled.div`
  flex: 5 1 40%;
  font-size: 2rem;
  font-family: var(--thick-font);
  text-align: center;
  font-weight: 700;
  color: #595b5c;

  @media screen and (max-width: 570px) {
    & {
      font-size: 1.8rem;
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 502px) {
    & {
      font-size: 1.6rem;
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 455px) {
    & {
      font-size: 1.4rem;
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 406px) {
    & {
      font-size: 1.2rem;
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 340px) {
    & {
      font-size: 1.1rem;
      margin-left: 1rem;
    }
  }
`;

const HeaderEmoji = styled.div`
  /* border: 1px solid black; */
  position: relative;
  flex: 1 1 20%;
  text-align: center;
  /* background-color: white; */
  padding: 0 -0.5rem;
  border-radius: 1rem;
`;

const HeaderWeather = styled.div`
  flex: 5 1 40%;
  text-align: center;
  font-size: 30;
  /* background-color: white; */
  /* border-radius: 1rem; */
  /* margin-right: 1rem; */

  @media screen and (max-width: 570px) {
    & {
      margin-right: 0.2rem;
    }
  }
`;
