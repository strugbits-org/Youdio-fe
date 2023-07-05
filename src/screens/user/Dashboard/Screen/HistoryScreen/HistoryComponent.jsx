import styled from "styled-components";
import { layout } from "src/helpers";
export const HistoryList = styled.div`
  padding-block: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
@media only screen and (min-width: ${layout.mobileLarge}) {
      align-items: initial;
  }
`;
