import { Carousel } from '@/components/Carousel'
import { styled } from '@panda/jsx'

export interface HomeCarouselItem {
  title?: string | null
  description?: string | null
  imageUrl: string
  imageAlt?: string | null
}

export interface HomeCarouselProps {
  items?: HomeCarouselItem[]
}

export function HomeCarousel({ items = [] }: HomeCarouselProps) {
  if (!items || items.length === 0) {
    return null
  }

  const elements = items.map((item) => ({
    image: item.imageUrl,
    title: item.title || undefined,
    description: item.description || undefined,
  }))

  return (
    <CarouselRow>
      <CarouselWrapper>
        <Carousel elements={elements} />
      </CarouselWrapper>
    </CarouselRow>
  )
}

////////////
// Styles //
////////////

const CarouselRow = styled('div', {
  base: {
    display: 'flex',
    width: '100%',
    height: '400px',

    background: '#1e1e1e',

    overflow: 'hidden',
  },
})

const CarouselWrapper = styled('div', {
  base: {
    mx: 'auto',
    width: '100%',
    maxWidth: 'container',
    height: '100%',
  },
})
