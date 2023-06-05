import { useEffect, useState } from "react";
import styled from "styled-components";

import { H4, P3 } from "src/components";
import { fonts } from "src/helpers";
import { Instructor } from "./filtersComponents";
import { useSelector } from "react-redux";
import useFetch from "src/features/hooks/useFetch";
import { setInstructors } from "src/features/filterSlice";

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
`;
export default function Instructors({removeTag, addTag}) {
  const { instructors } = useSelector((state) => state.filter);
  const { fetchData } = useFetch();

  const [isAll, setAll] = useState(false);
  const [instructorsList, setInstructorsList] = useState([]);

  const setSelected = (name) => {
    if (!instructorsList.includes(name)) {
      addTag(name)
      setInstructorsList([...instructorsList, name]);
    } else {
      removeTag(name)
      setInstructorsList(instructorsList.filter((val) => val !== name && val));
    }
  };

  useEffect(() => {
    fetchData("instructor/get-instructor", setInstructors);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InstructorsBox>
      <div
        className="allInstructors"
        onClick={() => {
          setAll(!isAll);
          setInstructorsList([]);
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
      </div>
      <div className="instructorList">
        <ul>
          {instructors &&
            instructors.instructors.map((val, ind) => {
              return (
                <Instructor
                  selected={
                    isAll ? isAll : instructorsList.includes(val.firstName)
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
