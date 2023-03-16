import { useState } from "react";
import styled from "styled-components";
import { H6, P3 } from 'src/components'
import { layout } from 'src/helpers'

const { tablet, laptop } = layout

const StylesBox = styled.div`
    padding: 22px;
    .styles{
        display:flex;
        justify-content:center;
        gap:5vw;
        color:var(--backgroundBrown);
        h6{
            margin-bottom:24px;
            cursor:pointer;
        }
        li{
            cursor:pointer;
        }
        .active{
            color: var(--textHeadingBlack);
        }
    }

    @media only screen and (min-width: ${tablet}) {
        .styles{
            justify-content:left;
            flex-wrap:wrap;
        }
    }
    @media only screen and (min-width: ${laptop}) {
        .styles{
            justify-content:center;
            flex-wrap: initial;
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

    const [allStyles, setAllStyles] = useState([])
    const [styleList, setStyleList] = useState([])

    const setAll = (name) => {
        !allStyles.includes(name)
            ? setAllStyles([...allStyles, name])
            : setAllStyles(allStyles.filter(val => val !== name && val))
    }

    const setSpecific = (name) => {
        !styleList.includes(name)
            ? setStyleList([...styleList, name])
            : setStyleList(styleList.filter(val => val !== name && val))
    }

    return <StylesBox>
        <ul className="styles">
            {
                styles.length > 0 && styles.map(({ id, title, list }) => {
                    return <li key={id} >
                        <H6 className={allStyles.includes(title) ? "active" : ''} onClick={() => setAll(title)}>{title}</H6>
                        <ul>
                            {
                                list.length > 0 && list.map((val, ind) => {
                                    return <li key={`sub-design-${ind}`} className={allStyles.includes(title) ? "active" : styleList.includes(val) ? "active" : ""  } onClick={() => setSpecific(val)} >
                                        <P3>{val}</P3>
                                    </li>
                                })
                            }
                        </ul>
                    </li>
                })
            }
        </ul>
    </StylesBox>
}
