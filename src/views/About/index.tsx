import React from 'react'

import { Wrapper, Item, P, Body, Brand } from '../styled'

import { Tag } from 'components'

import Layout from 'layout'

const About: React.FC = () => (
  <Layout title="About me">
    <Wrapper sm={{ item: 2, order: 1 }} lg={{ item: 1, order: 2 }}>
      <Item>
        <Brand src="/assets/personal/hiukky.png" alt="Hiukky" />
      </Item>
      <Item>
        <Body.Container color="yellow">
          <Body.Title color="yellow">
            <Tag tag="h1" />
            <h1>About Me</h1>
            <Tag tag="h1" />
          </Body.Title>
          <Tag tag="p" />
          <Body.Content>
            <P>
              Hello, I'm <s>Romullo</s>, {new Date().getFullYear() - 1997} years
              old, brazilian, christian, lover of technology and the open-source
              world. I <s>graduated</s> in Systems Analysis and Development and
              currently work as a <s>Software Developer</s> at{' '}
              <a href="https://www.softplan.com.br/" target="_blank">
                <s>Softplan</s>
              </a>
              .
            </P>

            <P>
              Today with the constant updating in the technology world, I{' '}
              <s>dedicate</s> most of my time <s>studying</s> and keeping up to
              date with the best languages, tools and practices for the
              development of quality software.
            </P>

            <P>
              My main <s>hobby</s> is programming! I spend a lot of time
              contributing to <s>open-source</s> projects on{' '}
              <a href="https://github.com/hiukky" target="_blank">
                <s> Github </s>
              </a>{' '}
              and in my spare time I like watching{' '}
              <a href="https://myanimelist.net/profile/hiukky" target="_blank">
                <s> animes </s>
              </a>
              , <s>series</s> or listening <s>lo-fi</s>.
            </P>
          </Body.Content>
          <Tag tag="p" />
        </Body.Container>
      </Item>
    </Wrapper>
  </Layout>
)

export default About
