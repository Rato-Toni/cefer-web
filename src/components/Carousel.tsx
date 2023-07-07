'use client'

import { useCallback, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

import { styled } from '@panda/jsx'

export interface CarouselElement {
  image: string
  title?: string
  description?: string
}

export interface CarouselProps {
  elements: CarouselElement[]
}

/*
 * TODO:
 *  - [ ] Add animation
 *  - [ ] Add indicator
 *  - [ ] Add timer
 */

export function Carousel({ elements = [] }: CarouselProps) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(
    () => setCurrent((state) => (state + 1) % elements.length),
    [setCurrent, elements],
  )

  const prev = useCallback(
    () => setCurrent((state) => (state + elements.length - 1) % elements.length),
    [setCurrent, elements],
  )

  // Auto next
  useEffect(() => {
    const interval = setInterval(next, 15000)
    return () => clearInterval(interval)
  }, [current, next, elements])

  const element = elements[current]
  const imageUrl = element?.image
  const title = element?.title
  const description = element?.description

  return (
    <Container>
      <ImageWrapper>{imageUrl && <img src={imageUrl} alt={title} />}</ImageWrapper>

      {elements.length > 1 && (
        <CarouselControls>
          <button onClick={prev}>
            <FaChevronLeft size={24} />
          </button>
          <button onClick={next}>
            <FaChevronRight size={24} />
          </button>
        </CarouselControls>
      )}

      {(title || description) && (
        <CarouselTextContainer>
          <CarouselText>
            <h6>{title}</h6>
            <p>{description}</p>
          </CarouselText>
        </CarouselTextContainer>
      )}
    </Container>
  )
}

const Container = styled('div', {
  base: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',

    position: 'relative',
  },
})

const ImageWrapper = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: '100%',

    position: 'absolute',

    '& img': {
      width: '100%',
    },
  },
})

const CarouselControls = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    height: '100%',
    width: '100%',
    maxWidth: '100%',

    position: 'absolute',
    left: 0,
    top: '50%',
    zIndex: 2,

    transform: 'translateY(-50%)',

    '& svg': {
      fill: '#fff',
      stroke: '#fff',
    },

    '& button': {
      width: '40px',
      height: '40px',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(0, 0, 0, 0)',
      transition: 'all 0.15s ease-in-out',

      borderRadius: '50%',

      cursor: 'pointer',

      mx: '8px',
    },

    '&:hover button': {
      background: 'rgba(0, 0, 0, 0.4)',

      '&:hover': {
        background: 'rgba(0, 0, 0, 0.6)',
      },

      '&:active': {
        background: 'rgba(0, 0, 0, 0.8)',
      },
    },
  },
})

const CarouselTextContainer = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column-reverse',

    width: '100%',
    height: '100%',
    zIndex: 1,

    position: 'absolute',
    left: 0,
    bottom: 0,
  },
})

const CarouselText = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    width: '100%',
    minHeight: '80px',

    background: 'rgba(0, 0, 0, 0.6)',
    color: '#fff',

    p: '12px 8px',

    '& h6': {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      lineClamp: 1,
      textOverflow: 'ellipsis',
    },

    '& p': {
      lineClamp: 2,
      textOverflow: 'ellipsis',
    },
  },
})
