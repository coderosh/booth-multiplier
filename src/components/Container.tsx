import React from "react";
import styled from "styled-components";

interface ContainerProps {
  children?: React.ReactNode;
}

const StyledContainer = styled.div`
  width: 95%;
  max-width: 1100px;
  padding: 20px;
  margin: 40px auto;
  border-radius: 4px;
  font-family: "Poppins", sans-serif;
`;

const Container: React.FC<ContainerProps> = (props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default Container;
