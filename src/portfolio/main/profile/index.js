import React from 'react'
import { P } from './styles'

export const Profile = props => (
  <section>
    <h2>{props.profileDescription}</h2>
    <P>{props.profile}</P>
  </section>
)
