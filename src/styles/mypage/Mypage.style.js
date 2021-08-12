import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: var(--thick-font);
`;

export const FormContainer = styled.form`
  font-size: 2rem;
  width: 80%;
  height: 100%;
  margin: 8rem 0 1rem 0;
  border-radius: 1rem;
  color: #000;
  font-weight: bold;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentTitle = styled.div`
  width: 25vmax;
  margin-top: 1rem;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const UserInfoForm = styled.div`
  width: 50%;
  height: 100vh;
  border: 2px solid var(--primary-color);
  border-radius: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: #fff;
  color: #000;
  @media screen and (max-width: 768px) {
    width: 37vmax;
    height: 75%;
    box-shadow: 2px 5px 5px #d3ccdb;
    flex-direction: column;
    position: absolute;
    left: 10.5vmax;
    top: 11.045rem;
  }
  box-shadow: 1px 5px 5px #d3ccdb;
`;

export const Frame = styled.div`
  width: 95%;
  height: 95%;
  border: 0.5rem groove #99c5ff;
  border-radius: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserContentForm = styled.div`
  width: 100%;
  height: 100vh;
  border: 2px solid var(--primary-color);
  border-radius: 0.7rem;
  display: block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding-top: 1.5em;
  margin-left: 2rem;
  box-shadow: 10px 5px 5px #d3ccdb;

  @media screen and (max-width: 1024px) {
    width: 35vmax;
    top: 2rem;
  }
  @media screen and (max-width: 930px) {
    width: 35vmax;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 75%;
    margin-top: 1.8rem;
    margin-left: 1.8rem;
  }
`;

export const Info = styled.div`
  font-size: 2.5rem;
  margin: 1rem;
  margin-top: 2rem;
  max-width: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 3px groove #99c5ff;
  color: #000;

  @media screen and (max-width: 1024px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const Input = styled.input`
  font-family: var(--thick-font);
  font-size: 1.8rem;
  border: none;
  border-bottom: 3px groove #99c5ff;
  width: 22rem;
  margin-top: 2rem;
  padding-left: 1rem;
  display: flex;
  background-color: #fffbf0;

  &:focus {
    color: none;
    outline: none;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 768px) {
    width: 18rem;
    font-size: 1.4rem;
  }
`;

export const Button = styled.button`
  font-family: var(--thick-font);
  font-size: 1.4rem;
  font-weight: 500;
  width: 12rem;
  height: 2.5rem;
  background-color: #5999ff;
  color: #fff;
  padding: 0.5rem;
  margin: 1rem 0;
  border: none;
  border-radius: 0.7rem;

  &:hover {
    background: #1c82ff;
  }

  @media screen and (max-width: 1024px) {
    width: 8rem;
    font-size: 1rem;
  }
  @media screen and (max-width: 768px) {
    width: 8rem;
    font-size: 0.8rem;
  }
`;
