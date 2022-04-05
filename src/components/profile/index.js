import React from 'react'
import PropTypes from 'prop-types'

import { P } from './styles'
import { Title } from '../../util/styles'

export const Profile = ({ data: { word, data } }) => (
  <section id={word}>
    <Title>{word}</Title>
    <P>{data}</P>
  </section>
)

Profile.propTypes = {
  data: PropTypes.object
}
