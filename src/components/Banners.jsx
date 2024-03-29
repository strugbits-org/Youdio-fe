import styled from "styled-components";

import { layout } from "src/helpers";

const { mobile, tablet, laptop, desktop } = layout;
export const Section = styled.section`
  background: ${({
    backgroundImage,
    backgroundColor,
    backgroundColorImage,
  }) => {
    return backgroundImage
      ? `url(${backgroundImage})`
      : backgroundColor
      ? backgroundColor
      : backgroundColorImage
      ? backgroundColorImage
      : `radial-gradient(circle, rgba(240,162,204,1) 0%, rgba(255,231,218,1) 70%)`;
  }};
    
  padding-block: ${({ paddingBlock }) =>
    paddingBlock ? paddingBlock : "20px"};

  @media only screen and (min-width: ${mobile}) {
    padding-inline: 3vw;
  }
  @media only screen and (min-width: ${tablet}) {
    padding-inline: 6vw;
  }
  @media only screen and (min-width: ${laptop}) {
    padding-inline: 42px;
  }
  @media only screen and (min-width: ${desktop}) {
    padding-inline: 122px;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "initial")};
  gap: ${({ gap }) => (gap ? gap : "initial")};
  align-items: ${({ alignment }) => (alignment ? alignment : "center")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "initial")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "initial")};
  margin-bottom: 65px;
  margin-inline: auto;
`;

export const CardsSection = styled(Section)`
  min-height: 40vh;
`;
