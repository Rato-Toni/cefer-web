import { FaBuildingColumns, FaCircleInfo, FaIdCard } from 'react-icons/fa6'

import { styled } from '@panda/jsx'

export interface HomeRuleItem {
  icon: string
  title: string
}

export interface HomeRulesProps {
  title: string
  items?: HomeRuleItem[]
}

export function HomeRules({ title, items = [] }: HomeRulesProps) {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <RulesSection>
      <RulesTitle>{title}</RulesTitle>
      <RulesLayout>
        {items.map((item, index) => (
          <RuleBlock key={index.toString()}>
            <RuleIconWrapper>
              <img src={item.icon} alt={item.title} />
            </RuleIconWrapper>
            <p>{item.title}</p>
          </RuleBlock>
        ))}
      </RulesLayout>
    </RulesSection>
  )
}

const RulesSection = styled('section', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    background: 'uspDarkCyan',
    width: '100%',
    minHeight: '200px',
  },
})

const RulesTitle = styled('h2', {
  base: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',

    color: 'white',
    mb: '16px',

    md: {
      fontSize: '2rem',
      textAlign: 'left',
    },
  },
})

const RulesLayout = styled('div', {
  base: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridAutoFlow: 'row',
    gridGap: '16px',

    maxWidth: 'container',

    mx: 'auto',
    px: '12px',
    pb: '16px',

    md: {
      gridAutoFlow: 'column',
      gridAutoColumns: '1fr',
      gridTemplateRows: '1fr',
    },
  },
})

const RuleBlock = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    mb: '16px',

    md: {
      mb: 0,
    },

    '& p': {
      color: 'white',
      fontSize: '1rem',
      textAlign: 'center',
      maxWidth: '360px',

      px: '32px',
    },

    '& em': {
      fontStyle: 'italic',
    },
  },
})

const RuleIconWrapper = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    maxHeight: '100px',
    maxWidth: '100px',

    mb: '16px',

    '& svg': {
      fill: 'uspYellow',
      stroke: 'uspYellow',
    },

    '& img': {
      width: '100%',
    },
  },
})
