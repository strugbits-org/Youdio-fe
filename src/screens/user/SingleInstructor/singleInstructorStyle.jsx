import styled from "styled-components";
// import { H2, P1 } from "src/components";
import { layout } from "src/helpers";
const { mobile, mobileMedium, tablet, laptop, desktop } = layout;

export const ImgCard = styled.div`
  /* height: 40vh; */
  /* width: 100%; */
  background-size: cover;
  background-repeat: no-repeat;

  .section {
    padding-block: ${({ paddingBlock }) =>
      paddingBlock ? paddingBlock : "20px"};

    @media only screen and (min-width: ${mobile}) {
      padding-inline: 3vw;
    }
    @media only screen and (min-width: ${tablet}) {
      padding-inline: 6vw;
      padding-block: 200px;
    }
    @media only screen and (min-width: ${laptop}) {
      padding-inline: 122px;
      padding-block: 250px;
    }
    @media only screen and (min-width: ${desktop}) {
      padding-block: 300px;
    }
  }
`;

export const SingleImage = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 25%;
    transform: translateY(10%);
  }
  transform: translateY(0);
  @media only screen and (max-width: ${mobile}) {
    img {
      width: 25%;
    }
  }
  @media only screen and (min-width: ${mobileMedium}) {
    img {
      transform: translateY(60%);
    }
  }
  @media only screen and (min-width: ${tablet}) {
    img {
      width: 20%;
      transform: translateY(10%);
    }
  }
  @media only screen and (min-width: ${laptop}) {
    img {
      width: 20%;
      transform: translateY(180%);
    }
  }
  @media only screen and (min-width: ${desktop}) {
    img {
      width: 20%;
      transform: translateY(50%);
    }
  }
`;

export const InstructorText = styled.div`
  background-color: #fff;
  /* min-width: 1127px; */
  .h2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .p1 {
    max-width: 1100px;
    margin-inline: 20%;
  }
  .p2 {
    max-width: 1100px;
    margin-inline: 20%;
  }
`;
