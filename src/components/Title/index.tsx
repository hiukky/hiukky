import React from 'react'

import { TitleProps } from './types'

import { Wrapper, H1, P } from './styles'

import Tag from '../Tag'

const Title: React.FC<TitleProps> = ({ label, tag = 'h1' }) => (
  <Wrapper>
    <Tag tag={tag} />
    {tag === 'h1' ? <H1>{label}</H1> : <P>{label}</P>}
    <Tag tag={tag} />
  </Wrapper>
)

export default Title
