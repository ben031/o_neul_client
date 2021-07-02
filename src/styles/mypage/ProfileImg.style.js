import styled from 'styled-components';

export const ImgUpload = styled.div`
  width: 20.5rem;
  min-width: 25rem;
  height: 20.5rem;
  margin: 1rem;
  margin-top: 1.5rem;
  border: 1px solid #000;
  display: flex;
  margin-left: 2.2rem;
  flex-direction: column;
`;

export const ImgEdit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgView = styled.img`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  font-size: 1.8rem;
`;

export const ImgUploadBtn = styled.button`
  font-family: var(--thick-font);
  font-size: 1.2rem;
  font-weight: 500;
  width: 8rem;
  height: 2.5rem;
  background-color: #DB7DC5;
  color: #fff;
  padding: .5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: .7rem;

  &:hover {
    background: #DB18B1;
  }
`;