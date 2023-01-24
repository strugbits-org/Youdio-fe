import styled from "styled-components"

export const PrimaryButton = styled.button`
    border:none;
    outline:none;
    width: 100%;
    height: 45px;
    border-radius:7px;
    color: #ffffff;
    background:var(--backgroundGreen);
    cursor:pointer;
    transition: var(--transition03s);
    font-size:20px;
     
    
    &:hover{
        transition: var(--transition03s); 
        background:var(--backgroundGreenHover);
    }
`

export const IconButton = styled.button`
    background-image: url();
    background-repeat: no-repeat;
    background-position:center;
    outline:none;
    border:none;
    background: var(--textHeadingWhite);

    &[disabled]{
        background:black;
    }
    
    &:hover{
        background:var(--backgroundGreen);
    }
`

