import React, { FC, useState, useEffect, useCallback } from 'react'
import { ButtonStyle } from './button.style'
import { IButtonProps } from './button.types'
import clsx from 'clsx'

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
export const Button: FC<IButtonProps> = withLink(
  ({
    variant = 'contained',
    hoverEffect = true,
    rippleEffect = true,
    animation = 'none',
    color,
    textColor,
    size,
    children,
    href,
    as,
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
  },
)
