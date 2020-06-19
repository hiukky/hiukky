import styled from 'styled-components'
import { Utils, Flex } from '@minily/tools'

import { TagProps } from './types'

const Wrapper = {
  Container: styled.div<TagProps>`
    user-select: none;
    padding: 5px;

    ${p =>
      Flex.container('flex-start', 'flex-start', {
        direction: p.reverse ? 'column-reverse' : 'column',
      })};
  `,

  Tag: styled.span`
    font-family: ${p => p.theme.fonts.mark};
    font-size: 1.1rem;
    color: ${p => Utils.lightenColor(p.theme.colors.light, -50)};
    margin: 2px;

    :nth-child(2n) {
      margin-left: 20px;
    }
  `,
}

export { Wrapper }
