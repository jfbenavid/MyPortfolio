import React from 'react'
import { P } from './styles'

export const Profile = ({ data }) => (
  <section>
    <h2>{data.get('word')}</h2>
    <P>{data.get('data')}</P>
  </section>
)
