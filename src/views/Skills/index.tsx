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
    'PostgreSQL',
    'MongoDB',
    'HTML5',
    'NodeJs',
    'Typescript',
    'ReactJs',
    'SASS',
    'Java',
    'Python',
    'JSON',
    'AdonisJs',
    'NestJs',
    'NextJs',
    'MySQL',
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
            <Body.Content>
              <P>
                In these 3 years of walking as a developer and with my curiosity
                to unravel things, I was able to get a lot experience in various
                technologies whether in the <s>Android</s> world,
                <s> Linux</s> or <s>Web</s>.
              </P>

              <P>
                Currently most of the time I’m working with
                <s> Nodejs</s> and <s>Typescript</s>, with some frameworks like
                <s> ReactJs</s> and <s> AdonisJs </s>.
              </P>
            </Body.Content>
          </Body.Container>
        </Item>
      </Wrapper>
    </Layout>
  )
}

export default Skills
