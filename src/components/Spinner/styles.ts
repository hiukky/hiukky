import styled from 'styled-components'
import { Flex, Animations } from '@minily/tools'

import { SpinnerProps } from './types'

const Wrapper = styled.div<SpinnerProps>`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 20;
  background: ${p => p.theme.colors.dark};
  ${Flex.container('center', 'center')}

  animation: ${p => !p.loading && Animations.fadeOut} 1s
    steps(90) forwards;
  * {
    animation: ${p => !p.loading && Animations.fadeOut} 1s
      steps(90) forwards;
  }
`

const Loader = styled.span`
  width: 30px;
  height: 30px;
  position: relative;
  border: 4px solid #fff;
  animation: loader 2s infinite ease;

  ::before {
    content: ' ';
    vertical-align: top;
    display: inline-block;
    width: 100%;
    background-color: #fff;
    animation: loader-inner 2s infinite ease-in;
  }

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(180deg);
    }

    50% {
      transform: rotate(180deg);
    }

    75% {
      transform: rotate(360deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loader-inner {
    0% {
      height: 0%;
    }

    25% {
      height: 0%;
    }

    50% {
      height: 100%;
    }

    75% {
      height: 100%;
    }

    100% {
      height: 0%;
    }
  }
`

export { Wrapper, Loader }
