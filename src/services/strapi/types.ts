export interface StrapiResponse<T> {
  data: T
  meta: {
    pagination?: {
      total: number
      count: number
      perPage: number
      currentPage: number
      totalPages: number
      links: {
        previous: string
        next: string
      }
    }
  }
}

export interface StrapiData<T> {
  id: number
  attributes: T
}

export interface StrapiImageAttributes {
  name: string
  alternativeText?: string | null
  caption?: string | null
  width: number
  height: number
  formats: {
    thumbnail: {
      name: string
      hash: string
      ext: string
      path?: string | null
      mime: string
      width: number
      height: number
      size: number
      url: string
    }
  }
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl?: string | null
  provider: string
  provider_metadata?: any | null
  createdAt: string
  updatedAt: string
}

export interface StrapiImage {
  data: StrapiData<StrapiImageAttributes>
}

export interface StrapiHomeAttributes {
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: string
  about: {
    id: number
    title: string
    content: string
    picture: StrapiImage
  }
  rules: {
    id: number
    title: string
    items: {
      id: number
      description: string
      icon: StrapiImage
    }[]
  }
  news: {
    id: number
    title: string
  }
  carousel: {
    id: number
    items: {
      id: number
      title?: string | null
      description?: string | null
      image: StrapiImage
    }[]
  }
  alerts: {
    id: number
    alert?: string | null
  }
}

export interface StrapiHome extends StrapiData<StrapiHomeAttributes> {}
