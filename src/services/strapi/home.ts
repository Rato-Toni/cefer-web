import homeMockData from '@/mocks/home.json'
import { StrapiHome, StrapiResponse } from '@/services/strapi/types'

export async function getHome(locale: string = 'pt-BR'): Promise<StrapiHome> {
  const uri = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/home-content?locale=${locale}&populate=deep`

  try {
    const response = await fetch(uri, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
    })

    if (!response.ok) {
      throw new Error('Error fetching home data', { cause: response })
    }

    const data: StrapiResponse<StrapiHome> = await response.json()

    console.info('Home data fetched successfully:', { data })

    return data.data
  } catch (err) {
    console.error(err)

    if (process.env.NODE_ENV === 'development') {
      return homeMockData.data as StrapiHome
    }

    throw err
  }
}
