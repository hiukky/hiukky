import styled from 'styled-components'
import { Row } from '@minily/components'
import { Flex } from '@minily/tools'

const Wrapper = styled(Row)`
  height: 100%;
  ${Flex.container('center', 'center', { direction: 'column' })}
`

const Box = styled.div`
  height: 100%;
  width: 100%;
`

export { Wrapper, Box }
