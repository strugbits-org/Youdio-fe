import React from "react";
import { Section } from "src/components";
import styled from "styled-components";
import pageNotFound from "src/assets/sample/pageNotFound.svg";

const CustomSection = styled(Section)`
  min-height: 80dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  img{
    width: clamp(260px, 100%, 728px);
  }
`;

function PageNotFound() {
  return (
    <CustomSection backgroundColor="#fff">
      <img src={pageNotFound} alt="" width="760px" />
    </CustomSection>
  );
}

export default PageNotFound;
