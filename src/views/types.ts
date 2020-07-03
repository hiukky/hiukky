import { TColors } from 'styled-components'

export type TWrapper = {
  [I in 'sm' | 'lg']?: {
    item: number
    order: number
  }
}

export type TBodyTitle = {
  color: TColors
}
