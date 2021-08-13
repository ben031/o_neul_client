import React from "react";
import Music from "../music/Music";

const MusicModal = (props) => {
  const {
    musicOpen,
    musicModalOnOff,
    getMusicData,
    selectedMusicId,
    isEditing,
    musicChosen,
    setMusicChosen,
  } = props;

  return (
    <section
      className="mainNav"
      style={
        musicOpen
          ? {
              transform: "translateY(0)",
              opacity: 1,
              // zIndex: musicOpen ? 51 : 1,
            }
          : null
      }
    >
      <Music
        musicModalOnOff={musicModalOnOff}
        getMusicData={getMusicData}
        selectedMusicId={selectedMusicId}
        isEditing={isEditing}
        musicChosen={musicChosen}
        setMusicChosen={setMusicChosen}
        musicOpen={musicOpen}
      />
    </section>
  );
};
export default MusicModal;
