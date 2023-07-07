import { FaBuildingColumns, FaCircleInfo, FaIdCard } from 'react-icons/fa6'

import { HomeAbout } from '@/app/home/About'
import { HomeCarousel } from '@/app/home/Carousel'
import { HomeNews } from '@/app/home/News'
import { HomeRules } from '@/app/home/Rules'
import { Carousel } from '@/components/Carousel'
import { StrapiHome } from '@/services/strapi/types'
import { getUrl } from '@/services/strapi/urlHelper'
import { styled } from '@panda/jsx'

export interface HomeProps {
  content: StrapiHome
}

export default function Home({ content }: HomeProps) {
  const carouselItems =
    content?.attributes?.carousel?.items?.map((item) => ({
      imageUrl: getUrl(item.image?.data?.attributes.url),
      imageAlt: item.image?.data?.attributes.alternativeText,
      title: item.title,
      description: item.description,
    })) || []

  const aboutTitle = content?.attributes?.about?.title
  const aboutContent = content?.attributes?.about?.content
  const aboutImageUrl = getUrl(content?.attributes?.about?.picture?.data?.attributes.url)
  const aboutImageAlt = content?.attributes?.about?.picture?.data?.attributes.alternativeText

  const rulesTitle = content?.attributes?.rules?.title
  const rulesItems =
    content?.attributes?.rules?.items?.map((item) => ({
      icon: getUrl(item.icon?.data?.attributes.url),
      title: item.description,
    })) || []

  return (
    <Container>
      <HomeCarousel items={carouselItems} />
      <HomeAbout
        title={aboutTitle}
        content={aboutContent}
        imageUrl={aboutImageUrl}
        imageAlt={aboutImageAlt || undefined}
      />
      <HomeRules title={rulesTitle} items={rulesItems} />
      <HomeNews />
    </Container>
  )
}

const Container = styled('div', {
  base: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})
