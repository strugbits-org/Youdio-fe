import { useState } from "react";
import styled from "styled-components";
import { H6, P3 } from '../Typography'

const StylesBox = styled.div`
    padding: 22px;
    .styles{
        display:flex;
        justify-content:center;
        /* align-items:center; */
        gap:5vw;
        color:var(--backgroundBrown);
        h6{
            margin-bottom:24px;
        }
        li{
            cursor:pointer;
            .active{
                color: var(--textHeadingBlack);
            }
        }
    }
`

export default function Styles() {
    const styles = [
        {
            id: 0,
            title: "FITNESS",
            list:[ "SCULPT", "BARRE", "CORE", "HILT", "PILATES", "STRETCHING", "STRENGHT", "WALKING"]
        },
        {
            id: 1,
            title: "MINDFULLNESS",
            list:[ "BREATHWORK", "MEDIATION", "CORE", "HILT", "PILATES", "STRETCHING", "STRENGHT", "WALKING"]
        },
        {
            id: 2,
            title: "SKILLS",
            list:[ "ARM BALANCES", "BACKBENDS  ", "CORE", "HILT", "PILATES", "STRETCHING", "STRENGHT", "WALKING"]
        },
        {
            id: 3,
            title: "YOGA  ",
            list:[ "ASHTANGA", "HATHA", "CORE", "HILT", "PILATES", "STRETCHING", "STRENGHT", "WALKING"]
        },
        {
            id: 4,
            title: "SET YOUR INTENTION",
            list:[ "MAKE TIME FOR SELF-CARE", "CALM YOUR MIND", "CORE", "HILT", "PILATES", "STRETCHING", "STRENGHT", "WALKING"]
        },
         
    ]


    return <StylesBox>
        <ul className="styles">
            {
                styles.length > 0 && styles.map(({ id, title, list }) => {
                    return <div key={id}>
                        <H6>{title}</H6>
                        <ul>
                            {
                                list.length > 0 && list.map((val, ind) => {
                                    return <li key={ind}>
                                        <P3>{val}</P3>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                })
            }
        </ul>
    </StylesBox>
}