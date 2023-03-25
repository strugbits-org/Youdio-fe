import React from 'react'
import { Label, P3 } from 'src/components'
import { Heading, Heading2 } from 'src/screens/user/Dashboard/style/Heading'
import { Wrapper } from 'src/screens/user/Dashboard/style/Wrapper'
import { Input2 } from 'src/screens/user/Dashboard/Screen/MembershipScreen/MembershipScreenComponent'
import { Main, Input3 } from './PaymentComponent'

const Payment = () => {
    return (
        <Wrapper>
            <Heading>Payment</Heading>
            <div style={{ display: "flex", flexDirection: "row",flexWrap:"revert" }}>
                <Main>
                    <Heading2>
                        Enter Payment Details
                    </Heading2>
                    <Input2 placeholder="AlexaMorgan@gmail.com" />
                    <Label>
                        Card Information
                    </Label>
                    <Input2 placeholder="1234 1233 1234 1234" />
                    <div>
                        <Input3 placeholder="hasan" />
                        <Input3 placeholder="hasan" />

                    </div>
                    <Label>
                        Name on Card
                    </Label>

                    <Input2 placeholder="1234 1233 1234 1234" />
                    <Label>
                        Country Or Region
                    </Label>

                    <Input2 placeholder="United State" />

                    <div style={{ display: 'flex', flexDirection: "row", gap: "1rem" }}>
                    <input type="radio" style={{color:'black'}} />
                        {/* <img src={Circle} alt="" style={{ width: "15px", height: "15px" }} /> */}
                        <P3 style={{ width: "400px" }}>
                            Lorem ipsum dolor sit amet consectetur. In tristique id eu. Porttitor egestas viverra ultricies tincidunt nulla in nisl eget. Magna dolor risus porttitor blandit rhoncus
                            iaculis. Ultricies r id risuslacus accumsan arcu ultrices varius.
                        </P3>
                    </div>

                </Main>
                <Main>
                    <Heading2>youdio</Heading2>
                    <P3>Lorem ipsum dlit. Atque, reiciendis veniam! Voluptatum explicabo tempore, ipsam architecto eos pariatur impedit expedita quas necessitatibus laboriosam nisi natus. Autem, enim. Doloribus, sint et?</P3>
                    <P3>Lorem reiciendis veniam! Voluptatum explicabo tempore, ipsam architecto eos pariatur impedit expedita quas necessitatibus laboriosam nisi natus. Autem, enim. Doloribus, sint et?</P3>

                </Main>
            </div>
        </Wrapper>
    )
}

export default Payment
