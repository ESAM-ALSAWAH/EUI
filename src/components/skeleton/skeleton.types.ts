import React from 'react'

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  isLoading: true | false
}
