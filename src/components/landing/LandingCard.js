import React from "react";
import { Icon } from "react-icons-kit";
import { angleLeft } from "react-icons-kit/fa/angleLeft";
import { angleRight } from "react-icons-kit/fa/angleRight";
import mypic from "../../images/mypic.jpeg";
import gahyung from "../../images/kahyung.jpeg";
import haesung from "../../images/haesung.jpeg";
import hoon from "../../images/hoon.jpeg";
import Carousel, { consts } from "react-elastic-carousel";
import {
  CardSection,
  Cardul,
  CardWrapper,
  CardFront,
  CardBack,
  CardFrontHeader,
  CardBackText,
  Card,
} from "../../styles/landing/LandingCard.style";
import styled from "styled-components";
import "aos/dist/aos.css";

const LandingCard = () => {
  const responsive = [
    { width: 400, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 800, itemsToShow: 3 },
  ];

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <Icon size={"60"} icon={angleLeft} style={style} />
      ) : (
        <Icon size={"60"} icon={angleRight} style={style} />
      );
    return (
      <Arrow onClick={onClick} disabled={isEdge}>
        {pointer}
      </Arrow>
    );
  };

  return (
    <CardSection>
      <Cardul data-aos="fade-up" data-aos-duration={"800"}>
        <CardWrapper>
          <Carousel breakPoints={responsive} renderArrow={myArrow}>
            <Card>
              <CardFront>
                <img src={mypic} alt="" />
                <CardFrontHeader>화려한 조명이 나를 감싸</CardFrontHeader>
              </CardFront>
              <CardBack>
                <CardBackText>
                  오늘을 사용하면 일기에 노래로 넣을 수 있고 그림도 그릴 수
                  있어서 아주 편리해요. 매일 잠 자기 전에 일기 쓰기 좋은
                  페이지를 찾고 있었느데 아주 좋은 거 같아요.
                </CardBackText>
              </CardBack>
            </Card>
            <Card>
              <CardFront>
                <img
                  src={gahyung}
                  alt=""
                  style={{ objectPosition: "-8px 55%" }}
                />
                <CardFrontHeader>취사병 1</CardFrontHeader>
              </CardFront>
              <CardBack>
                <CardBackText>
                  오늘을 사용하면 일기에 노래로 넣을 수 있고 그림도 그릴 수
                  있어서 아주 편리해요. 매일 잠 자기 전에 일기 쓰기 좋은
                  페이지를 찾고 있었느데 아주 좋은 거 같아요.
                </CardBackText>
              </CardBack>
            </Card>
            <Card>
              <CardFront>
                <img
                  src={haesung}
                  alt=""
                  style={{ objectPosition: "-30px 60%" }}
                />
                <CardFrontHeader>취사병 2</CardFrontHeader>
              </CardFront>
              <CardBack>
                <CardBackText>
                  오늘을 사용하면 일기에 노래로 넣을 수 있고 그림도 그릴 수
                  있어서 아주 편리해요. 매일 잠 자기 전에 일기 쓰기 좋은
                  페이지를 찾고 있었느데 아주 좋은 거 같아요.
                </CardBackText>
              </CardBack>
            </Card>
            <Card>
              <CardFront>
                <img
                  src={hoon}
                  alt=""
                  style={{ objectPosition: "-15px 45%" }}
                />
                <CardFrontHeader>부사관 1.</CardFrontHeader>
              </CardFront>
              <CardBack>
                <CardBackText>
                  이 비행의 끝이 보인다. 쉼 없이 날아온 것 같은데 여전히 이륙 중
                  .. 나의 목적지를 향한 비행은 끝이 아닌 시작이었다 .
                </CardBackText>
              </CardBack>
            </Card>
            <Card>
              <CardFront>
                <img src={mypic} alt="" />
                <CardFrontHeader>화려한 조명이 싸악2.</CardFrontHeader>
              </CardFront>
              <CardBack>
                <CardBackText>
                  오늘을 사용하면 일기에 노래로 넣을 수 있고 그림도 그릴 수
                  있어서 아주 편리해요. 매일 잠 자기 전에 일기 쓰기 좋은
                  페이지를 찾고 있었느데 아주 좋은 거 같아요.
                </CardBackText>
              </CardBack>
            </Card>
          </Carousel>
        </CardWrapper>
      </Cardul>
    </CardSection>
  );
};

export default LandingCard;

const style = {
  cursor: "pointer",
};

const Arrow = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-10%);
`;
