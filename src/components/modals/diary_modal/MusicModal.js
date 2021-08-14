import React from "react";
import styled from "styled-components";
import Music from "./music/Music";

const MusicModal = ({
  musicOpen,
  musicModalOnOff,
  getMusicData,
  selectedMusicId,
  isEditing,
  musicChosen,
  setMusicChosen,
}) => {
  return (
    <MusicSection musicOpen={musicOpen}>
      <Music
        musicModalOnOff={musicModalOnOff}
        getMusicData={getMusicData}
        selectedMusicId={selectedMusicId}
        isEditing={isEditing}
        musicChosen={musicChosen}
        setMusicChosen={setMusicChosen}
        musicOpen={musicOpen}
      />
    </MusicSection>
  );
};
export default MusicModal;

const MusicSection = styled.section`
  display: flex;
  position: fixed;
  z-index: 200;
  transform: translateY(${(props) => (props.musicOpen ? "0" : "-90%")});
  opacity: ${({ musicOpen }) => (musicOpen ? 0 : 1)};
  opacity: 1;
  transition: all 0.4s ease-in-out;
  top: -10%;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;
