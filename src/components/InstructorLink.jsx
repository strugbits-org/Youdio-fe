import React from "react";
import styled from "styled-components";
import { H4 } from "src/components/Typography";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  cursor: ${({ isClickable }) => (isClickable ? "pointer" : "initial")};
  .titleBox {
    display: grid;
    h4 {
      font-size: ${({ fontSize }) => (fontSize ? fontSize : "initial")};
      color: ${({ fontColor }) => (fontColor ? fontColor : "initial")};
      text-wrap: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
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
      className="instructorLink"
    >
      <img
        src={imageSrc}
        alt={title}
        width={imgWidth ? imgWidth : "30px"}
        height={imgWidth ? imgWidth : "30px"}
      />
      <div className="titleBox">
        <H4 title={title}>{title}</H4>
      </div>
    </Container>
  );
};

export default InstructorLink;
