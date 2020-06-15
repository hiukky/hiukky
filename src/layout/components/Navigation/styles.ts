import styled from 'styled-components'
import { Utils, Flex } from '@minily/tools'

const Wrapper = styled.div`
  position: fixed;
  grid-area: 'navgation';
  height: 70px;
  max-width: 330px;
  background: ${p => Utils.lightenColor(p.theme.colors.dark, 4)};
  z-index: 5;
  border-radius: 30px;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%, -50%);
  padding: 0 30px;
  ${Flex.container('space-between', 'center')}
  transition: .2s;

  @media only screen and (min-width: 568px) {
    height: 50%;
    width: 70px;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    padding: 30px 0;
    margin-left: 20px;
    transform: none;
    flex-direction: column;
  }
`

const Button = styled.div`
  height: 60px;
  width: 60px;
  cursor: pointer;
  ${Flex.container('center', 'center')}
  transition: .3s;

  :hover {
    transform: scale(1.2);
  }
`

export { Wrapper, Button }
