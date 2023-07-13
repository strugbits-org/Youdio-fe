import React from "react";
import styled from "styled-components";
import { H3, P1 } from "src/components/Typography";
import { layout } from "src/helpers";

const { tablet } = layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 16px;
  img {
    width: clamp(94px, 9vw, 134px);
    height: clamp(94px, 9vw, 134px);
    border-radius: 100%;
    object-fit: cover;
  }

  .detail {
    max-width: 1087px;
    p {
      color: var(--backgroundGrey);
    }
  }
  @media only screen and (min-width: ${tablet}) {
    flex-direction: row;
    align-items: center;
  }
`;
const InstructorDetail = ({ imageSrc, title, description, link }) => {
  return (
    <Container>
      <img src={imageSrc} alt={title} width="" height="" />
      <div className="detail">
        <H3>{title}</H3>
        <P1>{description}</P1>
      </div>
    </Container>
  );
};

export default InstructorDetail;
