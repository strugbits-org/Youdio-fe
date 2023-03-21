import React, { useState } from "react";
import { instructorClassStaticContent } from "./constant";
import { ContentBox, DayBox, CardsBox } from "./instructorClassComponent";
import { H1, P1, Section, InputIcon } from "src/components";
import { icons } from "src/helpers";
import { InstructorCard } from "src/components/Cards/";

function Instructor() {
  const [Content, setContent] = useState(instructorClassStaticContent);

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
        <DayBox>
          <div className="blank"></div>

          <div className="searchBox">
            <InputIcon
              isIcon={icons.searchIcon}
              placeholder={Content.searchPlaceholder}
            />
          </div>
        </DayBox>
      </Section>

      {/* Cards Section */}
      <Section backgroundColor="#fff" paddingBlock="0vw">
        <CardsBox>
          {[...Array(24).keys()].map((val) => (
            <InstructorCard key={`card-${val}`} />
          ))}
        </CardsBox>
      </Section>
    </>
  );
}

export default Instructor;
