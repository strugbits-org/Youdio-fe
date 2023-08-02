import React from "react";
import styled from "styled-components";

import { IconButton, WhiteIconButton } from "src/components";
import { icons, layout } from "src/helpers";

const { mobile, tablet } = layout;

export const Instructor = styled.li`
  p {
    font-weight: ${({ selected }) => (selected ? 500 : 400)};
    color: ${({ selected }) =>
      selected ? "initial" : "var(--backgroundBrown)"};
  }
  cursor: pointer;
`;

const IconButtonM = styled(IconButton)`
  padding: 5px 5px 5px 0px;
`;

export const SelectionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.3vw;
  margin-block-start: 16px;

  div {
    flex: 1;
  }
  @media only screen and (min-width: ${mobile}) {
    display: none;
  }
  @media only screen and (min-width: ${tablet}) {
    display: flex;
  }
`;

export const FilterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1vw;
  /* background: whitesmoke; */
  padding: ${({ open }) => (open !== null ? "15px" : "0px")};
  padding-inline: 0px;
  /* margin-bottom:40px; */
  /* height:auto;
    transition: 1s all ease-in-out; */

  .filters {
    background: var(--backgroundLightGrey);
  }
`;

export const FilterOptions = styled.div`
  width: 100%;
  min-height: 0px;
  /* padding-inline:20px; */
  /* place-content:center;  */
  /* padding-block: 30px; */
  transition: var(--transition03s);

  .filters {
    display: grid;
    padding-block: 30px;
    padding-inline: 15px;
    background: var(--backgroundLightGrey);
  }
`;

export const FilterButton = ({ name, clickEvent, selected }) => {
  // const [selected, setSelected] = useState(false)
  return (
    <IconButtonM
      onClick={() => {
        // setSelected(!selected)
        clickEvent();
      }}
    >
      <span>{name}</span>
      <img
        src={selected?.toUpperCase() === name ? icons.arrowUp : icons.arrowDown}
        alt=""
        width={"12px"}
      />
    </IconButtonM>
  );
};

const WhiteTagIconButton = styled(WhiteIconButton)`
  min-width: initial;
  padding: 0px 12px;
  img {
    width: 10px !important;
    filter: ${({ selected }) => (selected ? "initial" : "invert()")};
  }

  &:hover {
    img {
      filter: initial;
    }
  }
`;

export const SelectionButton = ({ tag, removeTag }) => {
  return (
    <WhiteTagIconButton onClick={() => removeTag(tag)}>
      <span>{tag.data}</span>
      <img src={icons.cross} alt="" width={""} height={""} />
    </WhiteTagIconButton>
  );
};

export const SortingOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-block: 8px;

  .videoCount {
    color: #d6ccc3;
  }

  .sortOption {
    color: #d6ccc3;
    display: flex;
    select {
      background: transparent;
      border: none;
      outline: none;
      color: #d6ccc3;
      padding-inline: 4px;
      cursor: pointer;
      font-size: 12px;
    }
    select option {
      background: var(--backgroundLightGrey);
      color: var(--textHeadingBlack);
    }
    select:hover {
      color: var(--textHeadingBlack);
    }
  }
`;
