import React, { useEffect } from "react";
import { Icon } from "react-icons-kit";
import { pencilSquareO } from "react-icons-kit/fa/pencilSquareO";
import { ic_palette } from "react-icons-kit/md/ic_palette";
import { users } from "react-icons-kit/fa/users";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingThird from "./LandingThird";
import {
  MainWrapper,
  MainDivForColor,
  MainInnerSection,
  MainInnerWrapper,
  MainInnerArticle,
  VideoContainer,
  SecondSectionHeader,
} from "../../styles/landing/LandingMain.style";

const LandingMain = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <MainWrapper id="mainsection">
      <MainDivForColor>
        <MainInnerSection>
          <SecondSectionHeader data-aos={"fade-down"} data-aos-duration={"800"}>
            오늘의 주요 기능
          </SecondSectionHeader>
          <MainInnerWrapper>
            <MainInnerArticle data-aos={"fade-right"} data-aos-duration={"800"}>
              <div>
                <h2>
                  <Icon icon={pencilSquareO} size={25} /> 달력 클릭 후 일기 작성
                </h2>
                <p>
                  원하는 날짜를 클릭하여 그 날의 일기를 작성하실 수 있습니다 .
                </p>
              </div>
              <div>
                <h2>
                  <Icon icon={ic_palette} size={25} /> 여러 가지 기능으로 하루를
                  표현
                </h2>
                <p>
                  사진 업로드 및 그림판 기능과 노래를 선택하여 오늘의 일기를
                  풍부하게 표현해보세요 .
                </p>
              </div>
              <div>
                <h2>
                  <Icon icon={users} size={25} /> 일기 공유
                </h2>
                <p>타인의 하루를 보고 공감 버튼을 눌러 보세요 .</p>
              </div>
            </MainInnerArticle>
            <VideoContainer
              className="video-container"
              data-aos={"fade-left"}
              data-aos-duration={"500"}
            >
              <img
                src={
                  "https://user-images.githubusercontent.com/77098060/126061940-83ac21bc-9a61-4dd1-bf26-d3bba3495f5e.gif"
                }
                muted
                autoPlay
                loop
                playsInline
              ></img>
            </VideoContainer>
          </MainInnerWrapper>
        </MainInnerSection>
        <LandingThird />
      </MainDivForColor>
    </MainWrapper>
  );
};

export default LandingMain;
