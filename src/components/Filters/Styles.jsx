import { useEffect, useState } from "react";
import styled from "styled-components";
import { H6, P3 } from "src/components";
import { layout } from "src/helpers";
import { useSelector } from "react-redux";
import useFetch from "src/features/hooks/useFetch";
import { setStyles } from "src/features/filterSlice";

const { tablet, laptop } = layout;

const StylesBox = styled.div`
  padding: 22px;
  .styles {
    display: flex;
    justify-content: center;
    gap: 5vw;
    color: var(--backgroundBrown);
    h6 {
      margin-bottom: 24px;
      cursor: pointer;
    }
    li {
      cursor: pointer;
    }
    .active {
      color: var(--textHeadingBlack);
    }
  }

  @media only screen and (min-width: ${tablet}) {
    .styles {
      justify-content: left;
      flex-wrap: wrap;
    }
  }
  @media only screen and (min-width: ${laptop}) {
    .styles {
      justify-content: center;
      flex-wrap: initial;
    }
  }
`;

export default function Styles({ setAllFilters, allFilters }) {
  const { styles } = useSelector((state) => state.filter);
  const { fetchData } = useFetch()

  const [allStyles, setAllStyles] = useState([]);
  const [styleList, setStyleList] = useState([]);

  const setAll = (name) => {
    // setAllFilters([...allFilters, name]);

    !allStyles.includes(name)
      ? setAllStyles([...allStyles, name])
      : setAllStyles(allStyles.filter((val) => val !== name && val));
  };

  const setSpecific = (name) => {
    // setAllFilters([...allFilters, name]);
    !styleList.includes(name)
      ? setStyleList([...styleList, name])
      : setStyleList(styleList.filter((val) => val !== name && val));
  };

  useEffect(() => {
    fetchData("category/get-sub-category", setStyles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <StylesBox>
      <ul className="styles">
        {styles?.categories?.length > 0 &&
          styles.categories.map(({ _id, category, name }) => {
            return (
              <li key={_id}>
                <H6
                  className={allStyles.includes(category) ? "active" : ""}
                  onClick={() => setAll(category)}
                >
                  {category}
                </H6>
                <ul>
                  {name.length > 0 &&
                    name.map((val, ind) => {
                      return (
                        <li
                          key={`sub-design-${ind}`}
                          className={
                            allStyles.includes(category)
                              ? "active"
                              : styleList.includes(val)
                              ? "active"
                              : ""
                          }
                          onClick={() => setSpecific(val)}
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
    </StylesBox>
  );
}
