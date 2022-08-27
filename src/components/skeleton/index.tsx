import React from 'react'
import { SkeletonProps } from './skeleton.types'
import { SkeletonWrapper } from './skeleton.style'
export const Skeleton: React.FC<SkeletonProps> = ({
  children,
  isLoading,
  ...restprops
}) => {
  return (
    <SkeletonWrapper isLoading={isLoading} {...restprops}>
      {children}
    </SkeletonWrapper>
  )
}
