import { styled } from '@panda/jsx'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterAbout>
          <NameContainer>
            <NameAcronym>CEFER</NameAcronym>
            <NameFull>Centro de Educação Física, Esporte e Recreação</NameFull>
          </NameContainer>
          <AddressContainer>
            <p>
              <strong>E-mail: </strong>
              contato@cefer.usp.br
            </p>
            <p>
              <strong>Telefone: </strong>
              (16) 3373-9107
            </p>
            <p>
              <strong>Endereço: </strong>
              Av. Trabalhador São-Carlense, 400 - Caixa Postal 440 - CEP 13566-590 - São
              Carlos-SP
            </p>
          </AddressContainer>
        </FooterAbout>
      </FooterContent>
      <FooterCredits>
        Desenvolvido por Adalton Sena, Bernardo Tameirão, Eduardo Rocha, João Pinho e Lelis.
        <br />
        SSC0130 - Engenharia de Software 1/2023
        <br />
        ICMC - USP São Carlos
      </FooterCredits>
    </FooterContainer>
  )
}

const FooterContainer = styled('footer', {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    minHeight: '200px',

    background: '#1e1e1e',
    color: 'white',
  },
})

const FooterContent = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',

    maxWidth: 'container',
    width: '100%',
    mx: 'auto',

    p: '16px',
  },
})

const FooterAbout = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',

    justifyContent: 'space-between',

    height: '100%',
    flexBasis: '100%',

    md: {
      flexBasis: '33.4%',
    },
  },
})

const NameContainer = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'column',

    mb: '16px',
  },
})

const NameAcronym = styled('h4', {
  base: {
    color: 'uspLightCyan',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
})

const NameFull = styled('h5', {
  base: {
    fontSize: '1rem',
  },
})

const AddressContainer = styled('address', {
  base: {
    display: 'flex',
    flexDirection: 'column',

    fontSize: '.8rem',

    '& strong': {
      fontWeight: 'bold',
    },

    '& p': {
      mt: '8px',
    },
  },
})

const FooterCredits = styled('p', {
  base: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '800px',

    textAlign: 'center',
    fontSize: '.8rem',

    px: '16px',

    mb: '16px',
  },
})
