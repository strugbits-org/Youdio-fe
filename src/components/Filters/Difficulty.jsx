import styled from "styled-components";

import { P1 } from "src/components";
import { filterKeys } from "src/helpers/constant";
import { useSelector } from "react-redux";

const DifficultyBox = styled.div`
  padding: 22px;
  .difficulties {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5vw;
    color: var(--backgroundBrown);
    li {
      cursor: pointer;
      .active {
        color: var(--textHeadingBlack);
      }
    }
  }
`;

export default function Difficulty({ addTag, removeTag }) {
  const { filters } = useSelector((state) => state.filter);

  const difficulties = [
    {
      id: 0,
      name: "BEGINNER",
    },
    {
      id: 1,
      name: "MODERATE",
    },
    {
      id: 2,
      name: "INTERMEDIATE",
    },
    {
      id: 3,
      name: "ADVANCED",
    },
  ];

  const setSelected = (name) => {
    if (!filters.difficulty.includes(name)) {
      addTag({
        data: name,
        key: filterKeys.difficulty,
      });
    } else {
      removeTag({
        data: name,
        key: filterKeys.difficulty,
      });
    }
  };

  return (
    <DifficultyBox>
      <ul className="difficulties">
        {difficulties.length > 0 &&
          difficulties.map(({ id, name }) => {
            return (
              <li key={id} onClick={() => setSelected(name)}>
                <P1
                  className={filters.difficulty.includes(name) ? "active" : ""}
                >
                  {name}
                </P1>
              </li>
            );
          })}
      </ul>
    </DifficultyBox>
  );
}
