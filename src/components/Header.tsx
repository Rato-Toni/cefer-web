'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'

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
  const [navOpen, setNavOpen] = useState<boolean>(false)

  const toggleNav = useCallback(() => setNavOpen((state) => !state), [setNavOpen])

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
          <HeaderSideNavToggle>
            <IoMenu size={32} color="white" onClick={toggleNav} />
          </HeaderSideNavToggle>
        </HeaderNavigation>
        <HeaderSideNavContainer data-show={navOpen ? 'true' : 'false'}>
          <HeaderSideNavButtonRow>
            <HeaderSideNavCloseButton>
              <IoClose size={32} color="black" onClick={toggleNav} />
            </HeaderSideNavCloseButton>
          </HeaderSideNavButtonRow>
          <HeaderSideNavList>
            {navItems.map(({ label, href, enabled }) => (
              <HeaderSideNavListItem key={label} data-active={href === pathname}>
                <Link href={enabled ? href : '#'}>
                  <span>{label}</span>
                </Link>
              </HeaderSideNavListItem>
            ))}
          </HeaderSideNavList>
        </HeaderSideNavContainer>
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
    display: 'none',
    flexDirection: 'row',
    listStyle: 'none',
    alignItems: 'center',

    md: {
      display: 'flex',
    },
  },
})

const HeaderSideNavToggle = styled('button', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',

    transition: 'all 0.1s ease-in-out',

    '&:hover': {
      opacity: 0.9,
    },

    '&:active': {
      opacity: 0.8,
    },

    md: {
      display: 'none',
    },
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

const HeaderSideNavContainer = styled('div', {
  base: {
    position: 'fixed',
    top: '0',
    left: '-100vw',
    width: '100vw',
    height: '100vh',
    zIndex: '1000',
    overflowY: 'auto',

    background: '#fefefe',
    color: 'black',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    transition: 'all 0.2s ease-in-out',

    '&[data-show="true"]': {
      left: '0',
    },

    md: {
      display: 'none',
    },
  },
})

const HeaderSideNavButtonRow = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'row-reverse',
    padding: '24px',
    width: '100%',

    mb: '24px',
  },
})

const HeaderSideNavList = styled('ul', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    listStyle: 'none',
    padding: '0',
    margin: '0',
    width: '100%',
  },
})

const HeaderSideNavListItem = styled('li', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    minHeight: '48px',
    width: '100%',
    padding: '24px',

    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    userSelect: 'none',

    transition: 'all 0.1s ease-in-out',

    '&:hover': {
      background: 'rgba(0, 0, 0, 0.05)',
    },

    '&:active': {
      background: 'rgba(0, 0, 0, 0.1)',
    },

    '& span': {
      py: '1px',
    },

    '&[data-active="true"] span': {
      borderBottom: 'black 2px solid',
    },
  },
})

const HeaderSideNavCloseButton = styled('button', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',

    transition: 'all 0.1s ease-in-out',

    '&:hover': {
      opacity: 0.9,
    },

    '&:active': {
      opacity: 0.8,
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
