/// <reference types="cypress" />

function adicionandoContato() {
    //Imagem de perfil e input de Nome
    cy.get('.sc-fFGjHI').eq(0).type('Matheus Kayque')
    
    //Imagem de email e input de Email
    cy.get('.sc-fFGjHI').eq(1).type('exemplo@gmail.com')

    //Imagem de telefono e inpute de Contato/Telefone
    cy.get('.sc-fFGjHI').eq(2).type('11 40028922')

    //Botao de Cadastrasr
    cy.get('.sc-dicizt').eq(1).click()

    //Adicionando um novo contato

    cy.get('.sc-gxYJeL').click()
    
    //input de Nome
    cy.get('.sc-fFGjHI').eq(0).type('Fagner')

    //input de Email
    cy.get('.sc-fFGjHI').eq(1).type('exemplo2@gmail.com')

    //inpute de Contato/Telefone
    cy.get('.sc-fFGjHI').eq(2).type('11 40028992')

    //Botao de Cadastrasr
    cy.get('.sc-dicizt').eq(1).click()
}

describe('Teste para o form de cadastro de contato', () => {
    beforeEach(() => {
        cy.visit('https://seus-contatos.vercel.app')
    })

    it('Deve clicar no botao e ir para a pagina de cadastro de contato', () => {
        cy.get('.sc-gxYJeL').click()
    })

    it('Deve voltar a lista de contatos', () => {
        cy.get('.sc-gxYJeL').click()

        cy.get('.sc-dcrmVg > .sc-dicizt').click()
    })

    it('Deve preencher o campos de cadastro de contato', () => {
        cy.get('.sc-gxYJeL').click()
        
        adicionandoContato()
    })

    it('Deve testar o filtro por texto', () => {
        cy.get('.sc-gxYJeL').click()
        
        adicionandoContato()

        cy.get('.sc-fFGjHI').type('Math')
    })

    it('Deve testar o filtro pelas iniciais', () => {
        cy.get('.sc-gxYJeL').click()
        
        adicionandoContato()

        cy.get('.sc-kuWgmH > :nth-child(7)').click() //Filtra por 'F'
        cy.get('.sc-kuWgmH > :nth-child(14)').click() //Filtra por 'M'
    })

    it('Deve testar o botao de editar contato', () => {
        cy.get('.sc-gxYJeL').click()
        
        adicionandoContato()

        cy.get(':nth-child(1) > .sc-jJTsDX > .sc-gUMnWI > :nth-child(1)').click() //Editando o primeiro contato
        cy.get(':nth-child(2) > .sc-jJTsDX > .sc-gUMnWI > :nth-child(1)').click() //Editando o segundo contato
    })

    it('Deve testar o botao de editar contato', () => {
        cy.get('.sc-gxYJeL').click()
        
        adicionandoContato()

        cy.get(':nth-child(1) > .sc-jJTsDX > .sc-gUMnWI > :nth-child(1)').click() //Editando o primeiro contato
        cy.get(':nth-child(2) > .sc-jJTsDX > .sc-gUMnWI > :nth-child(1)').click() //Editando o segundo contato

        cy.get('.sc-eywOmQ').eq(0).clear().type('Matheus')
        cy.get('.sc-eywOmQ').eq(1).clear().type('exemplo5@gmail.com')
        cy.get('.sc-eywOmQ').eq(2).clear().type('1156678452')
    
        cy.get(':nth-child(1) > .sc-jJTsDX > .sc-gUMnWI > .sc-iVCKna').click() //Salva as alterações do primeiro contato
        cy.get(':nth-child(2) > .sc-jJTsDX > .sc-gUMnWI > .sc-hUOJWJ').click() //Cancela a edição do segundo contato
    })

    it('Deve remover o primeiro contato', () => {
        cy.get('.sc-gxYJeL').click()
        
        adicionandoContato()

        cy.get(':nth-child(1) > .sc-jJTsDX > .sc-gUMnWI > .sc-hUOJWJ').click() //Salva as alterações do primeiro contato
    })
})