import React from 'react'
import './MarqueeComp.css'
import { images } from '../../constants'
import Marquee from 'react-fast-marquee'

export default function MarqueeComp() {
  return (
    <div className="iv__marquee">
      <Marquee>
        <div className="iv__marquee-1">
        <img className="iv__marquee-icon" src={images.chicon}/>
        <span className="iv__marquee-text">
            The sights, sounds, and feelings of growing up in the black household.
        </span>
        </div>
        <div className="iv__marquee-1">
        <img className="iv__marquee-icon" src={images.chicon}/>
        <span className="iv__marquee-text">
            The sights, sounds, and feelings of growing up in the black household.
        </span>
        </div>
      </Marquee>
    </div>
  )
}
