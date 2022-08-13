import styled from '@emotion/styled'
import { keyframes } from '@emotion/css'
import { IButtonStyleProps } from './button.types'
import { hexToRgbA } from '../../utils/hextToRgbA'

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

const BgColor = {
  primary: '#1F8BE8',
  success: '#00C853',
  danger: '#F44336',
  warning: '#FFC107',
} as any

const Radius = {
  none: '0',
  small: '6px',
  medium: '12px',
  large: '18px',
  full: '50%',
} as any
const WIDTH = {
  small: '64px',
  medium: '74px',
  large: '89px',
} as { [key: string]: string }

const HEIGHT = {
  small: '32px',
  medium: '34px',
  large: '40px',
} as { [key: string]: string }

const ButtonStyle = styled.button((props: IButtonStyleProps) => ({
  ...(props['variant'] === 'contained'
    ? {
        background:
          (props['color'] && BgColor[props['color']]) ?? props['color'],
      }
    : { background: 'transparent' }),
  ...(props['variant'] !== 'contained'
    ? {
        color: !!props['textColor']
          ? props['textColor']
          : props['color'] && BgColor[props['color']],
      }
    : {
        color: !!props['textColor'] ? props['textColor'] : '#fff',
      }),
  ...(props['variant'] === 'outline'
    ? {
        border: `1px solid ${
          !!props['textColor']
            ? props['textColor']
            : props['color'] && BgColor[props['color']]
        }`,
      }
    : {
        border: 'none',
      }),
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',
  textAlign: 'center',
  outline: 'none',
  ...(!props['size'] && { padding: '6px 16px' }),
  fontSize: '16px',
  fontWeight: '400',

  borderRadius: !!props['radius']
    ? Radius[props['radius']] ?? props['radius']
    : '4px',

  height: 'fit-content',
  width: 'fit-content',
  transition: 'transform 0.2s linear',
  ...(props['variant'] === 'contained' && {
    boxShadow:
      ' rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px',
  }),
  ...(props['size'] && {
    width: WIDTH[props['size']] ? WIDTH[props['size']] : props['size'],
  }),
  ...(props['size'] && {
    height: HEIGHT[props['size']] ? HEIGHT[props['size']] : props['size'],
  }),

  '&:hover': {
    ...(!!props['hoverEffect'] &&
      (props['variant'] === 'contained'
        ? {
            background:
              props['color'] &&
              hexToRgbA(
                BgColor[props['color']]
                  ? BgColor[props['color']]
                  : props['color'],
                0.9,
              ).toString(),
          }
        : {
            background:
              props['color'] &&
              hexToRgbA(
                BgColor[props['color']]
                  ? BgColor[props['color']]
                  : props['color'],
                0.1,
              ).toString(),
          })),

    transition: 'background 0.3s ease-in-out,box-shadow 0.2s linear',
    ...(props['variant'] === 'contained' && {
      boxShadow:
        'rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;',
    }),

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
    background:
      props['variant'] === 'contained'
        ? 'rgba(255,255,255,.4)'
        : props['color'] &&
          hexToRgbA(
            BgColor[props['color']] ? BgColor[props['color']] : props['color'],
            0.4,
          ).toString(),
    display: 'block',
    content: '" "',
    borderRadius: ' 9999px',
    opacity: 1,
    animation: ` 1s ease 1 forwards ${RippleAnimation}`,
  },
}))

export { ButtonStyle }
