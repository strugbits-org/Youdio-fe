import { useState } from "react";
import styled from "styled-components";

import { H4 } from "src/components";
// import { fonts } from "src/helpers";
import { Instructor } from "./filtersComponents";
import { useSelector } from "react-redux";
import { filterKeys } from "src/helpers/constant";

const InstructorsBox = styled.div`
  & :is(.allInstructors) {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    margin-bottom: 2.5vw;
  }
  .instructorList {
    ul {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: left;
      flex-wrap: wrap;
      list-style-type: none;
      gap: 10px 6vw;
    }
  }

  h4 {
    text-transform: uppercase;
  }
`;
export default function Instructors({ removeTag, addTag }) {
  const { instructors, filters } = useSelector((state) => state.filter);

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
      {/* <div
        className="allInstructors"
        onClick={() => {
          setAll(!isAll);
          isAll && setSelected('All')
        }}
      >
        {isAll && (
          <svg
            width="15"
            height="11"
            viewBox="0 0 17 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 6.2L5 11L16 1" stroke="black" strokeWidth="1.5" />
          </svg>
        )}
        <P3 fontFamily={fonts.poppinsMedium}>All Instructors</P3>
      </div> */}
      <div className="instructorList">
        <ul>
          {instructors && 
            instructors.map((val, ind) => {
              return (
                <Instructor
                  selected={
                    isAll ? isAll : filters.instructors.includes(val.firstName)
                  }
                  key={val._id}
                  onClick={() => setSelected(val.firstName)}
                >
                  <H4>{val.firstName}</H4>
                </Instructor>
              );
            })}
        </ul>
      </div>
    </InstructorsBox>
  );
}
