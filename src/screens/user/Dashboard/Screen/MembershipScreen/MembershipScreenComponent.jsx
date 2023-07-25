import styled from "styled-components";
export const Description = styled.div`
  padding-block: 50px;
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
    width: 300px;
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
    h3{
      text-transform: capitalize;
    }
  }
  .lorem_text {
    min-width: 100px;
    max-width: 650px;
  }
`;

export const Box = styled.div`
  padding-block: 50px;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  input[type=radio]{
    margin-top: 4px;
  }
`;
