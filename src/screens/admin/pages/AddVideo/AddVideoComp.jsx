import styled from "styled-components";


export const MainContainer = styled.div`
display: flex;

`
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  
`;
export const CenterContainer = styled.div`
  flex-basis: 70%;
  padding: 20px;
`
export const FormRow = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
/* justify-content: space-between; */
`;
export const BrowseFile = styled.div`
  flex-basis: 20%;
  /* background-color: #f1f1f1; */
  padding: 20px;
   /* max-width: 250px; */
   /* min-width: 200px; */

`;
export const ImageBrowse = styled.div`
  border: 1px dotted #797979;
padding: 70px;
  img {
    width: 100px;
  }
  
`;

export const BOX4 = styled.div`
max-width: 250px;
min-width: 200px;

.upload-container {
    position: relative;
  }
.uploadInp {
    border: none;
    outline: none;
    color: #fff;
    text-transform: uppercase;
    font-size: .8rem;
    font-weight: 600;
    max-width: 250px;
    min-width: 200px;
    height: 50px;
 
    &::file-selector-button {
      color: var(--textHeadingWhite);
    background:var(--backgroundGreen);
      padding: 140px;
      /* font-size: 0px; */
      border: none;
      border-radius: 0px;
      outline: none;
    }
    &::after {
      content: "UPLOAD VIDEO";
      position: absolute;
      top: 1vw;
      left: 4.2vw;
      /* width: 100%;
      background: hotpink; */
      cursor: pointer;
    }
    /* .userImage */
  }
/* align-items: center;
gap: 2rem;
display: flex;
flex-wrap: wrap; */
/* .upload-container {
  position: relative;
}
.uploadInp {
  border: none;
  outline: none;
  color: #fff;
  text-transform: uppercase;
  font-size: .8rem;
  font-weight: 600;
  width: 250px;
  height: 50px;
 
  &::file-selector-button {
    color: var(--textHeadingWhite);
  background:var(--backgroundGreen);
    padding: 140px;
   
    border: none;
    border-radius: 0px;
    outline: none;
  }
  &::after {
    content: "upload";
    position: absolute;
    top: 1vw;
    left: 5vw;
     width: 50px;
    height: 50px; 
    cursor: pointer;
  }
 
} */
`