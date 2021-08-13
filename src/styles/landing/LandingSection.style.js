import styled, { css } from "styled-components";
import {
  BREAK_POINT_MOBILE,
  BREAK_POINT_MD_SCREEN,
  BREAK_POINT_LG_SCREEN,
  BREAK_POINT_16LG_SCREEN,
  flexCenter,
} from "../global.style";

export const HeaderSection = styled.header`
  position: relative;
  height: 100vh;
  width: 100%;
  color: white;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: -1;

  & video {
    height: 100vh;
    width: 100%;
    object-fit: cover;
    position: fixed;
  }
`;

export const LandingNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 11rem;
  margin: 0 auto;
  z-index: 5;

  & a {
    color: var(--primary-color);
  }

  & h1 {
    font-size: 3.3rem;
  }

  & span {
    font-size: 1.7rem;
    border: 1px solid var(--primary-color);
    padding: 0.4em 1.5em;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.45s all;
  }

  & span:hover {
    color: #222;
    background-color: var(--primary-color);
  }

  /* 768px */
  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    & h1 {
      font-size: 3.5rem;
    }
    & span {
      font-size: 1.8rem;
    }
  }

  @media only screen and (min-width: ${BREAK_POINT_MD_SCREEN}px) {
    & h1 {
      font-size: 3.8rem;
    }
  }

  @media only screen and (min-width: ${BREAK_POINT_LG_SCREEN}px) {
    & h1 {
      font-size: 4.2rem;
    }
  }
`;

export const LdInnerSection = styled.section`
  /* border: 5px solid white; */
  height: 100%;
  width: 100%;
  overflow: hidden;
  ${flexCenter}
  flex-direction: column;
`;

export const LdInnerSpanWrapper = styled.div`
  /* margin-top: -10rem; */
  position: relative;
  top: -5%;
  color: var(--primary-color);
`;

export const LdInnerSpan = styled.span`
  font-size: ${(props) => (props.first ? "3.6rem" : "2rem")};
  line-height: ${(props) => (props.first ? "2.1" : "1.7")};
  letter-spacing: 0.1rem;
  position: ${(props) => props.first && "relative"};
  font-family: ${(props) => props.first && "var(--thick-font)"};

  ${({ first }) =>
    first &&
    css`
      &::before {
        content: "";
        width: 0;
        height: 3px;
        background-color: var(--primary-color);
        position: absolute;
        bottom: -13%;
        transition: 0.45s all;
      }

      &:hover {
        &::before {
          width: 100%;
        }
      }
    `}

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    font-size: ${(props) => (props.first ? "4.2rem" : "2.3rem")};
  }

  @media only screen and (min-width: ${BREAK_POINT_LG_SCREEN}px) {
    font-size: ${(props) => (props.first ? "4.7rem" : "2.6rem")};
  }

  @media only screen and (min-width: ${BREAK_POINT_16LG_SCREEN + 1}px) {
    font-size: ${(props) => (props.first ? "5.5rem" : "3.3rem")};
    line-height: ${(props) => (props.first ? "2.1" : "1.5")};
  }
`;

export const LdBtnWrapper = styled.div`
  margin-top: 8rem;
  display: flex;
  justify-content: space-around;
`;

export const LdBtn = styled.button`
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  font-size: 1.8rem;
  padding: 0.4em 1.5em;
  font-family: var(--primary-font);
  border-radius: 4px;
  transition: 0.5s all ease-out;
  margin-right: ${({ first }) => first && "3rem"};

  &:hover {
    color: #222;
    background-color: var(--primary-color);
  }

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    font-size: 2.1rem;
  }

  @media only screen and (min-width: ${BREAK_POINT_MD_SCREEN}px) {
    font-size: 2.3rem;
  }

  @media only screen and (min-width: ${BREAK_POINT_LG_SCREEN}px) {
    font-size: 2.5rem;
  }
`;
