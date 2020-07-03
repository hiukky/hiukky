import styled from 'styled-components'
import { Utils, Flex } from '@minily/tools'

import { TagProps } from './types'

const Wrapper = {
  Container: styled.div<TagProps>`
    user-select: none;
    padding: 0 10px;
    font-size: 0;

    ${p =>
      Flex.container('flex-start', 'flex-start', {
        direction: p.reverse ? 'column-reverse' : 'column',
      })};

    @media only screen and (min-width: 576px) {
      font-size: 0;
      font-size: 1.1rem;
    }
  `,

  Tag: styled.span`
    font-family: ${p => p.theme.fonts.mark};
    color: ${p => Utils.lightenColor(p.theme.colors.light, -50)};

    :nth-child(2n) {
      margin-left: 20px;
    }
  `,
}

export { Wrapper }
