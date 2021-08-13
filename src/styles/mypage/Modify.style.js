import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.form`
  @include flex-center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #00000080;
`;

export const ModalContainer = styled.div`
  min-width: 35rem;
  height: 50rem;
  background-color: #fff;
  padding: 4.2rem 4.4rem 4.8rem 4.4rem;
  border-radius: 1.2rem;
  color: grey;
  font-family: var(--primary-font);
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// export const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
// `;

export const ModifyText = styled.div`
  color: #000;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 3rem;
`;

export const ModifyForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25rem;
  margin-top: 3rem;
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  width: 100%;
  height: 40px;
  padding: 0 1.4rem;
  font-family: var(--primary-font);
  font-size: 1.8rem;
  caret-color: #59a1ff;
  border: none;
  border-bottom:  3px groove #99C5FF;
  background-color: #FFFBF0;

  :focus {
    color: none;
    outline: none;
  }
`;

export const ModifyBtn = styled.button`
  font-family: var(--primary-font);
  font-size: 1.8rem;
  font-weight: 500;
  width: 100%;
  min-height: 4rem;
  background-color: #5999FF;
  color: white;
  border: none;
  border-radius: .7rem;
  margin-top: 2rem;

  &:hover {
    background: #1C82FF;
  }
`;

export const GoBackBtn = styled.button`
  font-family: var(--primary-font);
  font-size: 1.8rem;
  font-weight: 500;
  width: 100%;
  min-height: 4rem;
  background-color: #5999FF;
  color: white;
  border: none;
  border-radius: .7rem;
  margin-top: 1rem;
  padding: 0 2rem;

  &:hover {
    background: #1C82FF;
  }
`;