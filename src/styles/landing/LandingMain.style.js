import styled from "styled-components";
import {
  BREAK_POINT_MOBILE,
  BREAK_POINT_MD_SCREEN,
  BREAK_POINT_LG_SCREEN,
  BREAK_POINT_16LG_SCREEN,
  flexCenter,
} from "../global.style";
import { MainSecondHeader } from "./LandingThird.style";

export const MainWrapper = styled.main`
  width: 100%;
`;

export const MainDivForColor = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--primary-color);
`;

export const MainInnerSection = styled.section`
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  ${flexCenter}
  flex-direction: column;
`;

export const MainInnerWrapper = styled.div`
  ${flexCenter}
  width: 100%;
  min-height: 80vh;
  flex-direction: column;

  /* 768px */
  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    flex-direction: row;
    justify-content: end;
    align-items: center;
  }

  @media only screen and (min-width: ${BREAK_POINT_LG_SCREEN}px) {
    width: 80%;
  }
`;

export const MainInnerArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 50%;
  color: var(--black-color);
  z-index: 100;
  flex-shrink: 0;

  & h2 {
    font-size: 2rem;
    margin-bottom: 0.7em;
    line-height: 1.8;
    font-family: var(--thick-font);
  }
  & p {
    font-size: 1.6rem;
    line-height: 1.85;
    padding-bottom: 1rem;
  }

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    width: 30%;
    & h2 {
      font-size: 2.1rem;
    }
    & p {
      font-size: 1.7rem;
    }
  }

  /* 1200px */
  @media only screen and (min-width: ${BREAK_POINT_LG_SCREEN}px) {
    & h2 {
      font-size: 2.3rem;
    }
    & p {
      font-size: 1.8rem;
    }
  }

  @media only screen and (min-width: ${BREAK_POINT_16LG_SCREEN + 1}px) {
    & p {
      line-height: 2;
    }
  }
`;

export const VideoContainer = styled.div`
  width: 100%;

  & img {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    margin-left: 4rem;
  }

  @media only screen and (min-width: ${BREAK_POINT_MD_SCREEN}px) {
    min-width: 20rem;
    max-width: 83rem;
  }
`;

export const SecondSectionHeader = styled(MainSecondHeader)`
  position: static;
  margin-bottom: 1rem;
  font-size: 2.5rem;

  @media only screen and (min-width: ${BREAK_POINT_MD_SCREEN}px) {
    & {
      font-size: 3rem;
    }
  }
`;
