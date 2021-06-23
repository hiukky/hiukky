import React, { useContext, useEffect, useState } from 'react'
import Head from 'next/head'

import { LayoutProps } from './types'

import { Wrapper } from './styles'

import { Spinner } from 'components'
import { Navigation, Content } from './components'

import { ThemeContext } from 'theme'

const Layout: React.FC<LayoutProps> = ({
  title = 'Romullo',
  favicon = '/favicon.ico',
  children,
}) => {
  const { colors } = useContext(ThemeContext)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let time = setTimeout(() => setIsLoading(false), 2200)

    return () => clearTimeout(time)
  }, [])

  return (
    <>
      <Spinner loading={isLoading} />
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
                name: 'open-source',
                color: colors.green,
              },
            },
          ]}
        />
        <Content>{!isLoading && children}</Content>
      </Wrapper>
    </>
  )
}

export default Layout
