import { useState } from "react"
import { useEffect } from "react"
import styled from "styled-components"

const MenuBox = styled.div`
  position:absolute;
  width:${({width}) => width ? width : "0px" };
  height:100vh;
  background:hotpink;
  z-index:999;
  /* margin-left: -20%; */
  transition:.3s all ease-in;
`



export default function HamburgerMenu() {
    const [width, setWidth] = useState()
    useEffect(() => { 
        setWidth(window.innerWidth)

    }, [width])
    return <MenuBox width={width+"px"} />
}