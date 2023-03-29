import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrInstructor, instructorClassStaticContent } from "./constant";
import { ContentBox, SearchBox, CardsBox } from "./instructorClassComponent";
import { H1, P1, Section, InputIcon } from "src/components";
import { icons } from "src/helpers";
import { InstructorCard } from "src/components/Cards/";

function Instructor() {
  const [Content] = useState(instructorClassStaticContent);

  return (
    <>
      {/* instructorBanner */}

      <Section paddingBlock="7.5vw">
        <ContentBox>
          <H1>{Content.instructorSectionh1}</H1>
          <P1>{Content.instructorSectionp1}</P1>
        </ContentBox>
      </Section>

      {/*  Search Section */}
      <Section backgroundColor="#fff" paddingBlock="6vw">
        <SearchBox>
          <InputIcon
            isIcon={icons.searchIcon}
            placeholder={Content.searchPlaceholder}
          />
        </SearchBox>
      </Section>

      {/* Cards Section */}
      <Section backgroundColor="#fff" paddingBlock="0px">
        <CardsBox>
          {ArrInstructor.map((instructor) => {
            const { id } = instructor;
            return (
              <NavLink to={`/singleinstructor/${id}`} key={id}>
                <InstructorCard {...instructor} />
              </NavLink>
            );
          })}
        </CardsBox>
      </Section>
    </>
  );
}

export default Instructor;
