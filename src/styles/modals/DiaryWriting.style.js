import styled from "styled-components";
export const ModalWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 50%;
  max-height: 95vh;
  /* min-width: 50rem; */
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media screen and (max-width: 1440px) {
    & {
      width: 67rem;
      height: 67rem;
    }
  }
  @media screen and (max-width: 760px) {
    & {
      width: 98%;
      height: 92%;
    }
  }
  @media screen and (max-width: 670px) {
    & {
      width: 98%;
      height: 92%;
    }
  }
  @media screen and (max-width: 600px) {
    & {
      width: 98%;
      height: 92%;
    }
  }
  @media screen and (max-width: 570px) {
    & {
      width: 98%;
      height: 92%;
    }
  }
  @media screen and (max-width: 500px) {
    & {
      width: 98%;
      height: 92%;
    }
  }

  @media screen and (max-width: 412px) {
    & {
      width: 98%;
      height: 80%;
    }
  }
`;

export const Header = styled.div`
  border: none;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  min-height: 4.5rem;
  background-color: #f7f8e7;
  background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
`;

export const HeaderDate = styled.div`
  flex: 5 1 40%;
  font-size: 2rem;
  font-family: var(--thick-font);
  text-align: center;
  font-weight: 700;
  color: #595b5c;

  @media screen and (max-width: 570px) {
    & {
      font-size: 1.8rem;
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 497px) {
    & {
      font-size: 1.6rem;
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 451px) {
    & {
      font-size: 1.4rem;
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 406px) {
    & {
      font-size: 1.2rem;
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 340px) {
    & {
      font-size: 1.1rem;
      margin-left: 1rem;
    }
  }
`;

export const HeaderEmoji = styled.div`
  position: relative;
  flex: 1 1 20%;
  text-align: center;
  padding: 0 -0.5rem;
  border-radius: 1rem;
`;

export const HeaderWeather = styled.div`
  flex: 5 1 40%;
  text-align: center;
  font-size: 30;

  @media screen and (max-width: 570px) {
    & {
      margin-right: 0.2rem;
    }
  }
`;

export const TextArea = styled.textarea`
  border: none;
  height: ${(props) => props.textAreaHeight}px;
  resize: none;
  border: none;
  font-size: 1.7rem;
  outline: none;
  color: #7f7366;
  font-family: var(--thick-font);
  background-attachment: local;
  background-position: 0 0.5rem;
  background-image: url("https://www.transparenttextures.com/patterns/sandpaper.png"),
    linear-gradient(to right, #f2ede3 0.5rem, transparent 0.5rem),
    //가로
    linear-gradient(to left, #f2ede3 0.5rem, transparent 0.5rem),
    //가로
    repeating-linear-gradient(
        #f2ede3,
        #f2ede3 3.3rem,
        #d2c1aa 3.3rem,
        #d2c1aa 3.4rem,
        white 3.4rem
      );
  line-height: 3.4rem;
  letter-spacing: 0.5px;
  padding: 0.6rem 4.5rem;
`;

export const Footer = styled.div`
  border: none;
  background-color: #d2c4adf0;
  display: flex;
  min-height: 4.5rem;
  justify-content: space-between;
  align-items: center;
  background-image: url("https://www.transparenttextures.com/patterns/cardboard-flat.png");
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
`;

export const FooterClose = styled.button`
  font-family: var(--thick-font);
  margin: 1rem 1rem;
  border: none;
  background-color: #837970;
  border-radius: 0.5rem;
  font-weight: 800;
  font-family: var(--thick-font);
  font-size: 1.4rem;
  color: #d4c7b1;
  padding: 0.5rem 1.5rem;
  z-index: 201; //뮤직창이 200이다
  &:active {
    transform: scale(0.95);
  }
`;

export const FooterPrivate = styled.input`
  display: inline-block;
  vertical-align: middle;
  margin: 0.5rem;
  font-size: 1.2rem;
  color: red;
  &:active {
    transform: scale(0.8);
  }
`;

export const FooterPost = styled.button`
  color: #d4c7b1;
  border: none;
  margin: 1rem 1rem;
  padding: 0.6rem 1.5rem;
  border-radius: 0.5rem;
  background-color: #837970;
  font-weight: 800;
  font-family: var(--thick-font);
  font-size: 1.4rem;
  padding: 0.5rem 1.5rem;
  &:active {
    transform: scale(0.95);
  }
`;

export const FooterHide = styled.div`
  color: rgba(255, 0, 0, 0);
  border: none;
  margin: 1rem 1rem;
  padding: 0.6rem 1.5rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 0, 0, 0);
  font-weight: 800;
  font-family: var(--thick-font);
  font-size: 1.4rem;
  padding: 0.5rem 1.5rem;
  &:active {
    transform: scale(0.95);
  }
`;
