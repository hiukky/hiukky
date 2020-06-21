import React from 'react'

import { Body, Brand } from './styles'

import { Wrapper, Item, Tag } from 'components'

import Layout from 'layout'

const About: React.FC = () => (
  <Layout title="About me">
    <Wrapper>
      <Item>
        <Brand src="/assets/hiukky.png" />
      </Item>
      <Item>
        <Body.Container>
          <Body.Title>
            <Tag tag="h1" />
            About Me
            <Tag tag="h1" />
          </Body.Title>
          <Tag tag="p" />
          <Body.Content>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>

            <p>
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>

            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </Body.Content>
          <Tag tag="p" />
        </Body.Container>
      </Item>
    </Wrapper>
  </Layout>
)

export default About
