import React from 'react'
import { NavLink } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

import { H4, P2, P3 } from 'src/components'
import { FooterContent, UpperBox, BottomBox, HorizontalLine } from './footerComponents'
import { icons, path } from "src/helpers"
import { Section, Input, IconButton } from 'src/components'

function Header() {
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
                            <li><NavLink to={path.home}>Home</NavLink></li>
                            <li><NavLink to={path.liveClasses}>Live Classes</NavLink></li>
                            <li><NavLink to={path.videos}>Videos</NavLink></li>
                            <li><NavLink to={path.instructor}>Instructor</NavLink></li>
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
