import React from 'react'
import './Reseller.css'

export default function Reseller({img, link}) {
  return (
    <a href={link} target="_blank">
    <div className={"iv__reseller"}>
        <img src={img} />
    </div>
    </a>
  )
}
