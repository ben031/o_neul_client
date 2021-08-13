import styled from "styled-components";
import {
  flexSpaceBtw,
  translateY,
  BREAK_POINT_MOBILE,
  BREAK_POINT_MD_SCREEN,
  BREAK_POINT_LG_SCREEN,
} from "../global.style";

export const SecondDivForColor = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--third-color);
`;

export const MainSecondInnerSection = styled.section`
  height: 100vh;
  margin: 0 auto;
  ${flexSpaceBtw}
  flex-direction: column;
  position: relative;
`;

export const MainSecondHeader = styled.h2`
  font-size: 2.5rem;
  font-family: var(--thick-font);
  color: var(--black-color);
  position: relative;
  top: 13%;
  margin-bottom: 9rem;

  @media only screen and (min-width: ${BREAK_POINT_MD_SCREEN}px) {
    & {
      font-size: 2.8rem;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 15%;
  ${flexSpaceBtw}
  justify-content: space-around;
  background-color: var(--primary-color);

  @media only screen and (min-width: ${BREAK_POINT_MD_SCREEN}px) {
    & h2 {
      font-size: 1.6rem;
    }
    & p {
      font-size: 1.2rem;
    }
  }

  @media only screen and (min-width: ${BREAK_POINT_LG_SCREEN}px) {
    & h2 {
      font-size: 1.9rem;
    }
  }
`;

export const ScrollTop = styled.button`
  position: absolute;
  right: 4%;
  bottom: 18%;
  padding: 0.5rem;
  border: none;
  border-radius: 50%;
  background-color: var(--primary-color);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  animation: ${translateY} 2s infinite;

  @media only screen and (min-width: ${BREAK_POINT_LG_SCREEN}px) {
    padding: 0.6rem;
  }
`;

export const LinkDiv = styled.div`
  font-size: 1.4rem;
`;

export const FooterBtnDiv = styled.div`
  & button {
    padding: 0.9rem 1.9rem;
    /* border: 2px solid gray; */
    font-size: 1.7rem;
    font-family: var(--primary-font);
    border-radius: 4px;
    transition: 0.25s all;
    background-color: var(--third-color);
    border: none;
  }

  & button:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;
