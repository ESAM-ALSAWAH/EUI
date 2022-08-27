import React, { useState } from 'react'
import { ImageProps } from './images.types'
import { WraaperImage } from './image.style'
import { Skeleton } from '../skeleton'
import { ImageError } from './ImageError'
export const Image: React.FC<ImageProps> = ({
  src,
  loading,
  alt,
  loadingType,
  width,
  height,
  styles,
  style,
  spinnerColor,
  ...restprops
}) => {
  const [isLoading, setIsloading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const LoadImage = () => setIsloading((prev) => false)
  const ErrorImage = () => setIsError(true)

  return (
    <WraaperImage
      {...restprops}
      spinnerColor={spinnerColor}
      style={{
        ...styles?.wrapperImage,
        ...style,
        ...(isError && {
          display: 'grid',
          placeItems: 'center',
        }),
      }}
    >
      {loadingType === 'spinner' && (
        <>
          {isError
            ? false
            : isLoading && <div className="eui__spinner__image"></div>}
          {!isError ? (
            <img
              src={src}
              alt={alt}
              loading={loading}
              width={width}
              height={height}
              style={{
                ...styles?.image,
                ...(isLoading &&
                  !isError && {
                    width: '0',
                    height: '0',
                  }),
              }}
              onLoad={LoadImage}
              onError={({ currentTarget }) => {
                ErrorImage()
              }}
            />
          ) : (
            <ImageError />
          )}
        </>
      )}
      {loadingType === 'skeleton' && (
        <Skeleton
          isLoading={isError ? false : isLoading}
          style={{
            width: '100%',
            height: '100%',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          {!isError ? (
            <img
              src={src}
              alt={alt}
              loading={loading}
              width={width}
              height={height}
              style={{
                ...styles?.image,
              }}
              onLoad={LoadImage}
              onError={({ currentTarget }) => {
                ErrorImage()
              }}
            />
          ) : (
            <ImageError />
          )}
        </Skeleton>
      )}
    </WraaperImage>
  )
}
