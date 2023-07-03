import { ReactNode } from 'react'

import { Header } from '@/components/Header'
import { styled } from '@panda/jsx'

export interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  )
}

const Container = styled('div', {
  base: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
})

const Main = styled('main', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    minHeight: '100%',
    minWidth: '100%',
    mt: 'header',
  },
})
