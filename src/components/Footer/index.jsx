import React from 'react'
import { NavLink } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

import { H4, P2, P3 } from 'src/components'
import { FooterContent, UpperBox, BottomBox, HorizontalLine } from './footerComponents'
import { icons } from "src/helpers"
import { Section, Input, IconButton } from 'src/components'

// import youdio from '../../assets/logo/youdio.svg'
// import worldMap from '../../assets/icons/language_world.svg'
// import { useDispatch, useSelector } from 'react-redux'
// import { setLang } from '../../store/slices/language'
// import { staticContent } from './constant'
// import { path } from '../../helpers/constant'
// import { contentTranslator } from "../../helpers/translator"

function Header() {
    //   const [content, setContent] = useState(staticContent)

    //   const dispatch = useDispatch()
    //   const language = useSelector(state => state.language.lang)

    //   useEffect(() => {
    //     contentTranslator({ staticContent, setContent, language })
    //     console.log("Main chala when state change");

    //   }, [language]);


    //   // Language Listener
    //   const handleLanguage = e => {
    //     dispatch(setLang(e.target.value))
    //   }

    return (
        <Section backgroundColor="var(--textHeadingBlack)">
            <FooterContent>
                <UpperBox>
                    <div className='logoBox'>
                        <img src={icons.footerLogo} alt="" width={""} height={""} />
                        <P2>Imagining professional yoga lessons without the hassle of travelling has now become easier.</P2>
                    </div>
                    <div className='quickLinks'>
                        <H4>QUICK LINKS</H4>
                        <ul>
                            <li><NavLink to={"/"}>Home</NavLink></li>
                            <li><NavLink to={"/"}>Live Classes</NavLink></li>
                            <li><NavLink to={"/"}>Videos</NavLink></li>
                            <li><NavLink to={"/"}>Membership</NavLink></li>
                            <li><NavLink to={"/"}>Instructor</NavLink></li>
                        </ul>
                    </div>
                    <div className='quickLinks'>
                        <H4>QUICK LINKS</H4>
                        <ul>
                            <li><NavLink to={"/"}>Blog</NavLink></li>
                            <li><NavLink to={"/"}>Contact Us</NavLink></li>
                        </ul>
                    </div>
                    <div className='subscribeBox'>
                        <H4>Subscribe to our newsletter</H4>
                        <Input type="email" name='email' id='email' placeholder="Email Address" />
                        <IconButton>
                            <span>Subsuscribe</span>
                            <img src={icons.rightArrowShort} alt="" />
                        </IconButton>
                    </div>
                </UpperBox>
                <BottomBox>
                    <HorizontalLine />
                    <div className='copyright'>
                        <P3 className='regular'>Copyright © 2023</P3>
                        <P3 className='medium'>Youdio, All Right Reserved</P3>
                    </div>
                </BottomBox>
            </FooterContent>
        </Section>
    )
}

export default Header
