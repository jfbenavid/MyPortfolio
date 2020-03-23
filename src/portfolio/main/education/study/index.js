import React from 'react'

export const Study = props => (
  <a href={props.urlFile} target='_blank'>
    <div>
      <img src={props.instituteLogo} alt={props.institute}></img>
      <h3>{props.title}</h3>
      <h4>{props.institute}</h4>
      <span>{props.endingDate}</span>
    </div>
  </a>
)
