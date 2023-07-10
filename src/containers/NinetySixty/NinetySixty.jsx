import React from 'react';
import './NinetySixty.css'
import { images } from '../../constants';

export default function Joe() {
  return (
    <div className="iv__9060">
      <div className="iv__9060-heading_container">
        <h2 className="iv__9060-heading">The 9060</h2>
       </div>
       <div className="iv__9060-text_container">
       <div className="iv__9060-text_span">
            <p className='iv__9060-text'>The <b>9060</b> is a new expression of the refined style and innovation-led design that have made the 99X series home to some of the most iconic models in New Balance history.</p>
       </div>
    </div>
    <img className="iv__9060-stamp" src={images.nbStamp}/>
    </div>
  )
}
