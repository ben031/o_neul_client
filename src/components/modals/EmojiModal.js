import React from "react";
import Emojis from "./Emojis";
import styled from "styled-components";

const EmojiModal = ({ emojiOpen, emojiModalOnOff, whatEmoji }) => {
  console.log("스타일", EmojiModal.emojiOpen);
  return (
    <EmojisOuter emojiOpen={emojiOpen}>
      <Emojis
        emojiModalOnOff={emojiModalOnOff}
        emojiOpen={emojiOpen}
        whatEmoji={whatEmoji}
      />
    </EmojisOuter>
  );
};

const EmojisOuter = styled.div`
  display: ${({ emojiOpen }) => (emojiOpen ? "flex" : "none")};
  position: relative;
  align-items: center;
  justify-content: center;
  // animation: modal-show 0.3s;
  top: 9.8rem;
  z-index: 200;
  transition: all 1s;
`;

export default EmojiModal;
