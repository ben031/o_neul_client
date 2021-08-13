import React, { useRef, useEffect, useState } from "react";
import { Icon } from "react-icons-kit";
import { circle, stepBackward, stepForward } from "react-icons-kit/iconic/";
import { pause2 } from "react-icons-kit/icomoon/pause2";
import { ic_close } from "react-icons-kit/md/ic_close";
import { plus } from "react-icons-kit/feather/plus";
import uniqueId from "lodash/uniqueId";
import axios from "axios";

import {
  volumeMedium,
  volumeMute,
  volumeMute2,
  volumeLow,
  volumeHigh,
} from "react-icons-kit/icomoon";

import "./Music.css";
import SelectBar from "./SelectBar";
// import musics from "./musics";
import { connect } from "react-redux";

const music = [
  {
    id: 1,
    name: "장르를 선택하고",
    author: "음악을 선택해주세요",
    img: "https://www.bensound.com/bensound-img/thejazzpiano.jpg",
    audio: "https://www.bensound.com/bensound-music/bensound-thejazzpiano.mp3",
    duration: "0:00",
    genre: { genre_name: "오늘" },
  },
];

const Music = ({
  musicModalOnOff,
  musicOpen,
  getMusicData,
  musicList,
  selectedMusicId,
  isEditing,
}) => {
  const [pause, setPause] = useState(false);
  const [index, setIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [musicLists, setMusicLists] = useState(music);
  const [filtered, setFiltered] = useState(music);
  const [genre, setGenre] = useState("");
  const [genreList, setGenreList] = useState("");
  const [selectedSong, setSelectedSong] = useState(null);
  const [volume, setVolume] = useState(0.05);
  const [muteState, setMuteState] = useState(false);
  const [currentSong, setCurrentSong] = useState(musicList.musicList[index]);

  let playerRef = useRef();
  let timelineRef = useRef();
  let hoverPlayheadRef = useRef();
  let playheadRef = useRef();
  let volumeControllerRef = useRef(); //볼륨 슬라이더 보임 안보임 효과 때문에 넣었음

  // console.log("선택한 장르", genre);

  useEffect(() => {
    if (selectedMusicId) {
      return setCurrentSong(selectedMusic);
    }
  }, []);

  useEffect(() => {
    if (selectedMusic && isEditing === false) {
      setPause(true);
    }
  }, [isEditing]);

  // console.log("셀릭티드 뮤직아이디:::", selectedMusicId);

  const getSelectedMusic = () => {
    if (selectedMusicId !== undefined) {
      return musicList.musicList.filter((el) => el.id === selectedMusicId)[0];
    }
    return;
  };

  const selectedMusic = getSelectedMusic();

  useEffect(() => {
    setCurrentSong(filtered[index]);
  }, [index]);

  useEffect(() => {
    //리덕스로 곡 불러올떄
    musicSetting();
  }, [musicOpen]);

  const musicSetting = () => {
    //리덕스로 곡 불러올떄
    let dataLists = genreKinds(musicList.musicList);
    setGenreList(dataLists);
    setMusicLists(musicList.musicList);
    setFiltered(musicList.musicList);
  };

  const genreKinds = (data) => {
    //장르 종류 추출해서 셀렉트바에 보내줘야함
    let kinds = [];
    for (let i = 0; i < data.length; i++) {
      if (kinds.includes(data[i].genre.genre_name) === false) {
        kinds = [...kinds, data[i].genre.genre_name];
      }
      kinds = kinds;
    }
    return kinds;
  };

  const getGenre = (selectedGenre) => {
    setGenre(selectedGenre);
  };

  const sendSongInfo = (e) => {
    setSelectedSong(e.target.title);
  };

  useEffect(() => {
    playerRef.current.volume = volume;
    playerRef.current.muted = muteState;
  }, [volume, muteState]);

  useEffect(() => {
    playerRef.current.addEventListener("timeupdate", timeUpdate);
    playerRef.current.addEventListener("ended", nextSong, false);
    timelineRef.current.addEventListener("click", changeCurrentTime, false);
    timelineRef.current.addEventListener("mousemove", hoverTimeLine, false);
    timelineRef.current.addEventListener("mouseout", resetTimeLine, false);
    return () => {
      if (playerRef.current && timelineRef.current) {
        playerRef.current.removeEventListener("timeupdate", timeUpdate);
        playerRef.current.removeEventListener("ended", nextSong);
        timelineRef.current.removeEventListener("click", changeCurrentTime);
        timelineRef.current.removeEventListener("mousemove", hoverTimeLine);
        timelineRef.current.removeEventListener("mouseout", resetTimeLine);
      }
    };
  });

  const changeCurrentTime = (e) => {
    //재생시간바 시간 이동하기
    const duration = playerRef.current.duration; //duration 동영상의 길이
    const playheadWidth = timelineRef.current.offsetWidth; //offsetWidth CSS상으로 재생시간바의 길이
    const offsetWidth = timelineRef.current.offsetLeft; //offsetLeft CSS상으로 body박스의 가로 길이 right은 없나봄.
    const userClickWidth = e.clientX - offsetWidth; //e.clientX(body박스 가로 길의 전체 중 내가 클릭한 좌표의 x값 - 재생시간바의 길이
    // console.log("e.clientX", e.clientX);
    // console.log("offsetWidth", offsetWidth);
    // console.log(
    //   "timelineRef.current.offsetLeft",
    //   timelineRef.current.offsetLeft
    // );
    const userClickWidthInPercent = (userClickWidth * 100) / playheadWidth; //재생시간바 대비 몇 퍼센트인지 계산해서 CSS에 효과주기

    playheadRef.current.style.width = userClickWidthInPercent + "%"; //CSS style.width에 %로 나타내줌
    playerRef.current.currentTime = (duration * userClickWidthInPercent) / 100; //플레이어에도 진척도 마찬가지로 넣어줌 CSS가 보여주는 것이랑 실제랑 같게 해야하므로
  };

  const timeUpdate = () => {
    if (playerRef.current !== null) {
      const duration = playerRef.current.duration;
      // const timelineWidth =
      //   timelineRef.current.offsetWidth - playheadRef.current.offsetWidth;
      const playPercent = 100 * (playerRef.current.currentTime / duration);
      console.log(
        "playerRef.current.currentTime",
        playerRef.current.currentTime
      );
      playheadRef.current.style.width = playPercent + "%";
      const currentTime = formatTime(parseInt(playerRef.current.currentTime));
      setCurrentTime(currentTime);
      console.log("타임업데이트 ", playerRef.current.duration);
      // 여기 실험
      if (playheadRef.current.style.width === "100%") {
        console.log("백프로!");
        playheadRef.current.style.width = "0%";
        // updatePlayer();
      }
    }
  };

  const hoverTimeLine = (e) => {
    const duration = playerRef.current.duration;
    const playheadWidth = timelineRef.current.offsetWidth;
    const offsetWidth = timelineRef.current.offsetLeft;
    const userClickWidth = e.clientX - offsetWidth;
    const userClickWidthInPercent = (userClickWidth * 100) / playheadWidth;

    if (userClickWidthInPercent <= 100) {
      hoverPlayheadRef.current.style.width = userClickWidthInPercent + "%";
    }

    const time = (duration * userClickWidthInPercent) / 100;

    if (time >= 0 && time <= duration) {
      hoverPlayheadRef.current.dataset.content = formatTime(time);
    }
  };

  const resetTimeLine = () => {
    hoverPlayheadRef.current.style.width = 0;
  };

  const formatTime = (currentTime) => {
    const minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime % 60);

    seconds = seconds >= 10 ? seconds : "0" + (seconds % 60);

    const formatTime = minutes + ":" + seconds;

    return formatTime;
  };

  const updatePlayer = () => {
    setCurrentSong(filtered[index]);
    // const audio = new Audio(currentSong.audio);
    console.log("실험", playerRef.current);
    playerRef.current.load();
  };

  const nextSong = () => {
    setIndex((index + 1) % filtered.length);
    updatePlayer();
    if (pause) {
      playerRef.current.play();
    }
  };

  const prevSong = () => {
    setIndex((index + filtered.length - 1) % filtered.length);
    updatePlayer();
    if (pause) {
      playerRef.current.play();
    }
  };

  const playOrPause = () => {
    //스테이트 고치기
    setCurrentSong(filtered[index]);
    const audio = new Audio(currentSong.audio);
    if (!pause) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
    setPause(!pause);
  };

  const clickAudio = (key) => {
    //스테이트 고치기
    setIndex(key);

    updatePlayer();
    if (pause) {
      playerRef.current.play();
    }
  };

  const filterListByGenre = (allList) => {
    //장르에 맞춰서 필터해주는 함수
    let filteredList = allList.filter((el) => el.genre.genre_name === genre);
    return filteredList;
  };
  //실험
  useEffect(() => {
    let filteredList = filterListByGenre(musicLists);
    // console.log("장르 바뀔 때마다 필터한 리스트", filteredList);
    // setMusicLists(filteredList);
    setFiltered(filteredList);
    setIndex(0);
  }, [genre]);

  if (selectedMusic && isEditing === false) {
    return (
      <div className="player-wrapper">
        <div className="current-song">
          <Icon
            size={18}
            // className="close-btn"
            className={`close-btn ${musicOpen ? "open" : null}`}
            icon={ic_close}
            onClick={() => {
              musicModalOnOff();
            }}
          />

          {selectedMusic && (
            <>
              <audio autoPlay loop ref={playerRef}>
                <source src={selectedMusic.audio} type="audio/ogg" />
                Your browser does not support the audio element.
              </audio>

              <div className="song-info">
                <span className="song-name">{selectedMusic.name}</span>
                <span className="song-author">{selectedMusic.author}</span>
              </div>

              <div className="time">
                <div className="current-time">{currentTime}</div>
                <div className="end-time">{selectedMusic.duration}</div>
              </div>
            </>
          )}
          <div ref={timelineRef} id="timeline">
            <div ref={playheadRef} id="playhead"></div>
            <div
              ref={hoverPlayheadRef}
              className="hover-playhead"
              data-content="0:00"
            ></div>
          </div>

          <div className="controls">
            <div>
              <button onClick={playOrPause} className="play current-btn">
                {!pause ? (
                  <Icon size={23} icon={circle} />
                ) : (
                  <Icon size={20} icon={pause2} />
                )}
              </button>
            </div>

            <span className="volume-controller-wrapper2">
              <button
                className="mute-btn"
                onClick={() => {
                  setMuteState(!muteState);
                }}
                onMouseOver={() => {
                  volumeControllerRef.current.style.opacity = 1;
                }}
              >
                <Icon
                  size={12}
                  icon={
                    muteState
                      ? volumeMute2
                      : volume < 0.01 //0으로 하면 안먹음
                      ? volumeMute
                      : volume < 0.34
                      ? volumeLow
                      : volume < 0.67
                      ? volumeMedium
                      : volumeHigh
                  }
                />
              </button>

              <input
                ref={volumeControllerRef}
                className="volume-controller2"
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={muteState ? 0 : volume}
                onChange={(e) => {
                  if (muteState) {
                    setMuteState(false);
                  }
                  setVolume(e.target.value);
                }}
                onMouseOut={() => {
                  volumeControllerRef.current.style.opacity = 0;
                }}
              />
            </span>
          </div>
        </div>
      </div>
    );
  } else if (selectedMusic && isEditing === true) {
    return (
      <div className="player-wrapper">
        <div className="current-song">
          <Icon
            size={18}
            // className="close-btn"
            className={`close-btn ${musicOpen ? "open" : null}`}
            icon={ic_close}
            onClick={() => {
              musicModalOnOff();
            }}
          />

          <SelectBar getGenre={getGenre} genreList={genreList} />
          {currentSong && (
            <>
              <audio ref={playerRef}>
                <source src={currentSong.audio} type="audio/ogg" />
                Your browser does not support the audio element.
              </audio>

              <div className="song-info">
                <span className="song-name">{currentSong.name}</span>
                <span className="song-author">{currentSong.author}</span>
              </div>

              <div className="time">
                <div className="current-time">{currentTime}</div>
                <div className="end-time">{currentSong.duration}</div>
              </div>
            </>
          )}
          <div ref={timelineRef} id="timeline">
            <div ref={playheadRef} id="playhead"></div>
            <div
              ref={hoverPlayheadRef}
              className="hover-playhead"
              data-content="0:00"
            ></div>
          </div>

          <div className="controls">
            <div>
              <button onClick={prevSong} className="prev prev-next current-btn">
                <Icon icon={stepBackward} />
              </button>

              <button onClick={playOrPause} className="play current-btn">
                {!pause ? (
                  <Icon size={23} icon={circle} />
                ) : (
                  <Icon size={20} icon={pause2} />
                )}
              </button>
              <button onClick={nextSong} className="next prev-next current-btn">
                <Icon icon={stepForward} />
              </button>
            </div>

            <div className="song_alert_wrapper">
              <span className="song_alert">
                {selectedSong &&
                  musicLists &&
                  `${musicLists[selectedSong].name} 곡이 배경음악으로 설정되었습니다`}
              </span>
            </div>

            <span className="volume-controller-wrapper">
              <button
                className="mute-btn"
                onClick={() => {
                  setMuteState(!muteState);
                }}
                onMouseOver={() => {
                  volumeControllerRef.current.style.opacity = 1;
                }}
              >
                <Icon
                  size={12}
                  icon={
                    muteState
                      ? volumeMute2
                      : volume < 0.01 //0으로 하면 안먹음
                      ? volumeMute
                      : volume < 0.34
                      ? volumeLow
                      : volume < 0.67
                      ? volumeMedium
                      : volumeHigh
                  }
                />
              </button>

              <input
                ref={volumeControllerRef}
                className="volume-controller"
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={muteState ? 0 : volume}
                onChange={(e) => {
                  if (muteState) {
                    setMuteState(false);
                  }
                  setVolume(e.target.value);
                }}
                onMouseOut={() => {
                  volumeControllerRef.current.style.opacity = 0;
                }}
              />
            </span>
          </div>
        </div>
        <div className="play-list">
          {filtered.map((music, arrayIndex) => (
            <div className="play-list-one" key={uniqueId()}>
              <div
                onClick={() => clickAudio(arrayIndex)}
                className={
                  "track " +
                  (index === arrayIndex && !pause ? "current-audio" : "") +
                  (index === arrayIndex && pause ? "play-now" : "")
                }
              >
                <img className="track-img" src={music.img} />
                <div className="track-info">
                  <span className="track-name">
                    {music.name.length >= 20
                      ? `${music.name.slice(0, 18)}...`
                      : music.name}
                  </span>
                  <span className="track-author">{music.author}</span>
                </div>
                <span className="track-duration">
                  {index === music.id ? currentTime : music.duration}
                </span>
                <button
                  className="track-select"
                  title={music.id}
                  onClick={(e) => {
                    sendSongInfo(e);
                    getMusicData(e.target.title);
                    e.stopPropagation(); //버튼 클릭할 때 재생 곡이 바뀌는 걸 방지해준다. 버블링 캡쳐링 금지
                  }}
                >
                  <Icon
                    size={22}
                    icon={plus}
                    style={{ pointerEvents: "none" }}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="player-wrapper">
        <div className="current-song">
          <Icon
            size={18}
            // className="close-btn"
            className={`close-btn ${musicOpen ? "open" : null}`}
            icon={ic_close}
            onClick={() => {
              musicModalOnOff();
            }}
          />

          <SelectBar getGenre={getGenre} genreList={genreList} />
          {currentSong && (
            <>
              <audio ref={playerRef}>
                <source src={currentSong.audio} type="audio/ogg" />
                Your browser does not support the audio element.
              </audio>

              <div className="song-info">
                <span className="song-name">{currentSong.name}</span>
                <span className="song-author">{currentSong.author}</span>
              </div>

              <div className="time">
                <div className="current-time">{currentTime}</div>
                <div className="end-time">{currentSong.duration}</div>
              </div>
            </>
          )}
          <div ref={timelineRef} id="timeline">
            <div ref={playheadRef} id="playhead"></div>
            <div
              ref={hoverPlayheadRef}
              className="hover-playhead"
              data-content="0:00"
            ></div>
          </div>

          <div className="controls">
            <div className="controls_wrapper">
              <button onClick={prevSong} className="prev prev-next current-btn">
                <Icon icon={stepBackward} />
              </button>

              <button onClick={playOrPause} className="play current-btn">
                {!pause ? (
                  <Icon size={23} icon={circle} />
                ) : (
                  <Icon size={20} icon={pause2} />
                )}
              </button>
              <button onClick={nextSong} className="next prev-next current-btn">
                <Icon icon={stepForward} />
              </button>
            </div>

            <div className="song_alert_wrapper">
              <span className="song_alert">
                {selectedSong &&
                  musicLists &&
                  `${musicLists[selectedSong].name} 곡이 배경음악으로 설정되었습니다`}
              </span>
            </div>

            <span className="volume-controller-wrapper">
              <button
                className="mute-btn"
                onClick={() => {
                  setMuteState(!muteState);
                }}
                onMouseOver={() => {
                  volumeControllerRef.current.style.opacity = 1;
                }}
              >
                <Icon
                  size={12}
                  icon={
                    muteState
                      ? volumeMute2
                      : volume < 0.01 //0으로 하면 안먹음
                      ? volumeMute
                      : volume < 0.34
                      ? volumeLow
                      : volume < 0.67
                      ? volumeMedium
                      : volumeHigh
                  }
                />
              </button>

              <input
                ref={volumeControllerRef}
                className="volume-controller"
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={muteState ? 0 : volume}
                onChange={(e) => {
                  if (muteState) {
                    setMuteState(false);
                  }
                  setVolume(e.target.value);
                }}
                onMouseOut={() => {
                  volumeControllerRef.current.style.opacity = 0;
                }}
              />
            </span>
          </div>
        </div>
        <div className="play-list">
          {filtered.map((music, arrayIndex) => (
            <div className="play-list-one" key={uniqueId()}>
              <div
                onClick={() => clickAudio(arrayIndex)}
                className={
                  "track " +
                  (index === arrayIndex && !pause ? "current-audio" : "") +
                  (index === arrayIndex && pause ? "play-now" : "")
                }
              >
                <img className="track-img" src={music.img} />
                <div className="track-info">
                  <span className="track-name">
                    {music.name.length >= 20
                      ? `${music.name.slice(0, 18)}...`
                      : music.name}
                  </span>
                  <span className="track-author">{music.author}</span>
                </div>
                <span className="track-duration">
                  {index === music.id ? currentTime : music.duration}
                </span>
                <button
                  className="track-select"
                  title={music.id}
                  onClick={(e) => {
                    sendSongInfo(e);
                    getMusicData(e.target.title);
                    e.stopPropagation(); //버튼 클릭할 때 재생 곡이 바뀌는 걸 방지해준다. 버블링 캡쳐링 금지
                  }}
                >
                  <Icon
                    size={22}
                    icon={plus}
                    style={{ pointerEvents: "none" }}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

const mapStateToProps = ({ mainReducer }) => {
  return {
    musicList: mainReducer,
  };
};

export default connect(mapStateToProps)(Music);
