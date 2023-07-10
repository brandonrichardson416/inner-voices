import React, {useEffect, useLayoutEffect, useRef} from 'react'
import './Features.css'
import { images } from '../../constants'
import gsap from 'gsap';
import { Detail } from '../../components';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)


export default function Features() {

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const componentRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger);
    
    useLayoutEffect(()=>{
      let ctx = gsap.context(() =>{
        let panels = gsap.utils.toArray(".scroll-section");
        gsap.to(panels,{
          xPercent: -100 * (panels.length -1),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: .6,
            snap: 1 / (panels.length - 1),
            end: () => "+=" + sectionRef.current.offsetHeight
          }
        })
      }, componentRef);
      return () => ctx.revert();
    })

  // useEffect(() => {
  //   const pin = gsap.fromTo(
  //     sectionRef.current,
  //     {
  //       translateX: 0,
  //     },
  //     {
  //       translateX: "-300vw",
  //       ease: "none",
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: triggerRef.current,
  //         start: "top top",
  //         end: "+=" + (triggerRef.current.scrollWidth - window.innerWidth),
  //         scrub: 0.6,
  //         pin: true,
  //       },
  //     }
  //   );
   
  //   return () => {
  //     pin.kill();
  //   };
  // }, []);
 


  return (

    <section ref={componentRef} className="iv__features">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
          <img className="iv__features-container-img" src={images.slide1}/>
          <Detail heading="Expressive & Innovative" text="An exaggerated scaled-up look with midsole featuring dual density ABZORB and SBS cushioning"/>
          </div>
          <div className="scroll-section">
          <img className="iv__features-container-img" src={images.slide2}/>
          <Detail heading="Luxe Materials" text="Premium suede and mesh upper featuring tongue logo detail inspired the original 991 lace jewel"/>
          </div>
          <div className="scroll-section">
          <img className="iv__features-container-img" src={images.slide3}/>
          <Detail heading="Futuristic, Diamond Outsole" text="Diamond outsole pattern inspired by classic 860 design"/>
          </div>
          <div className="scroll-section">
          <img className="iv__features-container-img" src={images.slide4}/>
          <Detail heading="Y2K-Era Inspired" text="Inspired by the visible tech aesthetic of the Y2K era"/>
          </div>
        </div>
      </div>
    </section>
  )
}
