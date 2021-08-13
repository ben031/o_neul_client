import { createGlobalStyle, css, keyframes } from "styled-components";

export const BREAK_POINT_PHONE = 480;
export const BREAK_POINT_MOBILE = 768;
export const BREAK_POINT_MD_SCREEN = 1024;
export const BREAK_POINT_LG_SCREEN = 1200;
export const BREAK_POINT_16LG_SCREEN = 1440;

export const GlobalStyle = createGlobalStyle`

  // 꼭 rem을 사용하세요 ~!
  // 1px, 2px 정도는 px로 사용하셔도 괜찮습니다.
  // 10px === 1rem


  @font-face {
    font-family: 'MapoFlowerIsland';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoFlowerIslandA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'MapoGoldenPier';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoGoldenPierA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'MaruBuri-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/MaruBuri-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    font-size: 62.5%;
  }

  :root{
    --primary-color: #ebe9dd;
    --secondary-color: #3f3d34;
    --third-color: #beccda;
    --point-color: #8ca4c1;
    --black-color: #222;

    --primary-font:'MapoFlowerIsland';
    --thick-font: 'MapoGoldenPier';
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
  
  body{
    overflow-x: hidden;
  }

  button{
    text-transform: none;
    background: transparent;
    cursor: pointer;
    border: 1px solid black;
  }
`;

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexSpaceBtw = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const translateY = keyframes`
  0% {
    transform: translateY(-20%);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20%);
  }
`;

export const emojiModalShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
 `;
