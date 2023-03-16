import { useState } from "react";
import styled from "styled-components";

import { H4, P3 } from 'src/components'
import { fonts } from 'src/helpers'
import { Instructor } from "./filtersComponents";

const instructors = [
    {   
        id:0,
        name: "Elizabeth"
    },
    {
        id: 1,
        name: "Jordan"
    },
    {
        id: 2,
        name: "Leo Hudson"
    },
    {
        id: 3,
        name: "Richael"
    },
    {
        id: 4,
        name: "Dylan Jasper"
    },
    {
        id: 5,
        name: "Jeniffer"
    },
    {
        id: 6,
        name: "Sophie Smith"
    },
    {
        id: 7,
        name: "Hazel"
    },
    {
        id: 8,
        name: "Marie"
    },
    {
        id: 9,
        name: "Jacob"
    }
]

const InstructorsBox = styled.div`
    & :is(.allInstructors){
        display:flex;
        align-items:center;
        gap:5px;
        cursor:pointer;
        margin-bottom:2.5vw; 
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
export default function Instructors() {
    const [isAll, setAll] = useState(false)
    const [instructorsList, setInstructorsList] = useState([])
    
    const setSelected = (name) => {
        !instructorsList.includes(name)
            ? setInstructorsList([...instructorsList, name])
            : setInstructorsList(instructorsList.filter(val => val !== name && val))
    }

    return <InstructorsBox>
        <div className='allInstructors' onClick={() => { 
            setAll(!isAll);
            setInstructorsList([])
        }}>
            {isAll && <svg width="15" height="11" viewBox="0 0 17 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6.2L5 11L16 1" stroke="black" strokeWidth="1.5" />
            </svg>}
            <P3 fontFamily={fonts.poppinsMedium}>All Instructors</P3>
        </div>
        <div className="instructorList">
            <ul>
                {
                    instructors && instructors.map((val, ind) => { 
                        return <Instructor selected={isAll ? isAll : instructorsList.includes(val.name)} key={`instructor-${ind}`} onClick={() => setSelected(val.name)}>
                            <H4>{val.name}</H4>
                        </Instructor>
                    })
                }
            </ul>
        </div>
        
    </InstructorsBox>
}