import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
`;

export const FormContainer = styled.form`
  @include flex-center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #00000080;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: absolute;
  width: 38rem;
  height: 70rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 4.2rem 4.4rem 4.8rem 4.4rem;
  border-radius: 1.2rem;
  color: grey;
  font-family: var(--primary-font);
  font-size: 1.5rem;
  z-index: 100;
`;

export const Close = styled.button`
  border: none;
  position: absolute;
  left: 33.5rem;
  top: 1.5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SignupText = styled.div`
  color: #000;
  margin: 1.5rem;
  font-size: 3rem;
  font-weight: bold;
`;

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 25rem;

  & .displayNone {
    display: none;
  }
`;

export const Input = styled.input`
  display: block;
  align-items: center;
  margin: 1rem 0 0.5rem 0;
  width: 100%;
  height: 40px;
  padding: 0 1.4rem;
  font-family: var(--primary-font);
  font-size: 1.8rem;
  caret-color: #59a1ff;
  border: none;
  border-bottom: 2px solid #59a1ff;
  value: null;

  :focus {
    color: none;
    outline: none;
  }
`;

export const SignupBtn = styled.button`
  font-family: var(--primary-font);
  font-size: 1.8rem;
  font-weight: 500;
  width: 100%;
  min-height: 4.4rem;
  background-color: #9cc3ff;
  color: white;
  border: none;
  border-radius: 0.5rem;
  margin-top: 2rem;

  &:hover {
    background: #59a1ff;
  }
`;

export const LoginToSignupText = styled.div`
  margin-top: 2rem;
  font-size: 1.4rem;
  color: #000;
`;

export const SignupToLoginText = styled.div`
  margin-top: 2rem;
  font-size: 1.4rem;
  color: #000;
`;

export const SwitchSignup = styled.span`
  color: #1a53ff;
  cursor: pointer;
  margin-left: 0.5rem;
`;

export const SwitchLogin = styled.span`
  color: #1a53ff;
  cursor: pointer;
  margin-left: 0.5rem;
`;

export const Or = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  margin: 2.4rem 0;
  &::after {
    content: "OR";
    display: inline-block;
    position: relative;
    padding: 0 1.4rem;
    color: #bdbcbc;
    background-color: white;
    vertical-align: middle;
    font-size: 1.4rem;
    font-weight: 400;
  }
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    border-top: 1px solid #bdbcbc;
  }
`;

// kakao

export const Kakaobtn = styled.button`
  width: 100%;
  height: 4.4rem;
  margin: 0.7rem 0;
  padding: 0;
  font-size: 1.6rem;
  border: none;
  border-radius: 0.7rem;
  background-color: #fae100;
  cursor: pointer;
`;

export const ForBlanceKakao = styled.div`
  height: 4.4rem;
  margin-right: 12rem;
`;

export const KakaoLogo = styled.img`
  height: 4rem;
  width: 4rem;
  margin-right: 2rem;
`;

export const KakaoText = styled.span`
  margin-top: 1.3rem;
  position: absolute;
  font-size: 1.6rem;
  font-weight: 700;
`;

// google

export const GoogleBtn = styled.button`
  width: 100%;
  height: 4.4rem;
  margin: 0.7rem 0;
  padding: 0;
  font-size: 1.6rem;
  border-radius: 0.7rem;
  background-color: #fff;
  border-radius: 0.5rem;
  border: 1px solid #000;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const ForBalanceGoogle = styled.div`
  height: 4.4rem;
  margin-right: 12rem;
`;

export const GoogleLogo = styled.img`
  margin: 0.2rem 2rem 0 0;
  height: 3.8rem;
  width: 3.8rem;
`;

export const GoogleText = styled.span`
  margin-top: 1.3rem;
  position: absolute;
  font-size: 1.6rem;
  font-weight: 700;
  color: #000;
  font-weight: 700;
`;

// Naver
export const NaverBtn = styled.button`
  width: 100%;
  height: 4.4rem;
  margin: 0.7rem 0;
  padding: 0;
  font-size: 1.6rem;
  border: none;
  border-radius: 0.7rem;
  background-color: rgb(49, 195, 30);
  cursor: pointer;
`;

export const ForBalanceNaver = styled.div`
  height: 4.4rem;
  margin-right: 12rem;
`;

export const NaverLogo = styled.img`
  margin: 0.2rem 2rem 0 0;
  height: 3.8rem;
  width: 3.8rem;
`;

export const NaverText = styled.span`
  margin-top: 1.3rem;
  position: absolute;
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  font-weight: 700;
`;
