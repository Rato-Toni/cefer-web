import { styled } from '@panda/jsx'

export function HomeNews() {
  return (
    <NewsSection>
      <NewsTitle>Notícias</NewsTitle>
      <NewsShelf>
        <NewsCard>
          <NewsImageWrapper>
            <img
              src="https://media.discordapp.net/attachments/1114568907223732226/1126736943217123399/10-memes-de-gatos-que-viralizaram-nas-redes-sociais.jpg.webp?width=500&height=500"
              alt="O terno"
            />
          </NewsImageWrapper>
          <h3>Inscrições Abertas! Atividades de 2023</h3>
          <p>
            Estão abertas as inscrições das atividades esportivas que serão ofericidas pelo
            CEFER para a comunidade USP, durante o 2º semestre de
          </p>
        </NewsCard>
        <NewsCard>
          <NewsImageWrapper>
            <img
              src="https://media.discordapp.net/attachments/1114568907223732226/1126736336691404840/d947ef44bac8d640d0b46b9ec6531a2ba1d95045e36eab0e3295d79b4dc1561d_1.jpg?width=500&height=500"
              alt="O terno"
            />
          </NewsImageWrapper>
          <h3>Atualização sobre reforma da piscina</h3>
          <p>
            Atenção , usuários do CEFER! A reforma da piscina está com previsão de término para
            daqui a 15 dias úteis, começando hoje.
          </p>
        </NewsCard>
        <NewsCard>
          <NewsImageWrapper>
            <img
              src="https://media.discordapp.net/attachments/1114568907223732226/1126737394851393578/70cebbc340482b8d8fb51a5a99c70c5c.jpg?width=600&height=600"
              alt="O terno"
            />
          </NewsImageWrapper>
          <h3>Novo sistema de reservas do CEFER</h3>
          <p>
            Olá, comunidade USP! Informamos que a partir de hoje, o CEFER conta com uma novo
            sistema de reservas desenvolvido por alunos do ICMC
          </p>
        </NewsCard>
      </NewsShelf>
      <NewsCtaButton>Ver mais</NewsCtaButton>
    </NewsSection>
  )
}

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
