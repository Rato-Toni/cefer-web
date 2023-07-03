'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { styled } from '@panda/jsx'

const navItems = [
  {
    label: 'Home',
    href: '/',
    enabled: true,
  },
  {
    label: 'Sobre',
    href: '/sobre',
    enabled: false,
  },
  {
    label: 'Regras',
    href: '/regras',
    enabled: false,
  },
  {
    label: 'Reservas',
    href: '/reservas',
    enabled: false,
  },
  {
    label: 'Aulas',
    href: '/aulas',
    enabled: false,
  },
  {
    label: 'Mapa',
    href: '/mapa',
    enabled: false,
  },
]
export const Header = () => {
  const pathname = usePathname()

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <img src="/cefer-white.svg" alt="CEFER" />
        </LogoContainer>

        <HeaderNavigation>
          <HeaderNavigationList>
            {navItems.map(({ label, href, enabled }) => (
              <HeaderNavigationListItem key={label} data-active={href === pathname}>
                <Link href={enabled ? href : '#'}>{label}</Link>
              </HeaderNavigationListItem>
            ))}
          </HeaderNavigationList>
        </HeaderNavigation>
      </HeaderContent>
      <HeaderDecoration />
    </HeaderContainer>
  )
}

//////////////////////////////////
// Styles & Auxiliar Components //
//////////////////////////////////

const HeaderContainer = styled('div', {
  base: {
    // Fix header on top
    position: 'fixed',
    top: 0,
    left: 0,

    // Header size
    width: '100vw',
    height: 'header',

    // Organize content
    display: 'flex',
    flexDirection: 'column',
    background: 'uspDarkCyan',

    // Shadow
    boxShadow: '0px 0px 1px 1px rgba(0, 0, 0, 0.25)',
  },
})

const HeaderContent = styled('div', {
  base: {
    height: 'headerContent',
    width: '100%',
    maxWidth: 'container',
    alignSelf: 'center',

    padding: '0 12px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    color: 'white',
  },
})

const LogoContainer = styled('div', {
  base: {
    height: '100%',
    padding: '4px 0',
  },
})

///////////////////////
// Header Navigation //
///////////////////////

const HeaderNavigation = styled('nav', {
  base: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
})

const HeaderNavigationList = styled('ul', {
  base: {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    alignItems: 'center',
  },
})

const HeaderNavigationListItem = styled('li', {
  base: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'uppercase',

    cursor: 'pointer',
    userSelect: 'none',
    transition: 'all 0.1s ease-in-out',
    pb: '1px',
    borderY: '2px solid transparent',

    '&:not(:first-child)': {
      ml: '24px',
    },

    '&:hover': {
      fontWeight: '900',
      borderBottomColor: 'white',
    },

    '&:active': {
      opacity: 0.8,
    },

    '&[data-active="true"]': {
      borderBottomColor: 'white',
    },
  },
})

///////////////////////
// Header Decoration //
///////////////////////

const HeaderDecoration = () => (
  <HeaderDecorationContainer>
    <HeaderDecorationAccentContainer>
      <HeaderDecorationTopAccent />
      <HeaderDecorationBottomAccent>
        <HeaderDecorationBottomLeftAccent />
        <HeaderDecorationBottomCenterAccent />
        <HeaderDecorationBottomRightAccent />
      </HeaderDecorationBottomAccent>
    </HeaderDecorationAccentContainer>
  </HeaderDecorationContainer>
)

const HeaderDecorationContainer = styled('div', {
  base: {
    height: 'headerDecoration',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flex: 1,

    background: 'uspYellow',
  },
})

const HeaderDecorationAccentContainer = styled('div', {
  base: {
    height: 'headerDecorationAccent',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
})

const HeaderDecorationTopAccent = styled('div', {
  base: {
    height: '8px',
    width: '100%',
    background: 'uspLightCyan',
  },
})

const HeaderDecorationBottomAccent = styled('div', {
  base: {
    height: '8px',
    display: 'flex',
    flexDirection: 'row',
  },
})

const HeaderDecorationBottomLeftAccent = styled('div', {
  base: {
    height: 0,
    width: '25vw',
    minWidth: '128px',
  },
})

const HeaderDecorationBottomCenterAccent = styled('div', {
  base: {
    height: 0,
    width: 0,
    borderTop: '4px solid token(colors.uspLightCyan)',
    borderRight: '4px solid token(colors.uspLightCyan)',
    borderLeft: '4px solid transparent',
    borderBottom: '4px solid transparent',
  },
})

const HeaderDecorationBottomRightAccent = styled('div', {
  base: {
    height: '8px',
    width: '100%',
    background: 'uspLightCyan',
  },
})
