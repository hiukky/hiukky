export type TWrapper = {
  [I in 'sm' | 'lg']?: {
    item: number
    order: number
  }
}
