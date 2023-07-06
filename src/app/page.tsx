import { styled } from '@panda/jsx'

export default function Home() {
  return (
    <Container>
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
            <AboutImage src="/demo.jpg" alt="Imagem decorativa" />
          </AboutImageContainer>
        </AboutContent>
      </AboutSection>
      <RulesSection>
        <RulesLayout>
          <RuleBlock>
            <h1>Oie</h1>
          </RuleBlock>
          <RuleBlock>
            <h1>Oie</h1>
          </RuleBlock>
          <RuleBlock>
            <h1>Oie</h1>
          </RuleBlock>
          <RuleBlock>
            <h1>Oie</h1>
          </RuleBlock>
        </RulesLayout>
      </RulesSection>
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
    fontSize: '2rem',
    fontWeight: 'bold',
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
    textAlign: 'justify',
    flexBasis: '100%',
    flexGrow: 1,

    textIndent: '4rem',

    md: {
      flexBasis: '66.6%',
      pr: '16px',
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
    background: 'uspDarkCyan',
    width: '100%',
    minHeight: '200px',
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
    py: '16px',

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

    background: 'white',
  },
})
