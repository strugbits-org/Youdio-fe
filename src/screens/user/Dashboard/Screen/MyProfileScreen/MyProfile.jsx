import React from 'react'
import { Container } from 'src/screens/user/Dashboard/style/Container'
import { Heading, Heading2 } from 'src/screens/user/Dashboard/style/Heading'
import { Wrapper } from 'src/screens/user/Dashboard/style/Wrapper'
import { Box, Input2 } from 'src/screens/user/Dashboard/Screen/MembershipScreen/MembershipScreenComponent'
import Women from "src/assets/icons/Women.png"
import {  H5,H4, } from "src/components";
import { Box2, CancelButton, SaveButton ,Box3, HorizontalLine2} from './ProfileComponent'

const MyProfile = () => {
    return (
        <Wrapper>
            <Heading>Profile</Heading>
            <HorizontalLine2/>
            <Container >
                <Box style={{ alignItems: "center", gap: "2rem", display: "flex", flexWrap: "wrap" }}>
                    <img src={Women} alt="" style={{ maxWidth: "300px", minWidth: '150px', maxHeight: "300px", minHeight: '150px' }} />
                    <div>

                        <Heading2>
                            Profile
                        </Heading2>
                        <H5 style={{ color: "#999999" }}>
                            Your Nickname here
                        </H5>
                    </div>
                </Box>
            <HorizontalLine2/>
                
                <Box2>
                    <H4>
                   Full Name
                    </H4>
                    <Input2></Input2>
                </Box2>
            <HorizontalLine2/>
                
                <Box2>
                    <H4>
                    Nick Name
                    </H4>
                    <Input2></Input2>
                </Box2>
            <HorizontalLine2/>
             

                <Box2>
                    <H4>
                    Email
                    </H4>
                   <Input2/>
                </Box2>
                <HorizontalLine2/>
        
                <Box2>
                    <H4>
                    Password
                    </H4>
                   <Input2/>
                    
                </Box2>
                <HorizontalLine2/>

                <Box3>
                <CancelButton>CANCEL</CancelButton>
               <SaveButton>SAVE</SaveButton>
                </Box3>

            </Container>

        </Wrapper>
    )
}

export default MyProfile
