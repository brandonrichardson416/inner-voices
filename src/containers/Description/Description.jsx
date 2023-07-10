import React, {useRef, useEffect} from 'react'
import './Description.css'
import {images} from '../../constants';
import { Info } from '../../components';
import { gsap, Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export default function Description() {

  const nbRef = useRef(null);
  const descRef = useRef(null);
  const cloud1Ref = useRef(null);
  const cloud2Ref = useRef(null);

  useEffect(()=>{
    gsap.fromTo(nbRef.current,
      {translateX: "-20vw"},
      {
        translateX: 0,
        ease: Expo.easeOut,
        duration: 2.5,
        scrollTrigger: {
          trigger: nbRef.current,
          start: "top center"
        }
      })
  }, [])

  useEffect(()=>{
    gsap.fromTo(cloud1Ref.current,
      {translateX: "-20vw"},
      {
        translateX: 0,
        ease: Expo.easeOut,
        duration: 4.5,
        scrollTrigger: {
          trigger: nbRef.current,
          start: "top center"
        }
      })
  }, [])

  useEffect(()=>{
    gsap.fromTo(cloud2Ref.current,
      {translateX: "20vw"},
      {
        translateX: 0,
        ease: Expo.easeOut,
        duration: 4.5,
        scrollTrigger: {
          trigger: nbRef.current,
          start: "top center"
        }
      })
  }, [])
  
  return (
    <div ref={descRef} className="iv__description">
        <div className="iv__description-img_container">
        <img ref={nbRef} className="iv__description-img" src={images.nbSide}/>
        <img ref={cloud1Ref} className="iv__description-cloud-l" src={images.cloud}/>
        </div>
        <div className="iv__description-content">
            <img ref={cloud2Ref} className="iv__description-cloud-r" src={images.cloud}/>
            <div className="iv__description-info">
                <h2 className="iv__description-info_sub">Joe Freshgoods x New Balance 9060</h2>
                <h1 className="iv__description-info_heading">"Inside Voices"</h1>
                <Info title="Release Date" value="May 18, 2022"/>
                <Info title="Style Code" value="U9060JF1"/>
                <Info title="Original Sales Price" value="$180"/>
            </div>
        </div>
    </div>
  )
}
