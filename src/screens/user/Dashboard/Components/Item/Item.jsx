import React from 'react'
import {motion} from 'framer-motion'
import styled from "styled-components"
import { NavLink } from 'react-router-dom'
function Item({icon, name,path}) {

    const subheading ={
        true:{
            opacity: 1
        },
        false:{
            opacity: 0,
            display: 'none'
        }
    }
  return (
    <Wrapper>
<NavLink to={path}>

    <motion.div className='item'
    whileHover = {{
        backgroundColor: "rgba(198, 224, 206, 0.3)",
        boxShadow: "0 8px 32px 0 #41d6c2",
        backdropFilter: "blur(5.5px)",
        WebkitBackdropFilter: "blur(5.5px)",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        cursor: 'pointer'
    }}
    transition={{
        type:'none', duration: 0.1
    }}
    >
        <motion.div className='icon'>
            {icon}
        </motion.div>
        <motion.span
        variants={subheading}
        >
            {name}
        </motion.span>
    </motion.div>
</NavLink>

</Wrapper>
  )
}

export default Item
export const Wrapper = styled.section`
.item{
    display: flex;
    padding: 6px 10px 6px 10px;
    align-items: center;
    justify-content: flex-start;
    border-radius: 10px;
}
.icon{
    margin-right: 0.5rem;
    margin-top: 6px
}
`