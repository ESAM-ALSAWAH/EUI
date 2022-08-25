import React, { FC, useState, useEffect, useCallback } from 'react'

import { IconButtonStyle } from './IconButton.style'
import { IconButtonProps } from './IconButton.types'
import clsx from 'clsx'

export const IconButton: FC<IconButtonProps> = ({
  hoverEffect = true,
  rippleEffect = true,
  animation = 'none',
  durationAnimation = '3s',
  variant = 'contained',
  color,
  style,
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
    <IconButtonStyle
      className={clsx(click && animation, className)}
      hoverEffect={hoverEffect}
      onClick={handleClick}
      color={color}
      textColor={textColor}
      size={size}
      animation={animation}
      durationAnimation={durationAnimation}
      variant={variant}
      type="button"
      style={style}
      onAnimationEnd={() => setClick(false)}
      aria-label="iconButton"
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

      <div className="eui__children">{children}</div>
    </IconButtonStyle>
  )
}
