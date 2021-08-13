import React from "react";
import {
  LoadingWrapper,
  LoaderBook,
  Page,
  Text,
} from "../../styles/loading/Loading.style";

const LoadingPage = () => {
  return (
    <>
      <LoadingWrapper>
        <LoaderBook>
          <Page></Page>
          <Page></Page>
          <Page></Page>
        </LoaderBook>
        <Text>오늘하러 출발</Text>
      </LoadingWrapper>
    </>
  );
};

export default LoadingPage;
