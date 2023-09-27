/// <reference types="cypress" />

describe('Teste para a pagina inicial da lista de contatos', () => {
  beforeEach(() => {
    cy.visit('https://seus-contatos.vercel.app')
  })
  
  it('Deve renderizar todos os componentes', () => {
    cy.get('.sc-ewnqHT').should('have.text', '0 contato marcado como: "Todos" ')
    cy.get('.sc-gxYJeL').should('exist')
    cy.get('.sc-fFGjHI').should('exist')
    cy.get('.sc-kuWgmH').within(() => {
      cy.get('.sc-kPTPQs').should('have.length', 27)
    })
  })

  it('Deve clicar no botao e ir para a pagina de cadastro de contato', () => {
    cy.get('.sc-gxYJeL').click()
  })

  it('Deve ir e renderizar os componenetes do formulario de cadastro', () => {
    cy.get('.sc-gxYJeL').click()
    
    //Botao de voltar para contatos
    cy.get('.sc-dicizt').eq(0).should('have.text', 'Voltar para Contatos')

    //Texto com "Novo Contato e imagem para representar contato"
    cy.get('.sc-ewnqHT').should('have.text', 'Novo Contato')
    cy.get('.sc-hjLWnZ').should('exist')
    
    //Imagem de perfil e input de Nome
    cy.get('.sc-fWFeAW').eq(0).should('exist')
    cy.get('.sc-fFGjHI').eq(0).should('exist')

    //Imagem de email e input de Email
    cy.get('.sc-fWFeAW').eq(1).should('exist')
    cy.get('.sc-fFGjHI').eq(1).should('exist')

    //Imagem de telefono e inpute de Contato/Telefone
    cy.get('.sc-fWFeAW').eq(2).should('exist')
    cy.get('.sc-fFGjHI').eq(2).should('exist')

    //Botao de Cadastrasr
    cy.get('.sc-dicizt').eq(1).should('have.text', 'Cadastrar')
  })
})