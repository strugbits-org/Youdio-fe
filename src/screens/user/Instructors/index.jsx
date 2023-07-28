import React, { useEffect, useMemo, useState } from "react";
import { instructorClassStaticContent } from "./constant";
import { ContentBox, SearchBox } from "./instructorClassComponent";
import { H1, P1, Section, InputIcon } from "src/components";
import { icons } from "src/helpers";
import useFetch from "src/features/hooks/useFetch";
import { InstructorCards } from "src/components/CardsSection";
import { useDebounce } from "src/features/hooks/useDebounce";

function Instructors() {
  const [Content] = useState(instructorClassStaticContent);
  const { loading, postData, res } = useFetch();
  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search);

  useEffect(() => {
    postData("instructor/get-instructor", { search });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceSearch]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const instructors = useMemo(() => {
    if (res && res.instructors.length > 0) {
      return res.instructors;
    }
    return [];
  }, [res]);

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
      <Section backgroundColor="#fff" paddingBlock="0px 30px">
        <InstructorCards
          instructors={instructors}
          loading={loading}
          search={search}
        />
      </Section>
    </>
  );
}

export default Instructors;
