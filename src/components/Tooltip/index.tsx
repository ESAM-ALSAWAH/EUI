import React from 'react'
import { TolltipStyle } from './Tolltip.style'
import { TolltipProps } from './Tolltip.types'
export const Tolltip: React.FC<TolltipProps> = ({
  children,
  title,
  style,
  placement = 'top',
}) => {
  return (
    <TolltipStyle placement={placement}>
      <span className="EUI__Tolltip" style={style}>
        {title}
      </span>
      {children}
    </TolltipStyle>
  )
}
