import React from "react";
import styled from "styled-components";
import { H4 } from "src/components/Typography";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  /* img{
        border-radius: 100%;
    } */
  cursor: ${({ isClickable }) => (isClickable ? "pointer" : "initial")};
  h4 {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "initial")};
    color: ${({ fontColor }) => (fontColor ? fontColor : "initial")};
  }
`;
const InstructorLink = ({
  imageSrc,
  title,
  handleNavigate,
  imgWidth,
  fontSize,
  fontColor,
}) => {
  return (
    <Container
      fontSize={fontSize}
      fontColor={fontColor}
      isClickable={handleNavigate && true}
      onClick={handleNavigate && handleNavigate}
    >
      <img
        src={imageSrc}
        alt={title}
        width={imgWidth ? imgWidth : "30px"}
        height={imgWidth ? imgWidth : "30px"}
      />
      <H4>{title}</H4>
    </Container>
  );
};

export default InstructorLink;
