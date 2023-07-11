import { useState } from "react";
import styled from "styled-components";

import { P2 } from "src/components";
import { icons } from "src/helpers";
import { MobileFilterButton } from "./filtersComponents";

const IntensityBox = styled.div`
  padding-inline: 16px;
  .intensities {
    margin-top: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    color: var(--textHeadingBlack);
    font-weight: 500;
    gap: 8px;
    li {
      padding-top: 21.4vw;
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

export default function Intensity() {
  const [intensitiy, setIntensitiy] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const intensities = [
    {
      id: 0,
      name: "Level 1",
    },
    {
      id: 1,
      name: "Level 2",
    },
    {
      id: 2,
      name: "Level 3",
    },
    {
      id: 3,
      name: "Level 4",
    },
  ];

  const setSelected = (name) => {
    !intensitiy.includes(name)
      ? setIntensitiy([...intensitiy, name])
      : setIntensitiy(intensitiy.filter((val) => val !== name && val));
  };

  return (
    <IntensityBox>
      <MobileFilterButton onClick={() => setIsVisible(!isVisible)}>
        Intensity
      </MobileFilterButton>

      {isVisible && (
        <ul className="intensities">
          {intensities.length > 0 &&
            intensities.map(({ id, name }) => {
              return (
                <li
                  className={intensitiy.includes(name) ? "active" : ""}
                  key={id}
                  onClick={() => setSelected(name)}
                >
                  <P2>{name}</P2>
                </li>
              );
            })}
        </ul>
      )}
    </IntensityBox>
  );
}
