import React from 'react'
import { NextPage } from 'next'
import { Icon } from '@minily/components'

import { TProps, TRepository } from './types'

import { Wrapper, Item, Body, P } from '../styles'
import { Card } from './styles'

import { Tag } from 'components'
import { useFetch } from 'hooks'
import Layout from 'layout'

const OpenSource: NextPage<TProps> = () => {
  const { data } = useFetch<TRepository[]>(
    `${process.env.GITHUB_BASE_URL}/users/hiukky/repos`,
  )

  return (
    <Layout title="Open Source">
      <Wrapper>
        <Item>
          <Body.Container color="green">
            <Body.Title color="green">
              <Tag tag="h1" />
              <h1>Open Source</h1>
              <Tag tag="h1" />
            </Body.Title>
            <Tag tag="p" />
            <Body.Content>
              <P>
                The open-source world is a wonderful thing! it's a place where
                we makes it possible to develop our <s>skills</s>, share
                <s> knowledge</s> and evolve together with the
                <s> community</s>.
              </P>
            </Body.Content>
            <Tag tag="p" />
          </Body.Container>
        </Item>
        <Item>
          <Card.Container>
            {data
              ?.filter(({ name }) =>
                [
                  'flate',
                  'http-handler-response',
                  'dashmin-react',
                  'dotfiles',
                  'hiukky',
                  'adonis-boilerplate-ts',
                  'eslint-plugin-hooks-sort',
                ].includes(name),
              )
              .map(repo => ({
                ...repo,
                description: repo.description.replace(/[^a-zA-Z]+/g, ' '),
                picture: `assets/open-source/${repo.name}_${repo.node_id}.png`,
              }))
              .sort((a, b) => b.stargazers_count - a.stargazers_count)
              .map((repo, key) => (
                <Card.Item key={key}>
                  <Card.Header>
                    <Card.Title>{repo.name}</Card.Title>
                    <Card.Description>{repo.description}</Card.Description>
                    <Card.ButtonStar
                      onClick={() => window.open(repo.html_url, '_blank')}
                    >
                      {repo.stargazers_count}
                      <Icon name="star" type="line" size="xs" />
                    </Card.ButtonStar>
                  </Card.Header>
                  <Card.Image href={repo.html_url} target="_blank">
                    <img
                      src={repo.picture}
                      alt={repo.name}
                      onError={(e: React.ChangeEvent<HTMLImageElement>) => {
                        e.target.src = 'assets/others/no-image.png'
                      }}
                    />
                  </Card.Image>
                </Card.Item>
              ))}
          </Card.Container>
        </Item>
      </Wrapper>
    </Layout>
  )
}

export default OpenSource
