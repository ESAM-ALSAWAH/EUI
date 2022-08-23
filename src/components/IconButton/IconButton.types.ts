import { ReactNode } from 'react'
export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'success' | 'danger' | 'warning' |(string & {})
  hoverEffect?: boolean
  rippleEffect?:boolean
  textColor?: string
  size?:'small'|'medium'|'large'|`${number}px`|`${number}em`|`${number}rem`
  startIcon?:ReactNode
  endIcon?:ReactNode
  animation?:'none'|'default'|'scale'|'slide'
  
  
  target?:'_blank'|'_self'|'_parent'|'_top'
  
  onClick?:(event:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void
  children?: ReactNode

}

export interface IconButtonStylesProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:'text'|'outline'|'contained'
  textColor?: string  
  animation?:'none'|'default'|'scale'|'slide'
  size?:'small'|'medium'|'large'|`${number}px`|`${number}em`|`${number}rem`
  hoverEffect?: boolean
}
