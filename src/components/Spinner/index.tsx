import React, { useEffect, useRef } from 'react'

import { SpinnerProps } from './types'

import { Wrapper, Loader } from './styles'

const Spinner: React.FC<SpinnerProps> = ({ loading, ...rest }) => {
  const spinnerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!loading && spinnerRef.current) {
      var time = setTimeout(() => spinnerRef.current?.remove(), 1000)
    }

    return () => {
      clearTimeout(time)
    }
  }, [loading])

  return (
    <div>
      <Wrapper ref={spinnerRef} {...{ rest, loading: loading ? 1 : 0 }}>
        <Loader />
      </Wrapper>
    </div>
  )
}

export default Spinner
