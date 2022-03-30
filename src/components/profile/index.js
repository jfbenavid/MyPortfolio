import React from 'react'
import PropTypes from 'prop-types'

import { P } from './styles'

export const Profile = ({ data: { word, data } }) => (
  <section>
    <h2>{word}</h2>
    <P>{data}</P>
  </section>
)

Profile.propTypes = {
  data: PropTypes.object
}
