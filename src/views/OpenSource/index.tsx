import React, { useCallback, useEffect, useState } from 'react'
import { Icon } from '@minily/components'

import { IGithubResponse, TRepository } from './types'

import { Wrapper, Item, Body } from '../styles'
import { Card } from './styles'

import { Tag } from 'components'
import { api } from 'services'

import Layout from 'layout'

const OpenSource: React.FC = () => {
  const [repos, setRepos] = useState<TRepository[]>([])

  /**
   * @function getRepos
   *
   * Get GitHub repositories for hiukky user
   */
  const getRepos = useCallback(async () => {
    try {
      const { data, status }: IGithubResponse = await api.get(
        `${process.env.NEXT_PUBLIC_GITHUB_BASE_URL}/users/hiukky/repos`,
      )

      if (status === 200 && data) {
        setRepos(
          data
            .filter(({ name }) =>
              ['flate', 'http-handler-response'].includes(name),
            )
            .map(repo => ({
              ...repo,
              picture: `assets/open-source/${repo.name}_${repo.node_id}.png`,
            })),
        )
      }
    } catch {}
  }, [])

  useEffect(() => {
    getRepos()
  }, [])

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
            <Body.Subtitle>
              <Tag tag="p" />
              <p>Alguns de meus projetos open-source.</p>
              <Tag tag="p" />
            </Body.Subtitle>
          </Body.Container>
        </Item>
        <Item>
          <Card.Container>
            {repos.map((repo, key) => (
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
                <Card.Image>
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
