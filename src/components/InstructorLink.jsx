import React from 'react'
import styled from 'styled-components'
import { H4} from "src/components/Typography"

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    img{
        border-radius: 100%;
    }
`
const InstructorLink = ({ imageSrc, title, link }) => {
  return (
    <Container>
      <img src={imageSrc} alt={title} width="30px" height="30px" />
      <H4>{title}</H4>
    </Container>
  );
};

export default InstructorLink