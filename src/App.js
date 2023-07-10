import React from 'react'
import './App.css'
import { Header, About, Description, Features, NinetySixty, Information, Footer} from './containers';
import { MarqueeComp } from './components';


export default function App() {
  return (
    <>
    <Header/>
    <MarqueeComp/>
    <About/>
    <Features/>
    <NinetySixty/>
    <Description/>
    <Information/>
    <Footer/>
    </>
  )
}
