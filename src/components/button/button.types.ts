import { ReactNode } from 'react'

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'success' | 'danger' | 'warning' |(string & {})
  hoverEffect?: boolean
  rippleEffect?:boolean
  textColor?: string
  size?:'small'|'medium'|'large'|`${number}px`|`${number}em`|`${number}rem`
  startIcon?:ReactNode
  endIcon?:ReactNode
  isLoading?:boolean
  loadingText?:string
  typeLoading?: 'text' | 'spin' | 'dots'|'spinwithtext'
  animation?:'none'|'default'|'scale'|'slide'
  variant?:'text'|'outline'|'contained'
  radius?: 'small' | 'medium' | 'large' | 'full'| 'none'| `${number}px`|`${number}em`|`${number}rem`|`${number}%`
  as?:'link'
  href?:string
  target?:'_blank'|'_self'|'_parent'|'_top'
  onClick?:(event:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void
  children?: ReactNode

}

export interface IButtonStyleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:'text'|'outline'|'contained'
  textColor?: string
  animation?:'none'|'default'|'scale'|'slide'
  size?:'small'|'medium'|'large'|`${number}px`|`${number}em`|`${number}rem`
  radius?: 'small' | 'medium' | 'large' | 'full'| 'none'| `${number}px`|`${number}em`|`${number}rem`|`${number}%`,
  hoverEffect?: boolean
}
