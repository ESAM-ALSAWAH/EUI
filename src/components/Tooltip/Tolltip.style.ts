import styled from '@emotion/styled'

export const TolltipStyle = styled.div(
  (props: { placement?: 'top' | 'bottom' }) => ({
    width: 'fit-content',
    height: 'fit-content',
    display: 'grid',
    placeItems: 'center',
    padding: '5px',
    position: 'relative',
    ':hover': {
      '.EUI__Tolltip': {
        transform: 'translateX(-50%) scale(1)',
        opacity: '1',
        transition: 'all .2s linear',
      },
    },
    '.EUI__Tolltip': {
      display: 'block',
      userSelect: 'none',
      background: '#969a9e',
      borderRadius: '3px',
      color: '#fff',
      padding: '4px 8px',
      fontSize: '13px',
      position: 'absolute',
      zIndex: '100',
      ...(props['placement'] === 'bottom' && { top: '95%' }),
      ...(props['placement'] === 'top' && { bottom: '95%' }),
      left: '50%',
      transform: 'translateX(-50%) scale(.7)',
      opacity: '0',
      transition: 'all .2s linear',
      WebkitBoxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      MozBoxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    },
  }),
)
