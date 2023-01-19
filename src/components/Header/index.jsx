import React, { useEffect, useState } from 'react'

import { Content, Section, UL } from './headerComponents'
import youdio from '../../assets/logo/youdio.svg'
import worldMap from '../../assets/icons/language_world.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setLang } from '../../store/slices/language'
import { staticContent } from './constant'
import {contentTranslator} from "../../helpers/translator"

function Header() {
  const [content, setContent] = useState(staticContent)

  const dispatch = useDispatch()
  const language = useSelector(state => state.language.lang)

  useEffect(() => {
    contentTranslator({staticContent, contentToTranslate: content, setContent, language})
    console.log("Main chala when state change");

  }, [language]);


  // Language Listener
  const handleLanguage = e => {
    dispatch(setLang(e.target.value))
  }

  return (
    <Section>
      <Content>
        <div className='leftMenu'>
          <UL>
            <li >{content.liveClasses}</li>
            <li >{content.videos}</li>
            <li >{content.membership}</li>
            <li >{content.instructors}</li>
          </UL>
        </div>
        <div className='logo'>
          <img src={youdio} alt="youdio" width="" height="" />
        </div>
        <div className='rightMenu'>
          <UL>
            <li>
              <select onChange={handleLanguage} value={language}>
                <option id="EN">EN</option>
                <option id="JA">JA</option>
              </select>
              <img src={worldMap} alt='world_map' width='15' height='auto' />
            </li>
            <li>{content.signIn}</li>
            <li>{content.register}</li>
          </UL>
        </div>
      </Content>
    </Section>
  )
}

export default Header