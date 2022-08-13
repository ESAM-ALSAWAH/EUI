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
const SpinAnimation = keyframes`
  100%{
    transform: rotate(360deg);
  }
`
const loaderProgression = keyframes`
  0%, 100% {
    opacity: 0.5;
    transform: scale(0.8);
  }
  30%, 60% {
    opacity: 1;
    transform: scale(1);
}`
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

  '.text-button': {
    fontSize: '13px',
  },
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
  '&.loading-button': {
    position: 'relative',
    boxShadow: 'none',
    ':after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      backgroundColor: '#fff',
      opacity: 0.35,
    },
    '.loading-spin , .loading-spin-with-text': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
    },
    '.spinner': {
      width: '15px',
      height: '15px',
      borderRadius: '50%',
      background: 'transparent',
      borderTop: `2px solid ${
        props['variant'] === 'contained'
          ? '#fff'
          : props['color'] && BgColor[props['color']]
      }`,
      animation: ` 1s linear  ${SpinAnimation} infinite`,
    },
    '.loading-spin .spinner': {
      position: 'absolute',
    },
    '.loading-dots': {
      textAlign: 'center',
      '.dot': {
        display: 'inline-block',
        height: '8px',
        width: '8px',
        backgroundColor: '#fff',
        margin: '0 2.5px',
        borderRadius: ' 100px',
        opacity: 1,
        animation: `${loaderProgression} 1.4s  cubic-bezier(0.86, 0, 0.07, 1) infinite `,

        ':nth-child(1)': {
          animationDelay: '0',
        },
        ':nth-child(2)': {
          animationDelay: ' 0.125s',
        },
        ':nth-child(3)': {
          animationDelay: ' 0.25s',
        },
      },
    },
  },
}))

export { ButtonStyle }
