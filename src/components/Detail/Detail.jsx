import React from 'react';
import './Detail.css';

export default function Detail({heading, text}) {
  return (
    <div className="iv__detail">
        <h2 className="iv__detail-heading">
            {heading}
        </h2>
            <p className="iv__detail-text">{text}</p>
    </div>
  )
}
