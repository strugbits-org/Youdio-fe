import loader from "src/assets/icons/loader.svg";
import { fonts } from "src/helpers";
import styled from "styled-components";

const LoaderBox = styled.div`
  text-align: center;
`;

const Loader = ({ width, height }) => {
  return (
    <LoaderBox>
      <img
        src={loader}
        alt="Loader"
        width={width ? width : "20px"}
        height={height ? height : "20px"}
      />
    </LoaderBox>
  );
};

export const NoFoundBox = styled.div`
  /* h3 { */
  text-align: center;
  color: var(--textParaGrey);
  h3 {
    font-weight: 300;
    font-family: ${fonts.poppinsRegular};
  }
  /* } */
`;

export default Loader;
