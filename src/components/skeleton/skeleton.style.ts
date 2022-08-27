import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { SkeletonProps } from './skeleton.types'
const skeletonShimmer = keyframes`
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }

`
export const SkeletonWrapper = styled.div((props: SkeletonProps) => ({
  position: 'relative',
  '*': {
    height: '100%',
    opacity: 1,
    visibility: 'visible',
    transition: 'all .2s linear',
  },
  ...(props['isLoading'] && {
    overflow: 'hidden',
    background: '#DEDEE2',
    ':after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, #DEDEE2, #e9e9ec, #DEDEE2)',
      animation: `${skeletonShimmer} 1.6s ease-in-out infinite`,
    },
    '*': {
      opacity: 0,
      visibility: 'hidden',
    },
  }),
}))
