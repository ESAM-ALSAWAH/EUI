import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { WrapperImageProps } from './images.types'
const Rotate = keyframes`
  to{
    transform:translate(-50%,-50%) rotate(360deg);
    transformOrigin:center
  }
`
export const WraaperImage = styled.div((props: WrapperImageProps) => ({
  position: 'relative',
  overflow: 'hidden !important',

  background: '#fff',
  boxShadow: ' rgba(149, 157, 165, 0.2) 0px 8px 24px',
  '.eui__spinner__image': {
    border: '5px solid #fff',
    borderBlockColor: 'transparent',
    borderInlineColor: props['spinnerColor'] ?? '#333',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    position: 'absolute',
    inset: '50%',
    transform: 'translate(-50%,-50%)',
    animation: `${Rotate} 2s linear infinite`,
  },
  img: {
    width: '100%',
    height: '100%',
  },
}))
