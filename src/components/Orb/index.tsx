import React, { useRef, useEffect } from 'react'

import { OrbProps } from './types'

const Orb: React.FC<OrbProps> = ({ data = [] }) => {
  const orbRef = useRef<HTMLDivElement | null>(null)

  const size = {
    width: window.innerWidth >= 500 ? 500 : window.innerWidth - 35,
    height: window.innerHeight >= 500 ? 500 : window.innerHeight - 35,
  }

  useEffect(() => {
    try {
      window.Orb.Start('orb-canvas', '', {
        textColour: '#ffffff',
        textHeight: 20,
        depth: 1,
      })
    } catch {
      if (orbRef.current) {
        orbRef.current.style.display = 'none'
      }
    }
  }, [])

  return (
    <div ref={orbRef}>
      <canvas id="orb-canvas" width={size.width} height={size.height}>
        <ul>
          {data.length &&
            data.map((item, key) => (
              <li key={key}>
                <a onClick={e => e.preventDefault()}>{item}</a>
              </li>
            ))}
        </ul>
      </canvas>
    </div>
  )
}

export default Orb
