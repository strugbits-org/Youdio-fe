import { useState } from "react";
import styled from "styled-components";

import { P2 } from 'src/components';
import { icons } from "src/helpers";

const IntensityBox = styled.div`
    padding: 22px;
    .intensities{
        display:flex;
        justify-content:center;
        align-items:center;
        gap:5vw;
        color:var(--backgroundBrown);
        li{
            display:flex;
            gap:10px;
            cursor:pointer;
            .active{
                color: var(--textHeadingBlack);
            }
        }
    }
`

export default function Intensity() {

    const [intensitiy, setIntensitiy] = useState([])

    const intensities = [
        {
            id: 0,
            name: "Level 1"
        },
        {
            id: 1,
            name: "Level 2"
        },
        {
            id: 2,
            name: "Level 3"
        },
        {
            id: 3,
            name: "Level 4"
        },
    ]

    const setSelected = (name) => {
        !intensitiy.includes(name)
            ? setIntensitiy([...intensitiy, name])
            : setIntensitiy(intensitiy.filter(val => val !== name && val))
    }

    return <IntensityBox>
        <ul className="intensities">
            {
                intensities.length > 0 && intensities.map(({ id, name }) => {
                    return <li key={id} onClick={() => setSelected(name)}>
                        <P2 className={intensitiy.includes(name)  ? 'active' : ''}>{name}</P2>
                        <img src={icons.roundQuestionMark} alt={"Question Mark"} tooltip={name} width="" height=""/>
                    </li>
                })
            }
        </ul>
    </IntensityBox>
}