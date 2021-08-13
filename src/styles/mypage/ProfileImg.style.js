import styled from 'styled-components';

export const ImgUpload = styled.div`
  width: 20.5rem;
  height: 20.5rem;
  margin: 1rem;
  // margin-top: 1rem;
  border:  none;
  display: flex;
  margin-left: 1rem;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 15.5rem;
    height: 15.5rem;
}
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
  font-size: 1.2rem;
`;

export const ImgUploadBtn = styled.button`
  font-family: var(--thick-font);
  font-size: 1.4rem;
  font-weight: 500;
  width: 8rem;
  height: 2.5rem;
  background-color: #5999FF;
  color: #fff;
  padding: .5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: .7rem;
  margin-right: .5rem;

  &:hover {
    background: #1C82FF;
  }

  @media screen and (max-width: 768px) {
    width: 6rem;
    font-size: 1.2rem;
}
`;