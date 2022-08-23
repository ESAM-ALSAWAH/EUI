import styled from '@emotion/styled'
import { keyframes } from '@emotion/css'
import { IconButtonStylesProps } from './IconButton.types'
import { hexToRgbA } from '@/lib/rgbColor'
import { color } from '@/constants'
const RippleAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(10);
    opacity: 0.375;
  }
  100% {
    transform: scale(35);
    opacity: 0;
  }
`
const BounceOut = keyframes`
  50%{
    transform: scale(.9);
  }
`
const WIDTH = {
  small: '30px',
  medium: '40px',
  large: '45px',
} as { [key: string]: string }

const HEIGHT = {
  small: '30px',
  medium: '40px',
  large: '45px',
} as { [key: string]: string }

const IconButtonStyle = styled.button((props: IconButtonStylesProps) => ({
  background:
    props['color'] && color[props['color']]
      ? color[props['color']]
      : props['color'],

  color: props['textColor']
    ? color[props['textColor']]
      ? color[props['textColor']]
      : props['textColor']
    : '#fff',
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',
  textAlign: 'center',
  outline: 'none',
  border: 'none',
  padding: '2px',
  fontSize: '16px',
  fontWeight: '400',

  borderRadius: '50%',
  display: 'grid',
  placeItems: 'center',
  height: '35px',
  width: '35px',
  transition: 'transform 0.2s linear',

  boxShadow:
    ' rgb(0 0 0 / 20%) 0px 3px 1px -5px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px',

  ...(props['size'] && {
    width: WIDTH[props['size']] ? WIDTH[props['size']] : props['size'],
  }),
  ...(props['size'] && {
    height: HEIGHT[props['size']] ? HEIGHT[props['size']] : props['size'],
  }),

  '&:hover': {
    ...(!!props['hoverEffect'] && {
      background:
        props['color'] &&
        hexToRgbA(
          color[props['color']] ? color[props['color']] : props['color'],
          0.9,
        ).toString(),
    }),

    transition: 'background 0.3s ease-in-out,box-shadow 0.2s linear',

    boxShadow:
      'rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;',

    ...(props['animation'] === 'scale' && {
      transform: 'scale(1.1)',
      transition: 'transform 0.2s linear',
    }),
  },

  '&.default': {
    animation: `${BounceOut} 0.2s linear`,
  },
  '.ripple': {
    width: '20px',
    height: '20px',
    position: 'absolute',
    background: 'rgba(255,255,255,.4)',
    display: 'block',
    content: '" "',
    borderRadius: ' 9999px',
    opacity: 1,
    animation: ` 1s ease 1 forwards ${RippleAnimation}`,
  },
}))

export { IconButtonStyle }
