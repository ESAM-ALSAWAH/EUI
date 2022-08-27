import React from 'react'

export interface ImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
  width?: string
  height?: string
  loading?: 'lazy' | 'eager'
  loadingType: 'spinner' | 'skeleton'
  spinnerColor?: string
  style?: React.CSSProperties
  styles?: {
    wrapperImage?: React.CSSProperties
    image?: React.CSSProperties
  }
}
export interface WrapperImageProps
  extends React.HTMLAttributes<HTMLDivElement> {
  spinnerColor?: string
}
