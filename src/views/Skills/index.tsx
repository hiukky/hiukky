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
    'CSS 3',
    'HTML 5',
    'Git',
    'MongoDB',
    'ReactJs',
    'PostgreSQL',
    'NodeJs',
    'Typescript',
    'Shell script',
    'SASS',
    'Java',
    'AdonisJs',
    'JSON',
    'Linux',
    'Electron',
    'Python',
    'NextJs',
    'NestJs',
    'MySQL',
    'AWS',
  ]

  return (
    <Layout title="Skills">
      <Wrapper sm={{ item: 1, order: 2 }} lg={{ item: 2, order: 2 }}>
        <Item>
          <Orb data={SKILLS} />
        </Item>
        <Item>
          <Body.Container color="pink">
            <Body.Title color="pink">
              <Tag tag="h1" />
              <h1>Skills</h1>
              <Tag tag="h1" />
            </Body.Title>
            <Tag tag="p" />
            <Body.Content>
              <P>
                In these 5 years of walking as a developer and with my curiosity
                to unravel things, I was able to get a lot experience in various
                technologies in the <s>Android</s> world,
                <s> Linux</s>, <s>Desktop</s> and <s>Web</s>.
              </P>

              <P>
                Currently most of the time I’m working with
                <s> Nodejs</s> and <s>Typescript</s>, with some frameworks like
                <s> ReactJs</s> and <s> NestJs </s>.
              </P>
            </Body.Content>
            <Tag tag="p" />
          </Body.Container>
        </Item>
      </Wrapper>
    </Layout>
  )
}

export default Skills
