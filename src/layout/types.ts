export type TView = {
  title: string
  Component: React.FC
}

export interface LayoutProps
  extends React.PropsWithRef<JSX.IntrinsicElements['div']> {
  title: string
  favicon?: string
}
