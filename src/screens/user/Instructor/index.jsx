import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrInstructor, instructorClassStaticContent } from "./constant";
import { ContentBox, SearchBox, CardsBox } from "./instructorClassComponent";
import { H1, P1, Section, InputIcon, H3 } from "src/components";
import { icons } from "src/helpers";
import { InstructorCard } from "src/components/Cards/";
import useFetch from "src/features/hooks/useFetch";
import Loader, { NoFoundBox } from "src/components/Loader";
import { CardsSection } from "src/components/Banners";

function Instructor() {
  const [Content] = useState(instructorClassStaticContent);
  const { loading, postData, res } = useFetch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    postData("instructor/get-instructor", { search });
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

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
            value={search}
            onChange={handleSearch}
          />
        </SearchBox>
      </Section>

      {/* Cards Section */}
      <CardsSection backgroundColor="#fff" paddingBlock="0px">
        {loading && <Loader width="35px" height="35px" />}

        {!loading && res?.instructors && res.instructors?.length > 0 ? (
          <CardsBox>
            {res.instructors.map((instructor) => {
              return <InstructorCard instructor={instructor} />;
            })}
          </CardsBox>
        ) : (
          !loading && (
            <NoFoundBox>
                <H3>No Instructor Found with the title of { search}</H3>
            </NoFoundBox>
          )
        )}
      </CardsSection>
    </>
  );
}

export default Instructor;
