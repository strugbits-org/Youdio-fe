import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Nav, Section, UL, SideMenu, MobileUL } from './headerComponents'
import youdio from '../../assets/logo/youdio.svg'
import worldMap from '../../assets/icons/language_world.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setLang } from '../../store/slices/language'
import { staticContent } from './constant'
import { path } from '../../helpers/constant'
import { contentTranslator } from "../../helpers/translator"
import icons from '../../assets/icons'
import { IconButton } from '../Button'

function Header() {
  const [content, setContent] = useState(staticContent)
  const [menu, setMenu] = useState(false)

  const dispatch = useDispatch()
  const language = useSelector(state => state.language.lang)

  useEffect(() => {
    contentTranslator({ staticContent, setContent, language })
    console.log("Main chala when state change");
    
  }, [language]);

  // Language Listener
  const handleLanguage = e => {
    dispatch(setLang(e.target.value))
    setMenu(false)
  }

  const reset = () => { 
    setMenu(false)
  }

  return (
    <Section >
      <Nav>
        <UL align="left">
          <li><NavLink to={path.liveClasses}>{content.liveClasses}</NavLink></li>
          <li><NavLink to={path.videos}>{content.videos}</NavLink></li>
          <li><NavLink to={path.membership}>{content.membership}</NavLink></li>
          <li><NavLink to={path.instructors}>{content.instructors}</NavLink></li>
        </UL>
 
        <div className='logo' onClick={menu ? reset : undefined}>
          <NavLink to={path.home}>
            <img src={youdio} alt="youdio" width="" height="" />
          </NavLink>
        </div>

        <IconButton className='hamburger' onClick={() => setMenu(!menu)}>
          <img src={icons.menu} alt="" width={""} height={""} />
        </IconButton>

        <UL align="right">
          <li className='langChange'>
            <select onChange={handleLanguage} value={language}>
              <option id="EN">EN</option>
              <option id="JA">JA</option>
            </select>
            <img src={worldMap} alt='world_map' width='15' height='auto' />
          </li>
          <li><NavLink to={path.signIn}>{content.signIn}</NavLink></li>
          <li ><NavLink to={path.register}>{content.register}</NavLink></li>
        </UL>
      </Nav>

      <SideMenu className={menu ? "mobileMenu open" : "mobileMenu"}>
        <MobileUL>
          <li className='langChange'>
            <select onChange={handleLanguage} value={language}>
              <option id="EN">EN</option>
              <option id="JA">JA</option>
            </select>
            <img src={worldMap} alt='world_map' width='15' height='auto' />
          </li>
          <li onClick={reset}><NavLink to={path.signIn}>{content.signIn}</NavLink></li>
          <li onClick={reset}><NavLink to={path.register}>{content.register}</NavLink></li>
        </MobileUL>

        <ul className='links'>
          <li onClick={reset}><NavLink to={path.liveClasses}>{content.liveClasses}</NavLink></li>
          <li onClick={reset}><NavLink to={path.videos}>{content.videos}</NavLink></li>
          <li onClick={reset}><NavLink to={path.membership}>{content.membership}</NavLink></li>
          <li onClick={reset}><NavLink to={path.instructors}>{content.instructors}</NavLink></li>
        </ul>
        
      </SideMenu>
    </Section>
  )
}

export default Header