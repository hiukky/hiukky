import React from 'react'
import { Icon } from '@minily/components'

import { Wrapper, Item, Body, Brand } from '../styles'
import { Copyright, Social } from './styles'

import { Tag } from 'components'

import Layout from 'layout'

const Home: React.FC = () => (
  <Layout title="Home">
    <Wrapper sm={{ item: 1, order: 2 }} lg={{ item: 1, order: 2 }}>
      <Item>
        <Body.Container color="blue">
          <Body.Title color="blue">
            <Tag tag="h1" />
            <h1>Romullo Sousa</h1>
            <Tag tag="h1" />
          </Body.Title>
          <Body.Subtitle>
            <Tag tag="p" />
            <p>Fullstack Developer</p>
            <Tag tag="p" />
          </Body.Subtitle>
          <Social.Container>
            {[
              {
                icon: 'instagram',
                url: 'https://www.instagram.com/hiukky/',
                color: '#D34350',
              },
              {
                icon: 'github',
                url: 'https://github.com/hiukky',
                color: '#ffffff',
              },
              {
                icon: 'twitter',
                url: 'https://twitter.com/hiukky',
                color: '#1C93DD',
              },
            ].map((btn, key) => (
              <Social.Button
                key={key}
                color={btn.color}
                href={btn.url}
                target="_blank"
              >
                <Icon name={btn.icon as any} />
              </Social.Button>
            ))}
          </Social.Container>
        </Body.Container>
      </Item>
      <Item>
        <Brand src="/assets/personal/brand.png" alt="Brand" loading="lazy" />
      </Item>
    </Wrapper>
    <Copyright>2020 © Hiukky</Copyright>
  </Layout>
)

export default Home
