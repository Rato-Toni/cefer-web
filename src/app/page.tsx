import { FaBuildingColumns, FaCircleInfo, FaIdCard } from 'react-icons/fa6'

import { Carousel } from '@/components/Carousel'
import { styled } from '@panda/jsx'

export default function Home() {
  return (
    <Container>
      <CarouselRow>
        <CarouselWrapper>
          <Carousel
            elements={[
              {
                image:
                  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images.rtp.pt%2Ficm%2Fnoticias%2Fimages%2F81%2F8120188e36f06aadeeceec544db52d85%3F860%26rect%3D0%2C47%2C1335%2C732&f=1&nofb=1&ipt=5de8e01df0f0edf804a9d462b2a7eb635e6695bdd7b8b41b1f7adea6f9c89b68&ipo=images',
                title: 'CEFER',
                description: 'Centro de Educação Física, Esportes e Recreação',
              },
              {
                image:
                  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fs2.glbimg.com%2F6bvJlkS8c7nin8aPe7p9eMXbdpQ%3D%2Fe.glbimg.com%2Fog%2Fed%2Ff%2Foriginal%2F2014%2F07%2F11%2F177398308.jpg&f=1&nofb=1&ipt=ea569e424ef3e2f50f6301402b9ad93ba0274066b2127ad036aa4871c745e135&ipo=images',
                title: 'CEFER 2',
                description: 'Centro de Educação Física, Esportes e Recreação 2',
              },
            ]}
          />
        </CarouselWrapper>
      </CarouselRow>
      <AboutSection>
        <AboutTitle>Sobre</AboutTitle>
        <AboutContent>
          <AboutText>
            <p>
              A história do CEFER, Centro de Educação Física, Esportes e Recreação da USP São
              Carlos, inicia-se por volta da década de 70. Neste período, a atividade esportiva
              era considerada matéria obrigatória dentro da grade curricular dos cursos de
              Graduação, ministrada por professores de Educação Física do Centro de Atividade
              Esportiva (CAE - antiga nomenclatura), além de oferecida como atividade
              extracurricular.
            </p>
            <p>
              Com o passar dos anos e o estabelecimento de novas leis, as aulas tidas como
              obrigatórias passaram a ser consideradas optativas, até chegarem à completa
              extinção. A partir daí, o CAE passa a contar com nova localidade, mais
              profissionais e recebe uma outra denominação: CEFER, Centro de Educação Física,
              Esportes e Recreação.
            </p>
            <p>
              Hoje, com uma infraestrutura grande no Campus da USP São Carlos, onde alunos,
              funcionários e dependentes podem usufruir atividades esportivas, recreativas e
              lazer, o CEFER conta com cinco quadras, duas piscinas, academia de musculação,
              campo de futebol, quiosque, um Ginásio de Esportes com quadra poliesportiva e
              capacidade para 1300 pessoas e um Salão de Eventos, com 1405 m2.
            </p>
          </AboutText>
          <AboutImageContainer>
            <AboutImage
              src="http://www.opalasp.com.br/waUpload/opala-ss-amar-200101072014165737.jpg"
              alt="Imagem decorativa"
            />
          </AboutImageContainer>
        </AboutContent>
      </AboutSection>
      <RulesSection>
        <RulesTitle>Regras</RulesTitle>
        <RulesLayout>
          <RuleBlock>
            <RuleIconWrapper>
              <FaBuildingColumns size={256} />
            </RuleIconWrapper>

            <p>Fazer parte da comunidade USP: alunos, funcionários e dependentes.</p>
          </RuleBlock>
          <RuleBlock>
            <RuleIconWrapper>
              <FaIdCard size={256} />
            </RuleIconWrapper>
            <p>Identificar-se na portaria com o cartão USP.</p>
          </RuleBlock>
          <RuleBlock>
            <RuleIconWrapper>
              <FaCircleInfo size={256} />
            </RuleIconWrapper>
            <p>
              Seguir as <em>regras de uso das quadras.</em>
            </p>
          </RuleBlock>
        </RulesLayout>
      </RulesSection>
      <NewsSection>
        <NewsTitle>Notícias</NewsTitle>
        <NewsShelf>
          <NewsCard>
            <NewsImageWrapper>
              <img
                src="https://www.silvanatoazza.com.br/cms/assets/uploads/files/3a721-1o-terno.jpg"
                alt="O terno"
              />
            </NewsImageWrapper>
            <h3>O terno :)</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum
              voluptates. Quisquam, voluptatum voluptates. Quisquam, voluptatum voluptates.
            </p>
          </NewsCard>
          <NewsCard>
            <NewsImageWrapper>
              <img
                src="https://www.silvanatoazza.com.br/cms/assets/uploads/files/3a721-1o-terno.jpg"
                alt="O terno"
              />
            </NewsImageWrapper>
            <h3>O terno :)</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum
              voluptates. Quisquam, voluptatum voluptates. Quisquam, voluptatum voluptates.
            </p>
          </NewsCard>
          <NewsCard>
            <NewsImageWrapper>
              <img
                src="https://www.silvanatoazza.com.br/cms/assets/uploads/files/3a721-1o-terno.jpg"
                alt="O terno"
              />
            </NewsImageWrapper>
            <h3>O terno :)</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum
              voluptates. Quisquam, voluptatum voluptates. Quisquam, voluptatum voluptates.
            </p>
          </NewsCard>
        </NewsShelf>
        <NewsCtaButton>Ver mais</NewsCtaButton>
      </NewsSection>
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
  },
})

const NewsSection = styled('section', {
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

const NewsTitle = styled('h2', {
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

const NewsShelf = styled('div', {
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
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
})

const NewsCard = styled('article', {
  base: {
    display: 'flex',
    flexDirection: 'column',

    cursor: 'pointer',

    '& h3': {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      textOverflow: 'ellipsis',
      lineClamp: 1,
    },

    '& p': {
      fontSize: '.75rem',
      textOverflow: 'ellipsis',
      textAlign: 'justify',
      lineClamp: 3,
    },
  },
})

const NewsImageWrapper = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    maxWidth: '100%',

    maxHeight: '400px',

    mb: '16px',

    '& img': {
      width: '100%',
    },
  },
})

const NewsCtaButton = styled('button', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',

    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'underline',

    cursor: 'pointer',

    p: '8px',
  },
})
