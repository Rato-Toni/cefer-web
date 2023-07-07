import Home from '@/app/home'
import { getHome } from '@/services/strapi/home'

export default async function Root() {
  const homeData = await getHome()

  return <Home content={homeData} />
}
