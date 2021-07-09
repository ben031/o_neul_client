import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngry as farAngry,
  faFlushed as farFlushed,
  faGrimace as farGrimace,
  faDizzy as farDizzy,
  faMeh as farMeh,
  faFrown as farFrown,
  faSmile as farSmile,
  faGrinBeamSweat as farGrinBeamSweat,
  faGrinHearts as farGrinHearts,
  faTired as farTired,
  faSadTear as farSadTear,
  faSadCry as farSadCry,
  faMehRollingEyes as farMehRollingEyes,
  faGrinStars as farGrinStars,
  faSurprise as farSurprise,
  faLaughBeam as farLaughBeam,
  faKissWinkHeart as farKissWinkHeart,
  faLaughSquint as farLaughSquint,
  faGrinSquintTears as farGrinSquintTears,
  faGrinTongueWink as farGrinTongueWink,
} from "@fortawesome/free-regular-svg-icons";
import AOS from "aos";
import { useEffect } from "react";
import { translateY } from "../../styles/global.style";

const emojis = [
  { id: 1, emoji: farMeh, color: "#a1a1a4" },
  { id: 2, emoji: farSmile, color: "#ffdb00" },
  { id: 3, emoji: farLaughBeam, color: "#fdca30" },
  { id: 4, emoji: farLaughSquint, color: "#ffcb00" },
  { id: 5, emoji: farGrinSquintTears, color: "#fdbb30" },
  {
    id: 6,
    emoji: farKissWinkHeart,
    color: "#ea4c89",
  },
  { id: 7, emoji: farGrinHearts, color: "#ea4c89" },
  { id: 8, emoji: farGrinStars, color: "#6b5aed" },
  { id: 9, emoji: farGrinTongueWink, color: "#2d72d9" },
  {
    id: 10,
    emoji: farGrinBeamSweat,
    color: "#7acef4",
  },
  { id: 11, emoji: farFrown, color: "#ff8200" },
  { id: 12, emoji: farAngry, color: "#fe423f" },
  { id: 13, emoji: farGrimace, color: "#e32119" },
  { id: 14, emoji: farTired, color: "#97a2a2" },
  { id: 15, emoji: farDizzy, color: "#8a8b8c" },
  { id: 16, emoji: farSurprise, color: "#8ee000" },
  { id: 17, emoji: farFlushed, color: "#6cc24a" },
  {
    id: 18,
    emoji: farMehRollingEyes,
    color: "#8a8acb",
  },
  { id: 19, emoji: farSadTear, color: "#2bb3f3" },
  { id: 20, emoji: farSadCry, color: "#147efb" },
];

const modal_show = keyframes`
 from {
      transform: translateY(-20%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;

const EmojiWrapper = styled.div`
  display: flex;
  position: absolute;
  background-color: white;
  width: 22rem;
  height: 16.6 rem;
  flex-direction: column;
  border-radius: 0.5rem;
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  animation: ${modal_show} 0.5s ease-in;

  &:before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -1rem;
    border-width: 1rem;
    border-style: solid;
    border-color: transparent transparent #80594a transparent;
  }
`;

const EmojisHeaders = styled.div`
  color: #80594a;
  background-color: rgba(255, 204, 204, 0.4);
  font-size: 1.7rem;
  border: none;
  border-radius: 0.5rem;
  text-align: center;
  padding: 0.2rem;
  margin-bottom: 0.3rem;
`;

const EmojisBody = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 0.5rem;
`;

const EmojiUnit = styled.div`
  text-align: center;
  width: 20%;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;

const Emojis = ({ emojiModalOnOff, whatEmoji }) => {
  return (
    <>
      <EmojiWrapper className="emoji-wrapper">
        <EmojisHeaders className="emojis-header">오늘의 나</EmojisHeaders>
        <EmojisBody className="emojis-body">
          {emojis.map((emoji, idx) => {
            return (
              <EmojiUnit
                key={idx}
                onClick={() => {
                  whatEmoji(emoji);
                  emojiModalOnOff();
                }}
                style={{
                  fontSize: 25,
                  color: emoji.color,
                  // color: idx === emojiChosen ? emoji.color : "#c6d6df",
                }}
              >
                <FontAwesomeIcon
                  icon={emoji.emoji}
                  // size={idx === emojiChosen ? 30 : 25}
                />
              </EmojiUnit>
            );
          })}
        </EmojisBody>
      </EmojiWrapper>
    </>
  );
};

export default Emojis;
