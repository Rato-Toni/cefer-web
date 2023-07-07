import { useMemo } from 'react'

import { styled } from '@panda/jsx'

export interface HomeAboutProps {
  title: string
  content: string
  imageUrl?: string
  imageAlt?: string
}

export function HomeAbout({ title, content, imageUrl, imageAlt }: HomeAboutProps) {
  const blocks = useMemo(() => content.split('\n\n'), [content])

  return (
    <AboutSection>
      <AboutTitle>{title}</AboutTitle>
      <AboutContent>
        <AboutText>
          {blocks.map((block, index) => (
            <p key={index.toString()}>{block}</p>
          ))}
        </AboutText>
        <AboutImageContainer>
          {imageUrl && <AboutImage src={imageUrl} alt={imageAlt} />}
        </AboutImageContainer>
      </AboutContent>
    </AboutSection>
  )
}

////////////
// Styles //
////////////

const AboutSection = styled('section', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',

    maxWidth: 'container',

    mx: 'auto',
    px: '12px',
    py: '16px',
  },
})

const AboutTitle = styled('h2', {
  base: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',

    md: {
      fontSize: '2rem',
      textAlign: 'left',
    },
  },
})

const AboutContent = styled('article', {
  base: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',

    flex: 1,
    flexGrow: 1,
    flexWrap: 'wrap',
  },
})

const AboutText = styled('div', {
  base: {
    flexBasis: '100%',
    flexGrow: 1,

    px: '16px',
    textIndent: '2.5rem',
    textAlign: 'justify',

    md: {
      px: 0,
      textIndent: '2.5rem',

      flexBasis: '66.6%',
      pr: '16px',
    },

    '& p': {
      mb: '8px',
    },
  },
})

const AboutImageContainer = styled('div', {
  base: {
    flexBasis: '100%',
    mt: '16px',

    md: {
      flexBasis: '33.4%',
      mt: 0,
    },
  },
})

const AboutImage = styled('img', {
  base: {
    display: 'block',
    width: '100%',
  },
})
