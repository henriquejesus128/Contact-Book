import React from "react";
import { LoadingContainer, LoadingIcon, LoadingText } from "./style";

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingText>Carregando</LoadingText>
      <LoadingIcon />
    </LoadingContainer>
  );
};

export default Loading;
