import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 24px;

  .leftSide {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;

    button {
      width: initial;
      max-width: 240px;
      border-radius: 0px;
      padding-inline: 16px;
      padding-block: 8px;
      font-size: 14px;
      line-height: 16px;
      margin-inline: auto 0px;
      background: var(--backgroundButonDark);
      &:hover {
        background: var(--backgroundButonDarkHover);
      }
    }
  }
`;
