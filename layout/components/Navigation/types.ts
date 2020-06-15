import { TIcon } from '@minily/components'

export interface NavigationProps
  extends React.PropsWithRef<JSX.IntrinsicElements['div']> {
  buttons: {
    route: string
    icon: {
      name: TIcon
      color: string
    }
  }[]
}
