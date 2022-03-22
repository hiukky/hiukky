import React from 'react'
import { Icon } from '@minily/components'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { NavigationProps } from './types'

import { Wrapper, Button } from './styled'

const Navigation: React.FC<NavigationProps> = ({ buttons }) => {
  const router = useRouter()

  return (
    <Wrapper>
      {buttons.map(btn => (
        <Link href={btn.route} key={btn.route}>
          <Button>
            <Icon
              name={btn.icon.name}
              style={{ color: btn.icon.color }}
              type={router.pathname === btn.route ? 'fill' : 'line'}
            />
          </Button>
        </Link>
      ))}
    </Wrapper>
  )
}

export default Navigation
