import React from 'react'

import { Wrapper, Item, P } from '../styles'
import { Body, Brand } from './styles'

import { Tag } from 'components'

import Layout from 'layout'

const About: React.FC = () => (
  <Layout title="About me">
    <Wrapper sm={{ item: 2, order: 1 }} lg={{ item: 1, order: 2 }}>
      <Item>
        <Brand src="/assets/hiukky.png" />
      </Item>
      <Item>
        <Body.Container>
          <Body.Title>
            <Tag tag="h1" />
            <h1>About Me</h1>
            <Tag tag="h1" />
          </Body.Title>
          <Tag tag="p" />
          <Body.Content>
            <P>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </P>

            <P>
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </P>

            <P>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </P>
          </Body.Content>
          <Tag tag="p" />
        </Body.Container>
      </Item>
    </Wrapper>
  </Layout>
)

export default About
