import React, { ReactNode } from 'react'

export interface TolltipProps {
  children: ReactNode
  title: string
  placement?: 'top' | 'bottom'
  style?: React.CSSProperties
}
