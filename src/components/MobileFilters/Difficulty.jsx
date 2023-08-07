import { useState } from "react";
import styled from "styled-components";
import { P1, P3 } from "src/components";
import { MobileFilterButton, MobileFilterHeader } from "./filtersComponents";
import { useSelector } from "react-redux";
import { filterKeys } from "src/helpers/constant";

const DifficultyBox = styled.div`
  padding-inline: 8px;
  .difficulties {
    margin-top: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: var(--textHeadingBlack);
    font-weight: 500;
    gap: 8px;
    li {
      padding-top: 22.1vw;
      background: var(--textHeadingWhite);
      width: 100%;
      text-align: center;
      border: 1px solid var(--textHeadingWhite);
      position: relative;
      p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .active {
      background: var(--textParaBlack);
      color: var(--textHeadingWhite);
    }
  }
`;

export default function Difficulty({ addTag, removeTag, title }) {
  const [isVisible, setIsVisible] = useState(false);
  const { filters, difficulties } = useSelector((state) => state.filter);

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
      <MobileFilterHeader>
        <MobileFilterButton onClick={() => setIsVisible(!isVisible)}>
          {title}
        </MobileFilterButton>
        <P3>{filters.difficulty.join(", ")}</P3>
      </MobileFilterHeader>
      {isVisible && (
        <ul className="difficulties">
          {difficulties.length > 0 &&
            difficulties.map(({ id, name }) => {
              return (
                <li
                  className={filters.difficulty.includes(name) ? "active" : ""}
                  key={id}
                  onClick={() => setSelected(name)}
                >
                  <P1>{name}</P1>
                </li>
              );
            })}
        </ul>
      )}
    </DifficultyBox>
  );
}
