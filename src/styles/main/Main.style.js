import styled from "styled-components";
import {
  BREAK_POINT_MOBILE,
  flexSpaceBtw,
  BREAK_POINT_LG_SCREEN,
  BREAK_POINT_MD_SCREEN,
  BREAK_POINT_16LG_SCREEN,
  flexCenter,
} from "../global.style";

export const MainHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 5rem;
  background: white;
  z-index: 200;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.24);

  @media only screen and (min-width: ${BREAK_POINT_16LG_SCREEN + 1}px) {
    height: 6rem;
  }
`;

export const HeaderWrapper = styled.div`
  ${flexSpaceBtw}
  width: 80%;
  min-height: 100%;
  margin: 0 auto;
  font-family: var(--thick-font);

  & a {
    color: black;
  }

  & h1 {
    font-size: 2rem;
  }

  & button {
    padding: 0.4em 1em;
    font-family: var(--thick-font);
    font-size: 1.4rem;
    border-radius: 3px;
    border-color: grey;
  }

  @media only screen and (min-width: ${BREAK_POINT_16LG_SCREEN + 1}px) {
    & h1 {
      font-size: 2.4rem;
    }

    & button {
      padding: 0.5em 1em;
      font-size: 1.7rem;
    }
  }
`;

export const MainSection = styled.section`
  height: 100vh;
  font-family: var(--primary-font);
`;

export const MainInnerSection = styled.section`
  height: 100%;
  padding-top: 4.2rem;
  z-index: 100;

  @media only screen and (min-width: ${BREAK_POINT_LG_SCREEN}px) {
    ${flexCenter}
  }

  @media only screen and (min-width: ${BREAK_POINT_16LG_SCREEN + 1}px) {
    padding-top: 7em;
  }
`;

export const MainInnerWrapper = styled.div`
  margin: 4rem auto;
  width: 80%;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    width: 75%;
  }

  @media only screen and (min-width: ${BREAK_POINT_LG_SCREEN}px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 2rem auto;
    padding: 1rem;
  }
  /* @media only screen and (min-width: ${BREAK_POINT_16LG_SCREEN}px) {
    height: 100%;
  } */
`;

export const CalendarWrapper = styled.div`
  height: 50rem;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-bottom-left-radius: 110px 19px;
  border-bottom-right-radius: 120px 24px;
  border-top: solid 2px #666;
  border-right: solid 2px #666;
  border-left: solid 2px #666;
  box-shadow: 3px 15px 8px -10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  margin-bottom: 3rem;

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    min-width: 55rem;
  }

  @media only screen and (min-width: ${BREAK_POINT_LG_SCREEN}px) {
    min-height: calc(54.6vh + 20rem);
    min-width: 45rem;
  }
  @media only screen and (min-width: ${BREAK_POINT_16LG_SCREEN + 1}px) {
    min-height: calc(54.6vh + 25rem);
    min-width: 55rem;
  }
`;

export const DiaryWrapper = styled.section`
  @media only screen and (min-width: ${BREAK_POINT_LG_SCREEN}px) {
    height: 100%;
    flex: 1;
    margin-left: 3rem;
  }
`;
