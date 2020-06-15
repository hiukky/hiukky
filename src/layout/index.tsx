import React, { useContext } from 'react'
import Head from 'next/head'

import { LayoutProps } from './types'

import { Wrapper } from './styles'

import { Navigation, Content } from './components'

import { ThemeContext } from 'src/theme'

const Layout: React.FC<LayoutProps> = ({
  title = 'Hiukky',
  favicon = '/favicon.ico',
  children,
}) => {
  const { colors } = useContext(ThemeContext)

  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={favicon} />
      </Head>
      <Navigation
        buttons={[
          {
            route: '/',
            icon: {
              name: 'home',
              color: colors.blue,
            },
          },
          {
            route: '/about',
            icon: {
              name: 'user',
              color: colors.yellow,
            },
          },
          {
            route: '/skills',
            icon: {
              name: 'vip-diamond',
              color: colors.pink,
            },
          },
          {
            route: '/open-source',
            icon: {
              name: 'code-s-slash',
              color: colors.green,
            },
          },
        ]}
      />
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default Layout
