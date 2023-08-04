import { fonts } from "src/helpers";
import styled from "styled-components";

export const Container = styled.div`
  .buttonBox {
    text-align: right;
    margin-bottom: 16px;
    button {
      max-width: 220px;
      border-radius: 2px;
      font-size: 16px;
      font-family: ${fonts.poppinsRegular};
      background: var(--backgroundButonDark);
      &:hover {
        background: var(--backgroundButonDarkHover);
      }
    }
  }
`;

export const Description = styled.div`
  padding-block: 36px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;

  img {
    width: 20px;
    height: 20px;
  }
  .sub-heading {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }
  span {
    font-size: 14px;
  }
  .small-box {
    min-width: 180px;
    h3 {
      text-transform: capitalize;
      span {
        font-weight: 500;
      }
    }
  }
  .lorem_text {
    min-width: 100px;
    max-width: 650px;
    color: var(--textParaBlackLight);
  }
`;

export const Box = styled.div`
  padding-block: 50px;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  input[type="radio"] {
    margin-top: 4px;
  }
`;
