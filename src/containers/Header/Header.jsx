import React, {useState, useRef, useEffect} from 'react'
import jQuery from 'jquery';
import './Header.css'
import {images} from '../../constants';

export default function Header() {
  
  return (
    <div className="iv__header">
      <div className="iv__header-logo_bar">
            <div className="iv__header_logo">
                <img src={images.nbLogo} alt="nb-logo" />
            </div>
    </div>
        <div className="iv__header-content">
          <p className="iv__header-subheading">New Balance 9060 x Joe Freshgoods "Inside Voices"</p> {/*Add fade in/up transition*/}
          <h1 className="iv__header-heading">
             Made For Us
          </h1>
          <p className="iv__header-text">The latest collaboration from Joe Freshgoods and New Balance as part of their 'Inside Voices' pack.</p>
        </div>
        <a href="#sellers"><p className="iv__header-button">WHERE TO BUY</p></a>
        <img className="iv__header-img" src={images.hero2}/>
        <img className="iv__header-cloud-r" src={images.cloud}/>
        <img className="iv__header-cloud-l" src={images.cloud}/>
    </div>
  )
}
