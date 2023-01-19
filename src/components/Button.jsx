import styled from "styled-components"

const PrimaryButton = styled.button`
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



export {
    PrimaryButton
}
