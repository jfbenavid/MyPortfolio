import React from 'react'
import { P } from './styles'

export const Profile = ({ data }) => (
  <section>
    <h2>{data.get('profileDescription')}</h2>
    <P>{data.get('profile')}</P>
  </section>
)
