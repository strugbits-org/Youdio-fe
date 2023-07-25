import styled from "styled-components";
import { layout } from "src/helpers";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-bottom: 6vw;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    display: grid;
    grid-template-columns: 1fr;
    gap: 4px;
    label {
      font-size: 14px;
    }
    select {
      margin-bottom: 8px;
      min-width: 200px;
    }
    select,
    select option {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: ${layout.mobileMedium}) {
    div {
      flex-wrap: nowrap;
    }
  }
  @media only screen and (min-width: ${layout.mobileLarge}) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
    .actionBox {
      max-width: max-content;
      margin-inline: auto 0px;
    }
  }
  @media only screen and (min-width: ${layout.tablet}) {
    margin-bottom: 50px;
  }
`;
