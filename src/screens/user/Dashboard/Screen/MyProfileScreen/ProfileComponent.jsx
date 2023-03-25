import { PrimaryButton } from "src/components"
import { HorizontalLine } from "src/components/Footer/footerComponents"
import { Box } from "src/screens/user/Dashboard/Screen/MembershipScreen/MembershipScreenComponent"

import styled from "styled-components"

export const Box2 = styled(Box)`
display:flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
`

export const Box3 = styled(Box)`
`


export const CancelButton = styled(PrimaryButton)`
color:black;
width:200px;
border:1px solid;
background-color: #ffff;
`

export const SaveButton = styled(PrimaryButton)`
color:black;
width:200px;
background-color: #FFE7DA;
`

export const HorizontalLine2 = styled(HorizontalLine)`
background-color:#E6E6E6;
`
