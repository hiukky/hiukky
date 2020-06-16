export interface TagProps
  extends React.PropsWithRef<JSX.IntrinsicElements['span']> {
  tag: string | string[]
  reverse?: boolean | number
}
