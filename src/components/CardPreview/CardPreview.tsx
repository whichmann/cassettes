import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 800px;
  height: 400px;
  border: 1px solid green;
`;

const FrontSide = styled.div`
  width: 400px;
  height: 100%;
  border: 1px solid red;
`;

const CardPreview = () => {
  return (
    <Container>
      <FrontSide>J Card Preview</FrontSide>
    </Container>
  );
};

export default CardPreview;
