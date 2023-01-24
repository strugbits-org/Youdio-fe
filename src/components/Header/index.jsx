import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Nav, Section, UL } from './headerComponents'
import youdio from '../../assets/logo/youdio.svg'
import worldMap from '../../assets/icons/language_world.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setLang } from '../../store/slices/language'
import { staticContent } from './constant'
import { path } from '../../helpers/constant'
import { contentTranslator } from "../../helpers/translator"

function Header() {
  const [content, setContent] = useState(staticContent)

  const dispatch = useDispatch()
  const language = useSelector(state => state.language.lang)

  useEffect(() => {
    contentTranslator({ staticContent, setContent, language })
    console.log("Main chala when state change");

  }, [language]);


  // Language Listener
  const handleLanguage = e => {
    dispatch(setLang(e.target.value))
  }

  return (
    <Section>
      <Nav>
          <UL>
            <li ><NavLink to={path.liveClasses}>{content.liveClasses}</NavLink></li>
            <li ><NavLink to={path.videos}>{content.videos}</NavLink></li>
            <li ><NavLink to={path.membership}>{content.membership}</NavLink></li>
            <li ><NavLink to={path.instructors}>{content.instructors}</NavLink></li>

          </UL>
        <div className='logo'>
          <NavLink to={path.home}>
            <img src={youdio} alt="youdio" width="" height="" />
          </NavLink>
        </div>
          <UL>
            <li>
              <select onChange={handleLanguage} value={language}>
                <option id="EN">EN</option>
                <option id="JA">JA</option>
              </select>
              <img src={worldMap} alt='world_map' width='15' height='auto' />
            </li>
            <li><NavLink to={path.signIn}>{content.signIn}</NavLink></li>
            <li><NavLink to={path.register}>{content.register}</NavLink></li>
          </UL>
      </Nav>
    </Section>
  )
}

export default Header