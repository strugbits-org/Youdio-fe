import React from "react";
import { InstructorCard } from "../Cards";
import { H3, Loader, NoFoundBox } from "..";
import styled from "styled-components";
import { layout } from "src/helpers";

const { mobile, mobileMedium, tablet, laptop } = layout;

const Container = styled.div`
margin-top: 30px;
  min-height: 30vh;
`;

const Box = styled.div`
  display: grid;
  gap: 6vw 1.8vw;

  @media only screen and (min-width: ${mobile}) {
    grid-template-columns: 1fr;
    margin-bottom: 70px;
  }
  @media only screen and (min-width: ${mobileMedium}) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: ${tablet}) {
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 90px;
  }
  @media only screen and (min-width: ${laptop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-bottom: 60px;
  }
`;

function InstructorCards({ loading, instructors, search, handleDelete, handleEdit }) {
  return (
    <Container>
      {loading && <Loader width="35px" height="35px" />}

      {!loading && instructors && instructors?.length > 0 ? (
        <Box>
          {instructors.map((instructor) => {
            return (
              <InstructorCard
                key={`instructor-card-${instructor._id}`}
                instructor={instructor}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            );
          })}
        </Box>
      ) : (
        !loading && (
          <NoFoundBox>
            <H3>No Instructor Found with the title of {search}</H3>
          </NoFoundBox>
        )
      )}
    </Container>
  );
}

export default InstructorCards;
