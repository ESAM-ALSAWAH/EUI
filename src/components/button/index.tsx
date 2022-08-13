import React, { FC, useState, useEffect, useCallback, ReactNode } from 'react'
import { ButtonStyle } from './button.style'
import { IButtonProps } from './button.types'
import clsx from 'clsx'

const withLoading = (Component: FC<IButtonProps>) => {
  return function withLoading({
    isLoading,
    loadingText,
    typeLoading = 'text',
    children,
    ...props
  }: {
    isLoading?: boolean
    loadingText?: string
    children?: ReactNode
    typeLoading?: 'text' | 'spin' | 'dots' | 'spinwithtext'
  }) {
    return isLoading ? (
      <Component
        {...props}
        hoverEffect={false}
        rippleEffect={false}
        style={{
          cursor: 'not-allowed',
        }}
        className="loading-button"
        onClick={(e) => false}
      >
        {typeLoading === 'text' && (
          <span className="loading">
            {loadingText ? loadingText : 'Loading...'}
          </span>
        )}
        {typeLoading === 'spin' && (
          <div className="loading-spin">
            <div className="spinner"></div>
            <div style={{ opacity: 0 }}>{children}</div>
          </div>
        )}
        {typeLoading === 'spinwithtext' && (
          <div className="loading-spin-with-text">
            <div>{loadingText ? loadingText : children}</div>
            <div className="spinner"></div>
          </div>
        )}
        {typeLoading === 'dots' && (
          <div className="loading-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        )}
      </Component>
    ) : (
      <Component {...props}>{children}</Component>
    )
  }
}

const withLink = (Component: FC<IButtonProps>) => {
  return function withLink({
    href,
    as,
    target,
    ...props
  }: {
    href?: string
    as?: 'link'
    target?: '_blank' | '_self' | '_parent' | '_top'
  }) {
    return href && !!as ? (
      <a href={href} target={target}>
        <Component {...props} />
      </a>
    ) : (
      <Component {...props} />
    )
  }
}
const withIcons = (Component: FC<IButtonProps>) => {
  return function withIcons({
    startIcon,
    endIcon,
    children,
    ...props
  }: {
    startIcon?: ReactNode
    endIcon?: ReactNode
    children?: ReactNode
  }) {
    return !startIcon && !endIcon ? (
      <Component {...props}>{children}</Component>
    ) : (
      <Component
        {...props}
        style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
      >
        {startIcon && startIcon} <div className="text-button"> {children}</div>
        {endIcon && endIcon}
      </Component>
    )
  }
}
const Component: FC<IButtonProps> = ({
  variant = 'contained',
  hoverEffect = true,
  rippleEffect = true,
  animation = 'none',
  color,
  textColor,
  size,
  children,
  onClick,
  className,
  ...restprops
}) => {
  const [coords, setCoords] = useState<{ x: number; y: number }>({
    x: -1,
    y: -1,
  })
  const [isRippling, setIsRippling] = useState<boolean>(false)
  const [click, setClick] = useState<boolean>(false)
  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true)
      setTimeout(() => setIsRippling(false), 400)
    } else setIsRippling(false)
  }, [coords])

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 })
  }, [isRippling])
  const handleClick = useCallback((e: any) => {
    onClick && onClick(e)
    animation !== 'none' && setClick(true)
    const rect = e.target.getBoundingClientRect()
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  return (
    <ButtonStyle
      hoverEffect={hoverEffect}
      onClick={handleClick}
      color={color}
      variant={variant}
      textColor={textColor}
      size={size}
      animation={animation}
      type="button"
      onAnimationEnd={() => setClick(false)}
      className={clsx(click && animation, className)}
      {...restprops}
    >
      {rippleEffect && isRippling && (
        <span
          className="ripple"
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      )}

      {children}
    </ButtonStyle>
  )
}
export const Button: FC<IButtonProps> = withLoading(
  withLink(withIcons(Component)),
)
