import React from 'react'

import { Wrapper, Item, P, Body, Brand } from '../styles'

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
              Hello! My name is <s>Romullo</s>, I'm 23 years old, I'm Brazilian,
              Christian, a lover of technology and the open-source world.
            </P>
            <P>
              I have a degree in <s> Systems Analysis and Development </s> from
              Unopar and currently work as a <s> fullstack </s> developer at{' '}
              <s> Rhaimes </s>, a technology solutions company here at my city.
            </P>
            <P>
              Today my <s> hobby </s> is programming! most of the time when I'm
              not involved with work, I'm in front of my computer
              <s> studying </s> some new technology or working on some of my
              projects that you can check out on my {''}
              <a href="https://github.com/hiukky" target="_blank">
                <s> Github </s>
              </a>
              .
            </P>

            <P>
              To watch
              <a href="https://myanimelist.net/profile/hiukky" target="_blank">
                <s> animes </s>
              </a>
              and <s> series </s> or enjoying a <s> lo-fi </s> are also some of
              the my diversions.
            </P>
          </Body.Content>
          <Tag tag="p" />
        </Body.Container>
      </Item>
    </Wrapper>
  </Layout>
)

export default About
