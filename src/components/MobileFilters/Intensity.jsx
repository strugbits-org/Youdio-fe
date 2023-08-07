import { useState } from "react";
import styled from "styled-components";

import { P2, P3 } from "src/components";
import { MobileFilterButton, MobileFilterHeader } from "./filtersComponents";
import { useSelector } from "react-redux";
import { filterKeys } from "src/helpers/constant";

const IntensityBox = styled.div`
  padding-inline: 8px;
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
        width: 100%;
      }
    }
    .active {
      background: var(--textParaBlack);
      color: var(--textHeadingWhite);
    }
  }
`;

export default function Intensity({ addTag, removeTag, title }) {
  const [isVisible, setIsVisible] = useState(false);
  const { filters, intensities } = useSelector((state) => state.filter);

  const setSelected = (name) => {
    if (!filters.intensity.includes(name)) {
      addTag({
        data: name,
        key: filterKeys.intensity,
      });
    } else {
      removeTag({
        data: name,
        key: filterKeys.intensity,
      });
    }
  };

  return (
    <IntensityBox>
      <MobileFilterHeader>
        <MobileFilterButton onClick={() => setIsVisible(!isVisible)}>
          {title}
        </MobileFilterButton>
        <P3>{filters.intensity.join(", ")}</P3>
      </MobileFilterHeader>

      {isVisible && (
        <ul className="intensities">
          {intensities.length > 0 &&
            intensities.map(({ id, name }) => {
              return (
                <li
                  className={filters.intensity.includes(name) ? "active" : ""}
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
