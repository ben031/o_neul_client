import styled from "styled-components";
import {
  BREAK_POINT_PHONE,
  BREAK_POINT_MOBILE,
  BREAK_POINT_MD_SCREEN,
  BREAK_POINT_LG_SCREEN,
  flexCenter,
} from "../global.style";

export const CardSection = styled.section`
  width: 80%;
  ${flexCenter}
`;

export const Cardul = styled.ul`
  width: 50rem;
  height: 33.3rem;
  overflow: hidden;

  @media only screen and (min-width: ${BREAK_POINT_MD_SCREEN}px) {
    width: 75rem;
  }

  @media only screen and (min-width: ${BREAK_POINT_LG_SCREEN}px) {
    width: 100rem;
  }
`;

export const CardWrapper = styled.section`
  position: relative;
  display: flex;
  width: 100%;
`;

export const CardFace = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  ${flexCenter}
  transition: 1s all ease-out;
  backface-visibility: hidden;
  border-radius: 5px;
  flex-direction: column;
`;

export const CardFront = styled(CardFace)`
  background: var(--primary-color);
  display: flex;
  flex-direction: column;

  & img {
    clip-path: circle();
    object-fit: cover;
    width: 20rem;
    height: 10rem;
    position: absolute;
    top: 18%;

    @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
      width: 18rem;
      height: 9rem;
    }
  }

  @media only screen and (min-width: ${BREAK_POINT_MD_SCREEN}px) {
    & img {
      width: 25rem;
      height: 12.5rem;
    }
  }
`;

export const CardBack = styled(CardFace)`
  background: var(--point-color);
  color: var(--primary-color);
  transform: rotateY(180deg);
`;

export const CardFrontHeader = styled.h1`
  font-size: 1.6rem;
  position: absolute;
  bottom: 18%;
  text-align: center;

  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    font-size: 1.4rem;
  }

  @media only screen and (min-width: ${BREAK_POINT_MD_SCREEN}px) {
    font-size: 1.8rem;
  }
`;

export const CardBackText = styled.h2`
  width: 70%;
  height: 85%;
  line-height: 1.8;
  font-size: 1.45rem;
  color: var(--black-color);
  font-family: var(--thick-font);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (min-width: ${BREAK_POINT_MD_SCREEN}px) {
    font-size: 1.7rem;
    height: 80%;
  }

  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    font-size: 1.4rem;
  }
`;

export const Card = styled.div`
  min-width: 20rem;
  min-height: 26.4rem;
  transform-style: preserve-3d;
  &:not(:first-child) {
    margin-left: 3rem;
  }

  &:hover ${CardFront} {
    transform: rotateY(180deg);
  }

  &:hover ${CardBack} {
    transform: rotateY(360deg);
  }

  @media only screen and (max-width: ${BREAK_POINT_PHONE}px) {
    min-width: 15rem;
    min-height: 22rem;
  }

  @media only screen and (min-width: ${BREAK_POINT_MD_SCREEN}px) {
    min-width: 25rem;
    min-height: 33.3rem;
  }
`;
