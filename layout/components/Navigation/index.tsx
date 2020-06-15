import React from 'react'
import { Icon } from '@minily/components'
import Link from 'next/link'

import { NavigationProps } from './types'

import { Wrapper, Button } from './styles'

const Navigation: React.FC<NavigationProps> = ({ buttons }) => (
  <Wrapper>
    {buttons.map(btn => (
      <Link href={btn.route} key={btn.route}>
        <Button>
          <Icon
            name={btn.icon.name}
            style={{ color: btn.icon.color }}
            type="line"
          />
        </Button>
      </Link>
    ))}
  </Wrapper>
)

export default Navigation
