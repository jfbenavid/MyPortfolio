import React from 'react'
import PropTypes from 'prop-types'

import { A } from './styles'
import { useIntersectionToShow } from 'hooks'

export const Study = ({ data: { urlFile, institute, instituteLogo, title, endingDate } }) => {
  const [show, element] = useIntersectionToShow()

  return (
    <A href={urlFile} target='_blank' ref={element}>
      {show && (
        <div>
          <img
            src={instituteLogo}
            alt={institute}
          />
          <div>
            <h3>{title}</h3>
            <h4>{institute}</h4>
            <span>{endingDate}</span>
          </div>
        </div>
      )}
    </A>
  )
}

Study.propTypes = {
  data: PropTypes.object.isRequired
}
