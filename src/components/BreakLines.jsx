import styled from "styled-components";

export const HorizontalLine = styled.div`
  min-height: 1px;
  background: #e6e6e6;
  margin-block: ${({marginBlock}) => marginBlock ? marginBlock : "initial"};
`;