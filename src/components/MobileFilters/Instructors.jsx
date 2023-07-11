import { useState } from "react";
import styled from "styled-components";

import { H4 } from "src/components";
// import { fonts } from "src/helpers";
import { Instructor, MobileFilterButton } from "./filtersComponents";
import { useSelector } from "react-redux";
import { filterKeys } from "src/helpers/constant";

const InstructorsBox = styled.div`
  padding-inline: 16px;
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
      gap: 10px 6vw;

      li {
        h4 {
          color: var(--textHeadingWhite);
          font-weight: ${({ selected }) => (selected ? 800 : 200)};
        }
      }
    }
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
      <MobileFilterButton onClick={() => setIsVisible(!isVisible)}>
        Instructor
      </MobileFilterButton>
      {isVisible && (
        <div className="instructorList">
          <ul>
            {instructors &&
              instructors.map((val, ind) => {
                return (
                  <li
                    selected={
                      isAll
                        ? isAll
                        : filters.instructors.includes(val.firstName)
                    }
                    key={val._id}
                    onClick={() => setSelected(val.firstName)}
                  >
                    <H4>{`${val.firstName} ${val.lastName}`}</H4>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </InstructorsBox>
  );
}
