import styled from "styled-components";
import { H6, P3 } from "src/components";
import { layout } from "src/helpers";
import { useSelector } from "react-redux";
import { filterKeys } from "src/helpers/constant";

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

export default function Styles({ addTag, removeTag }) {
  const { styles, filters } = useSelector((state) => state.filter);

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
      <ul className="styles">
        {styles?.length > 0 &&
          styles.map(({ _id, category, name }) => {
            return (
              <li key={_id}>
                <H6
                  className={
                    "active"
                    // filters.styles[camelCase(category)].includes(category)
                    //   ? "active"
                    //   : ""
                  }
                  // onClick={() => setSpecific(category, category)}
                  style={{cursor: 'default'}}
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
    </StylesBox>
  );
}
