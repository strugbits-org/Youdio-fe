import React, { useState } from "react";
import styled from "styled-components";

import { IconButton, WhiteIconButton } from "src/components";
import { fonts, icons, layout } from "src/helpers";

const { mobile, tablet } = layout;


const IconButtonM = styled(IconButton)`
  padding: 5px 5px 5px 0px;
`;

export const SelectionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.3vw;

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

export const FilterOptions = styled.div`
  width: 100%;
  min-height: 0px;
  /* padding-inline:20px; */
  /* place-content:center;  */
  padding-block: 30px;
  transition: var(--transition03s);
  position: relative;

  .videoCount {
    position: absolute;
    top: 0px;
    left: 0px;
    color: #d6ccc3;
  }

  .filters {
    display: grid;
    padding-block: 30px;
    padding-inline: 15px;
    background: var(--backgroundLightGrey);
  }

  .sortOption {
    position: absolute;
    top: 0px;
    right: 0px;
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

export const SelectionButton = ({ name }) => {
  const [selected, setSelected] = useState(false);

  return (
    <WhiteIconButton selected={selected} onClick={() => setSelected(!selected)}>
      <span>{name}</span>
      <img src={icons.arrowDown} alt="" width={"14"} height={""} />
    </WhiteIconButton>
  );
};

export const FilterBox = styled.div`
  height: 100dvh;
  background: rgba(0,0,0,0.8);
  padding-inline: 8px;
  padding-block: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
  .btnClose {
    margin-inline: auto 0px;
  }
`;

export const MobileFilterButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  color: var(--textHeadingWhite);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 20px;
  font-family: ${fonts.poppinsRegular};

`;

export const ResetButton = styled(MobileFilterButton)`
  outline: none;
  border: none;
  background: transparent;
  color: var(--textHeadingWhite);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 24px;
  font-family: ${fonts.poppinsRegular};
  margin-block: 20px;
`;
export const MobileFilterHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 24px;
  p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: right;
    color: white;
    font-family: ${fonts.poppinsRegular};
  }
`;
