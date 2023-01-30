import { useState } from "react";
import styled from "styled-components";
import { H4, P3 } from '../Typography'
import { fonts } from '../../helpers/constant'

export default function Instructors() {

    const [isAll, setAll] = useState(false)
    const [filters, setFilters] = useState([])

    const InstructorsBox = styled.div`
        & :is(.allInstructors){
            display:flex;
            align-items:center;
            gap:5px;
            cursor:pointer; 
        }  
        .instructorList{
            ul{
                width:100%;
                display:flex;
                align-items:center;
                justify-content:left;
                flex-wrap:wrap;
                list-style-type:none;
                gap:10px 6vw;
            }
    }
    `
    return <InstructorsBox>
        <div className='allInstructors' onClick={() => setAll(!isAll)}>
            {isAll && <svg width="17" height="13" viewBox="0 0 17 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6.2L5 11L16 1" stroke="black" stroke-width="1.5" />
            </svg>}
            <P3 fontSize="16px" fontFamily={fonts.poppinsMedium}>All Instructors</P3>
        </div>
        <div className="instructorList">
            <ul>
                <li>
                    <H4 fontSize="16px">ELIZEBTH LISA</H4>
                </li>
                <li>ELIZEBTH LISA</li>
                <li>ELIZEBTH LISA</li>
                <li>ELIZEBTH LISA</li>
                <li>ELIZEBTH LISA</li>
                
            </ul>
        </div>
        
    </InstructorsBox>
}