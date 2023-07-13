import React from 'react'
import styled from 'styled-components'
import { H4} from "src/components/Typography"

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  /* img{
        border-radius: 100%;
    } */
  h4 {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "initial")};
  }
`;
const InstructorLink = ({ imageSrc, title, link, imgWidth, fontSize }) => {
  return (
    <Container fontSize={fontSize}>
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

export default InstructorLink