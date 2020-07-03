import React from 'react'
import dynamic from 'next/dynamic'

import { Wrapper, Item, P, Body } from '../styles'

import { Tag } from 'components'

import Layout from 'layout'

const Orb = dynamic(() => import('components/Orb'))

const Skills: React.FC = () => {
  const SKILLS = [
    'SQL',
    'Javascript',
    'CSS3',
    'Postgres',
    'HTML5',
    'NodeJs',
    'Typescript',
    'ReactJs',
    'SASS',
    'Java',
    'Python',
    'AdonisJs',
    'NestJs',
    'NextJs',
    'MySQL',
  ]

  return (
    <Layout title="Skills">
      <Wrapper sm={{ item: 2, order: 1 }} lg={{ item: 2, order: 2 }}>
        <Item>
          <Body.Container>
            <Body.Title color="pink">
              <Tag tag="h1" />
              <h1>Skills</h1>
              <Tag tag="h1" />
            </Body.Title>
            <Body.Content>
              <P>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </P>

              <P>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </P>
            </Body.Content>
          </Body.Container>
        </Item>
        <Item>
          <Orb data={SKILLS} />
        </Item>
      </Wrapper>
    </Layout>
  )
}

export default Skills
