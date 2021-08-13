import React from "react";
import styled from "styled-components";
import Loading from "./Loading";

const LoadingModal = ({ loadingModalOpen, children }) => {
  return (
    <>
      <Background loadingModalOpen={loadingModalOpen}>
        <Loading children={children} />
      </Background>
    </>
  );
};

const Background = styled.div`
  display: ${(props) => (props.loadingModalOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

export default LoadingModal;
