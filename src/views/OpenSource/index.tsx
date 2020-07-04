import React from 'react'
import { NextPage } from 'next'
import { Icon } from '@minily/components'

import { TProps, IGithubResponse } from './types'

import { Wrapper, Item, Body, P } from '../styles'
import { Card } from './styles'

import { Tag } from 'components'
import { api } from 'services'

import Layout from 'layout'

const OpenSource: NextPage<TProps> = ({ repositories }) => {
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
                O mundo open-source é algo maravilhoso! é um lugar onde nos
                possibilita desenvolver nossas <s>habilidades</s>, compartilhar
                <s> conhecimento</s> e evoluir junto com a<s> comunidade</s>.
              </P>
            </Body.Content>
            <Tag tag="p" />
          </Body.Container>
        </Item>
        <Item>
          <Card.Container>
            {repositories.map((repo, key) => (
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

OpenSource.getInitialProps = async (): Promise<TProps> => {
  const { data, status }: IGithubResponse = await api.get(
    `${process.env.GITHUB_BASE_URL}/users/hiukky/repos`,
  )

  if (status === 200 && data) {
    return {
      repositories: data
        .filter(({ name }) =>
          [
            'flate',
            'http-handler-response',
            'dashmin-react',
            'dotfiles',
          ].includes(name),
        )
        .map(repo => ({
          ...repo,
          description: repo.description.replace(/[^a-zA-Z]+/g, ' '),
          picture: `assets/open-source/${repo.name}_${repo.node_id}.png`,
        }))
        .sort((a, b) => b.stargazers_count - a.stargazers_count),
    }
  }
}

export default OpenSource
