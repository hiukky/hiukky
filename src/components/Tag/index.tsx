import React from 'react'

import { TagProps } from './types'

import { Wrapper } from './styles'

const Tag: React.FC<TagProps> = ({ tag, reverse = false }) => (
  <Wrapper.Container {...{ tag, reverse }}>
    {Array.isArray(tag) ? (
      tag.map((t, i) => <Wrapper.Tag key={i}>{t}</Wrapper.Tag>)
    ) : (
      <Wrapper.Tag>{tag}</Wrapper.Tag>
    )}
  </Wrapper.Container>
)

export default Tag
