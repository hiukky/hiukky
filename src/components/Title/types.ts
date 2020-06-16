export interface TitleProps
  extends React.PropsWithRef<JSX.IntrinsicElements['div']> {
  tag: 'h1' | 'p'
  label: string
}
