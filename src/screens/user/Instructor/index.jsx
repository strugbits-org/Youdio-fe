import React, { useState } from "react";
import { instructorClassStaticContent } from "./constant";
import { ContentBox } from "./instructorClassComponent";
import { H1, H3, H4, P1, Section, InputIcon, Filters } from "src/components";

function Instructor() {
  const [Content, setContent] = useState(instructorClassStaticContent);

  return (
    <>
      <Section paddingBlock="7.5vw">
        <ContentBox>
          <H1>{Content.instructorSectionh1}</H1>
          <P1>{Content.instructorSectionp1}</P1>
        </ContentBox>
      </Section>
    </>
  );
}

export default Instructor;
