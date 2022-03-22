import React from 'react'
import { Icon } from '@minily/components'

import { Wrapper, Item, Body, Brand } from '../styled'
import { Copyright, Social } from './styled'

import { Tag } from 'components'

import Layout from 'layout'

const NETWORK: Record<'icon' | 'url' | 'color', string>[] = [
  {
    icon: 'telegram',
    url: 'https://t.me/hiukky',
    color: '#36AEE2',
  },
  {
    icon: 'github',
    url: 'https://github.com/hiukky',
    color: '#ffffff',
  },

  {
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/hiukky',
    color: '#0077B5',
  },

  {
    icon: 'instagram',
    url: 'https://www.instagram.com/hiukky',
    color: '#D34350',
  },
  {
    icon: 'twitter',
    url: 'https://twitter.com/hiukky',
    color: '#1C93DD',
  },
]

const Home: React.FC = () => (
  <Layout title="Romullo (@hiukky)">
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
            <p>Software Developer</p>
            <Tag tag="p" />
          </Body.Subtitle>
          <Social.Container>
            {NETWORK.map((btn, key) => (
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
        <Brand src="/assets/personal/lol.svg" alt="hiukky" />
      </Item>
    </Wrapper>
    <Copyright>© {new Date().getFullYear()} hiukky</Copyright>
  </Layout>
)

export default Home
