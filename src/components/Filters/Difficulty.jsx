import { useState } from "react";
import styled from "styled-components";
import { P1 } from '../Typography'

const DifficultyBox = styled.div`
    padding: 22px;
    .difficulties{
        display:flex;
        justify-content:center;
        align-items:center;
        gap:5vw;
        color:var(--backgroundBrown);
        li{
            cursor:pointer;
            .active{
                color: var(--textHeadingBlack);
            }
        }
    }
`

export default function Difficulty() {

    const [difficult, setDifficult] = useState("")

    const difficulties = [
        {
            id: 0,
            name: "Beginner"
        },
        {
            id: 1,
            name: "Moderate"
        },
        {
            id: 2,
            name: "Intermediate"
        },
        {
            id: 3,
            name: "Advanced"
        },
    ]


    return <DifficultyBox>
        <ul className="difficulties">
            {
                difficulties.length > 0 && difficulties.map(({ id, name }) => {
                    return <li key={id} onClick={() => setDifficult(name)}>
                        <P1 className={name === difficult ? 'active' : ''}>{name}</P1>
                    </li>
                })
            }
        </ul>
    </DifficultyBox>
}