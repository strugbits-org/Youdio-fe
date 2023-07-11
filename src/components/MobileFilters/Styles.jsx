import styled from "styled-components";
import { H6, P3 } from "src/components";
import { useSelector } from "react-redux";
import { filterKeys } from "src/helpers/constant";
import { MobileFilterButton, MobileFilterHeader } from "./filtersComponents";
import { useMemo, useState } from "react";

const StylesBox = styled.div`
  padding-inline: 8px;
  .styles {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: var(--textHeadingWhite);
    h6 {
      margin-bottom: 4px;
      cursor: pointer;
    }
    li {
      cursor: pointer;
      ul {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        li {
          padding: 2px 8px;
          border: 1px solid transparent;
          p {
            white-space: nowrap;
          }
        }
      }
    }
    .active {
      border-color: #fff;
      color: var(--textHeadingWhite);
      background: #000;
    }
  }
`;

export default function Styles({ addTag, removeTag }) {
  const { styles, filters } = useSelector((state) => state.filter);
  const [isVisible, setIsVisible] = useState(false);

  const allStyles = useMemo(() => { 
    return Object.keys(filters.styles).map((key) => { 
      return filters.styles[key].length > 0 ? filters.styles[key].join(", ") : ""
    }).join("")  
  }, [filters.styles])

  const setSpecific = (name, subKey) => {
    const customSubKey = camelCase(subKey);
    if (!filters.styles[customSubKey].includes(name)) {
      addTag({
        data: name,
        key: filterKeys.styles,
        subKey: customSubKey,
      });
    } else {
      removeTag({
        data: name,
        key: filterKeys.styles,
        subKey: customSubKey,
      });
    }
  };

  const camelCase = (text) => {
    if (text === "Set your intention") return "setYourIntention";
    return text.toLowerCase();
  };

  return (
    <StylesBox>
      <MobileFilterHeader>
        <MobileFilterButton onClick={() => setIsVisible(!isVisible)}>
          Styles
        </MobileFilterButton>
        <P3>{allStyles}</P3>
      </MobileFilterHeader>
      {isVisible && (
        <ul className="styles">
          {styles?.length > 0 &&
            styles.map(({ _id, category, name }) => {
              return (
                <li key={_id}>
                  <H6 className={""} style={{ cursor: "default" }}>
                    {category}
                  </H6>
                  <ul>
                    {name.length > 0 &&
                      name.map((val, ind) => {
                        return (
                          <li
                            key={`sub-design-${ind}`}
                            className={
                              filters.styles[camelCase(category)].includes(val)
                                ? "active"
                                : ""
                            }
                            onClick={() => setSpecific(val, category)}
                          >
                            <P3>{val}</P3>
                          </li>
                        );
                      })}
                  </ul>
                </li>
              );
            })}
        </ul>
      )}
    </StylesBox>
  );
}
