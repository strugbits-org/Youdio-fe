import { useState } from "react";
import styled from "styled-components";

import { H4, P3 } from "src/components";
// import { fonts } from "src/helpers";
import { MobileFilterButton, MobileFilterHeader } from "./filtersComponents";
import { useSelector } from "react-redux";
import { filterKeys } from "src/helpers/constant";

const InstructorsBox = styled.div`
  padding-inline: 8px;
  & :is(.allInstructors) {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    margin-bottom: 2.5vw;
  }
  .instructorList {
    margin-top: 16px;
    ul {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: left;
      flex-wrap: wrap;
      list-style-type: none;
      gap: 10px;
    }
  }
`;

const Instructor = styled.li`
  padding: 2px 8px;
  background: ${({ selected }) => (selected ? "#000" : "transparent")};
  border: 1px solid transparent;
  border-color: ${({ selected }) => (selected ? "#fff" : "transparent")};
  h4 {
    color: var(--textHeadingWhite);
    white-space: nowrap;
  }
`;
export default function Instructors({ removeTag, addTag }) {
  const { instructors, filters } = useSelector((state) => state.filter);
  const [isVisible, setIsVisible] = useState(false);

  const [isAll] = useState(false);

  const setSelected = (name) => {
    if (!filters.instructors.includes(name)) {
      addTag({
        data: name,
        key: filterKeys.instructors,
      });
    } else {
      removeTag({
        data: name,
        key: filterKeys.instructors,
      });
    }
  };

  return (
    <InstructorsBox>
      <MobileFilterHeader>
        <MobileFilterButton onClick={() => setIsVisible(!isVisible)}>
          Instructor
        </MobileFilterButton>
        <P3>{filters.instructors.join(", ")}</P3>
      </MobileFilterHeader>
      {isVisible && (
        <div className="instructorList">
          <ul>
            {instructors &&
              instructors.map((val, ind) => {
                return (
                  <Instructor
                    selected={
                      isAll
                        ? isAll
                        : filters.instructors.includes(val.firstName)
                    }
                    key={val._id}
                    onClick={() => setSelected(val.firstName)}
                  >
                    <H4>{`${val.firstName} ${val.lastName}`}</H4>
                  </Instructor>
                );
              })}
          </ul>
        </div>
      )}
    </InstructorsBox>
  );
}
