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

export default function Difficulty({ addTag, removeTag, options }) {
  const { filters } = useSelector((state) => state.filter);
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
        {options?.length > 0 &&
          options.map(({ id, name }) => {
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
