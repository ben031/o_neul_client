import styled, { keyframes } from "styled-components";
import { flexCenter } from "../global.style";

const pageTurn = keyframes`
 0% {
    transform: rotateY(0deg);
  }
  20% {
    background: #e0e0db; /*2번 색 (넘어가는 책장)*/
  }
  40% {
    background: #e0e0db;
    transform: rotateY(-180deg);
  }
  100% {
    background: #e0e0db;
    transform: rotateY(-180deg);
  }
`;

const pageTurnModal = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  20% {
    background: #797777; /*2번 색 (넘어가는 책장)*/
  }
  40% {
    background: #716e6d;
    transform: rotateY(-180deg);
  }
  100% {
    background: #716e6d;
    transform: rotateY(-180deg);
  }
`;

const Dots = keyframes`
  0% {
    content: "";
  }
  33% {
    content: ".";
  }
  66% {
    content: "..";
  }
  100% {
    content: "...";
  }
`;

export const LoadingWrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  background: ${({ modal }) => (modal ? "#716e6d" : "#e0e0db")};
  width: 20rem;
  height: 20rem;
  z-index: 500;
  border-radius: 2rem;
`;

export const LoaderBook = styled.div`
  margin: 5% auto 3rem;
  border: ${({ modal }) =>
    modal ? "0.4rem solid #ecead6" : "0.4rem solid #666660"};
  width: 6rem;
  height: 4.5rem;
  position: relative;
  perspective: 15rem;
`;

export const Page = styled.figure`
  display: block;
  width: 3rem;
  height: 4.5rem;
  border: ${({ modal }) =>
    modal ? "0.4rem solid #ecead6" : "0.4rem solid #85857d"};
  border-left: ${({ modal }) =>
    modal
      ? "0.1rem solid #424040"
      : "0.1rem solid #bbbbb4"}; /*1번 색 (책장 가운데 선 넘어가는 책장)*/
  margin: 0;
  position: absolute;
  right: -0.4rem;
  top: -0.4rem;
  overflow: hidden;
  background: ${({ modal }) =>
    modal ? "#424040" : "#bbbbb4"}; /*1번 색 (책장 가운데 선 넘어가는 책장)*/
  transform-style: preserve-3d;
  -webkit-transform-origin: left center;
  transform-origin: left center;

  &:nth-child(1) {
    animation-name: ${({ modal }) => (modal ? pageTurnModal : pageTurn)};
    animation-duration: 1.2s;
    animation-timing-function: cubic-bezier(0, 0.39, 1, 0.68);
    animation-delay: ${({ modal }) => (modal ? "0.55s" : "0.3s")};
    animation-iteration-count: infinite;
  }
  &:nth-child(2) {
    animation-name: ${({ modal }) => (modal ? pageTurnModal : pageTurn)};
    animation-duration: 1.2s;
    animation-timing-function: cubic-bezier(0, 0.39, 1, 0.68);
    animation-delay: ${({ modal }) => (modal ? "0.4s" : "0.15s")};
    animation-iteration-count: infinite;
  }
  &:nth-child(3) {
    animation-name: ${({ modal }) => (modal ? pageTurnModal : pageTurn)};
    animation-duration: 1.2s;
    animation-timing-function: cubic-bezier(0, 0.39, 1, 0.68);
    animation-delay: ${({ modal }) => (modal ? "0.25s" : "0s")};
    animation-iteration-count: infinite;
  }
`;

export const Text = styled.h1`
  color: ${({ modal }) => (modal ? "#ecead6" : "#5e5959")};
  text-align: center;
  font-family: var(--thick-font);
  text-transform: uppercase;
  font-size: 1.7rem;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    -webkit-animation: ${Dots} 2s cubic-bezier(0, 0.39, 1, 0.68) infinite;
    animation: ${Dots} 2s cubic-bezier(0, 0.39, 1, 0.68) infinite;
  }
`;
