import React from 'react'
import { StudyDiv, A, Image, Description } from './styles'

export const Study = props => (
  <A href={props.urlFile} target='_blank'>
    <StudyDiv>
      <div>
        <Image src={props.instituteLogo} alt={props.institute} />
      </div>
      <Description>
        <h3>{props.title}</h3>
        <h4>{props.institute}</h4>
        <span>{props.endingDate}</span>
      </Description>
    </StudyDiv>
  </A>
)
