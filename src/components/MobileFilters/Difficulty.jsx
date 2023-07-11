import { useState } from "react";
import styled from "styled-components";
import { P1, P2 } from "src/components";
import { MobileFilterButton, MobileFilterHeader } from "./filtersComponents";

const DifficultyBox = styled.div`
  padding-inline: 16px;
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

export default function Difficulty() {
  const [difficult, setDifficult] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const difficulties = [
    {
      id: 0,
      name: "Beginner",
    },
    {
      id: 1,
      name: "Moderate",
    },
    {
      id: 2,
      name: "Intermediate",
    },
    {
      id: 3,
      name: "Advanced",
    },
  ];

  const setSelected = (name) => {
    !difficult.includes(name)
      ? setDifficult([...difficult, name])
      : setDifficult(difficult.filter((val) => val !== name && val));
  };

  return (
    <DifficultyBox>
      <MobileFilterHeader>
        <MobileFilterButton onClick={() => setIsVisible(!isVisible)}>
          Difficulties
        </MobileFilterButton>
        <P2>Selections</P2>
      </MobileFilterHeader>
      {isVisible && (
        <ul className="difficulties">
          {difficulties.length > 0 &&
            difficulties.map(({ id, name }) => {
              return (
                <li
                  className={difficult.includes(name) ? "active" : ""}
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
