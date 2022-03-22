import React from 'react'
import dynamic from 'next/dynamic'

import { Wrapper, Item, P, Body } from '../styled'

import { Tag } from 'components'

import Layout from 'layout'

const Orb = dynamic(() => import('components/Orb'), { ssr: false })

const SKILLS: string[] = [
  'SQL',
  'JavaScript',
  'CSS 3',
  'HTML 5',
  'Git',
  'Ansible',
  'Docker',
  'MongoDB',
  'ReactJs',
  'PostgreSQL',
  'NodeJs',
  'TypeScript',
  'Figma',
  'Shell',
  'SASS',
  'Vagrant',
  'Java',
  'AdonisJs',
  'GraphQL',
  'Prisma',
  'RxJS',
  'Linux',
  'TypeORM',
  'Electron',
  'NextJs',
  'Jest',
  'Ava',
  'NestJs',
  'MySQL',
  'AWS',
]

const Skills: React.FC = () => {
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
                Currently, most of the time, I'm working on <s>Web</s>{' '}
                development with Typescript, Nodejs , ReactJs, NestJs and
                studying <s>DevOps</s> and some tools like Docker, Ansible,
                Vagrant and Terraform.
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
