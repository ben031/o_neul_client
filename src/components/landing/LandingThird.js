import React from "react";
import { Icon } from "react-icons-kit";
import { angleUp } from "react-icons-kit/fa/angleUp";
import LandingCard from "./card/LandingCard";
import Scroll from "react-scroll";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import {
  SecondDivForColor,
  MainSecondInnerSection,
  MainSecondHeader,
  Footer,
  ScrollTop,
  LinkDiv,
  FooterBtnDiv,
} from "../../styles/landing/LandingThird.style";

const LandingThird = () => {
  const scrollToTop = () => {
    const scroll = Scroll.animateScroll;
    scroll.scrollToTop();
  };

  return (
    <SecondDivForColor>
      <MainSecondInnerSection>
        <MainSecondHeader data-aos={"fade-down"} data-aos-duration={"800"}>
          오늘을 이용해주신 분들
        </MainSecondHeader>
        <ScrollTop onClick={scrollToTop}>
          <Icon size={"35"} icon={angleUp} style={style} />
        </ScrollTop>
        <LandingCard />
        <Footer>
          <div>
            <h2>오늘 .</h2>
            <p>Copyright &copy; 2021</p>
          </div>
          <LinkDiv>
            <div className="first-line">김가형 김훈</div>
            <div className="second-line">김덕기 임해성</div>
          </LinkDiv>
          <FooterBtnDiv>
            <Link to="/main">
              <button>일기쓰기</button>
            </Link>
          </FooterBtnDiv>
        </Footer>
      </MainSecondInnerSection>
    </SecondDivForColor>
  );
};

export default LandingThird;

const style = { position: "relative", bottom: "5px" };
