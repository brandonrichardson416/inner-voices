import React from 'react'
import './Info.css'

export default function Info({title, value}) {
  return (
    <div className="iv__info">
        <h2 className="iv__info-title">{title}</h2>
        <h2 className="iv__info-value">{value}</h2>
    </div>
  )
}
