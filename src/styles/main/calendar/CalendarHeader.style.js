import styled from "styled-components";
import { flexCenter } from "../../global.style";

export const CalHeader = styled.header`
  ${flexCenter}
  justify-content: space-around;
  margin: 1rem 0;
`;

export const Year = styled.h2`
  font-size: 2.7rem;
  font-family: MaruBuri-Regular;
  letter-spacing: 1px;
  font-weight: 100;
  pointer-events: none;
`;

export const DaysWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  pointer-events: none;
`;

export const Days = styled.h5`
  font-family: MaruBuri-Regular;
  font-size: 1.4rem;
  flex-grow: 1;
  color: ${({ day }) =>
    day === "일" ? "red" : day === "토" ? "blue" : "black"};
`;
