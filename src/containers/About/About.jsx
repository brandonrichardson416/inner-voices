import React from 'react'
import "./About.css"
import { images } from '../../constants'

export default function About() {
  return (
    <div className="iv__about">
      <div className="iv__about-heading_img">
        <div className="iv__about-heading_container">
        <p className="iv__about-subheading">New Balance 9060 x Joe Freshgoods</p>
        <h2 className="iv__about-heading">"Inside Voices"</h2>
        </div>
        <div className="iv__about-img_container">
            <img className="iv__about-img" src={images.about1}/>
            <img className="iv__about-img" src={images.aboutImg}/>
        </div>
      </div>
        <div className="iv__about-container">
          <div className="iv__about-angel_container">
          <img className="iv__about-angel" src={images.angel}/>
          </div>
        <div className="iv__about-text_container">
          <div className="iv__about-text_span">
            <p className='iv__about-text'><b><span className="iv__about-first">“</span>Inside Voices”</b> is the follow up to “Outside Clothes”. Greeted by the welcome mat and a sense of familiarity around you, once the door shuts a new one opens. You’re met with the harmonies of family chattering, the warm smell of Sunday dinner, the tv blaring and the youthful stumps of children’s feet down the hall. The soundtrack to living.</p>
          </div>
        </div>
        </div>
    </div>
  )
}
