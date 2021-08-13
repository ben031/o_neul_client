import styled from "styled-components";
import { flexCenter, BREAK_POINT_LG_SCREEN } from "../../global.style";

export const DayWarpper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex: 1;
  background-color: ${({ today }) => today && "#e1e7ef"};
  cursor: pointer;
  &:not(:last-child) {
    border-right: 1px solid #666;
  }

  &:hover {
    & span {
      font-weight: 900;
    }

    &::before {
      transform: scale3d(1, 1, 1); // Show full-size
      transition: transform 0.3s;
    }
  }

  &::before {
    content: "";
    position: absolute;
    width: 0%;
    height: 101%;
    top: 0;
    left: 0;
    transform-origin: center;
    border-left: 4px solid #6477b9;
    transform: scale3d(1, 0, 1);
  }
`;

export const DaySpan = styled.span`
  color: ${({ today }) => today && "white"};
  position: relative;
  display: inline-block;
  padding: 0.3rem 0;
  border-top: 1px solid #666;
  font-family: Noto Sans KR;
  color: ${({ sunday, saturday, lastmonth }) =>
    lastmonth ? "lightgrey" : sunday ? "red" : saturday ? "blue" : "black"};
`;

export const Emoji = styled.div`
  height: 100%;
  ${flexCenter}

  & svg {
    font-size: 2.3rem;

    @media only screen and (min-width: ${BREAK_POINT_LG_SCREEN}px) {
      font-size: 2.7rem;
    }
  }
`;
