import styled from "styled-components";
import { layout } from "src/helpers";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;

    input {
      max-width: initial;
      padding-block: 8px;
    }
    button {
      width: initial;
      max-width: 240px;
      border-radius: 0px;
      padding-inline: 16px;
      padding-block: 8px;
      font-size: 14px;
      line-height: 16px;
      margin-inline: auto 0px;
    }
  }
  .actionBox {
    justify-content: flex-end;
  }

  @media only screen and (min-width: ${layout.mobileMedium}) {
    div {
      flex-wrap: nowrap;
    }
  }
  @media only screen and (min-width: ${layout.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const HoverBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  img {
    width: clamp(36px, 4vw, 50px);
    aspect-ratio: 1/1;
    cursor: pointer;
    object-fit: contain;
  }
`;
