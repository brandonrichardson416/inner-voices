import React, {useEffect, useRef} from 'react'
import './Information.css'
import axios from 'axios';
import { Reseller } from '../../components';
import { images } from '../../constants';
import { gsap, Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Information() {
    
  const grid1Ref = useRef(null);
  const grid2Ref = useRef(null);
  const grid3Ref = useRef(null);
  const grid4Ref = useRef(null);
  const gridRef = useRef(null)

  useEffect(()=>{
    gsap.fromTo(grid1Ref.current,
      {translateY: "10vh", opacity: 0},
      {
        translateY: 0,
        opacity: 1,
        ease: Expo.easeOut,
        duration: 1.5,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top center"
        }
      })
  }, [])

  useEffect(()=>{
    gsap.fromTo(grid2Ref.current,
      {translateY: "10vh", opacity: 0},
      {
        translateY: 0,
        opacity: 1,
        ease: Expo.easeOut,
        duration: 2.5,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top center"
        }
      })
  }, [])

  useEffect(()=>{
    gsap.fromTo(grid3Ref.current,
      {translateY: "10vh", opacity: 0},
      {
        translateY: 0,
        opacity: 1,
        ease: Expo.easeOut,
        duration: 3.5,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top center"
        }
      })
  }, [])

  useEffect(()=>{
    gsap.fromTo(grid4Ref.current,
      {translateY: "10vh", opacity: 0},
      {
        translateY: 0,
        opacity: 1,
        ease: Expo.easeOut,
        duration: 4.5,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top center"
        }
      })
  }, [])

    
  return (
    <div ref={gridRef} className="iv__information" id="sellers">
      <div className="iv__information-heading_text">
      <h1 className="iv__information-heading">
        Where To Buy
      </h1>
      <p className="iv__information-text">Our shoe is no longer available at retail price. You can only purchase from these trusted sneaker resellers.</p>
      </div>

      <div className="iv__information-grid_container">
          <div ref={grid1Ref} className="iv__information-grid_item"><Reseller img={images.sxLogo} link="https://stockx.com/new-balance-9060-joe-freshgoods-inside-voices-penny-cookie-pink"/></div>
          <div ref={grid2Ref} className="iv__information-grid_item"><Reseller img={images.fcLogo} link="https://www.flightclub.com/joe-fresh-goods-x-9060-inside-voices-m9060jfg"/></div>
          <div ref={grid3Ref} className="iv__information-grid_item"><Reseller img={images.gLogo} link="https://www.goat.com/sneakers/joe-fresh-goods-x-9060-inside-voices-m9060jfg"/></div>
          <div ref={grid4Ref} className="iv__information-grid_item"><Reseller img={images.sgLogo} link="https://www.stadiumgoods.com/en-us/shopping/9060-joe-fresh-goods-inside-voices-penny-cookie-pink-18519107"/></div>
      </div>
    </div>
  )
}
