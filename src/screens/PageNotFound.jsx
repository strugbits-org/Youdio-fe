import React from 'react'
import { H1, H3, Section } from 'src/components';
import styled from 'styled-components';

const CustomSection = styled(Section)`
    min-height: 70dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`
function PageNotFound() {
  return (
    <CustomSection backgroundColor="#fff">
      <div>
        <H1>404</H1>
        <H3>Page not found</H3>
      </div>
    </CustomSection>
  );
}

export default PageNotFound