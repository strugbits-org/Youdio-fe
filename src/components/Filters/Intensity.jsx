import styled from "styled-components";

import { P2 } from "src/components";
import { icons } from "src/helpers";
import { useSelector } from "react-redux";
import { filterKeys } from "src/helpers/constant";

const IntensityBox = styled.div`
  padding: 22px;
  .intensities {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5vw;
    color: var(--backgroundBrown);
    li {
      display: flex;
      gap: 10px;
      cursor: pointer;
      .active {
        color: var(--textHeadingBlack);
      }
    }
  }
`;

export default function Intensity({ removeTag, addTag, options }) {
  const { filters } = useSelector(state => state.filter)

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
      <ul className="intensities">
        {options.length > 0 &&
          options.map(({ id, name }) => {
            return (
              <li key={id} onClick={() => setSelected(name)}>
                <P2
                  className={filters.intensity.includes(name) ? "active" : ""}
                >
                  {name}
                </P2>
                <img
                  src={icons.roundQuestionMark}
                  alt={"Question Mark"}
                  tooltip={name}
                  width=""
                  height=""
                />
              </li>
            );
          })}
      </ul>
    </IntensityBox>
  );
}
