import React from 'react'
import { StudyDiv, A, Image, Description } from './styles'
import { useIntersectionToShow } from 'hooks'

export const Study = ({ data }) => {
  const [show, element] = useIntersectionToShow()

  return (
    <A href={data.get('urlFile')} target='_blank' ref={element}>
      {show && (
        <StudyDiv>
          <div>
            <Image
              src={data.get('instituteLogo')}
              alt={data.get('institute')}
            />
          </div>
          <Description>
            <h3>{data.get('title')}</h3>
            <h4>{data.get('institute')}</h4>
            <span>{data.get('endingDate')}</span>
          </Description>
        </StudyDiv>
      )}
    </A>
  )
}
