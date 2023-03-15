import React from 'react'

import { H3, P3, H4 } from 'src/components'
import { Card, CardMedia, Tag, CardContent } from './cardsComponent'
import { icons } from "src/helpers"

function LiveClassCard() {
    return <Card>
        <CardMedia>
            <img src={icons.cardImage} alt={""} width="100%" height="auto" />
            <Tag>
                <H4>YOGA</H4>
            </Tag>
        </CardMedia>
        <CardContent>
            <div className='timeRow'>
                <H4>06:30-07:30</H4>
                <div>
                    <img src={icons.timeClock} alt="" width="15px" height="auto" />
                    <P3>5 min</P3>
                </div>
            </div>
            <H3>upper body power&Core body</H3>
            <div className='profileRow'>
                <div className='profileBox'>
                    <img src={icons.profileImage} alt="" width="30px" height={""} />
                    <H4>Elizebeth Lisa</H4>
                </div>
                <div className='intensityBox'>
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <line x1="13.5882" y1="0.764648" x2="13.5882" y2="13.1287" stroke="#D5D5D5" strokeWidth="1.52306" />
                        <line x1="9.45879" y1="2.8252" x2="9.45879" y2="13.1286" stroke="#D5D5D5" strokeWidth="1.52306" />
                        <line x1="5.33331" y1="4.88574" x2="5.33331" y2="13.1284" stroke="#D5D5D5" strokeWidth="1.52306" />
                        <line x1="1.20391" y1="7.97754" x2="1.20391" y2="13.1292" stroke="#413735" strokeWidth="1.52306" />
                    </svg>

                    <P3>Intensity 1</P3>
                </div>
            </div>
        </CardContent>
    </Card>

}

export default LiveClassCard
