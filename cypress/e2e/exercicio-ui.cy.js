/// <reference types="cypress" />
let dadosLogin;
const produtosPage = require('../support/page_objects/produtosPage');

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 3 produtos diferentes
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  before(() => {
    cy.fixture('perfil').then(perfil => {
      dadosLogin = perfil;
    });
  });

  beforeEach(() => {
    cy.visit('/minha-conta');
  });

  it('Deve fazer login', () => {
    // Login
    cy.login(dadosLogin.usuario, dadosLogin.senha);
    cy.get('.page-title').should('contain', 'Minha conta', { log: false });
  });

  it('Deve adicionar produtos ao carrinho', () => {
    cy.get('#primary-menu > .menu-item-629 > a').click();

    // Adicionar 3 produtos diferentes ao carrinho
    produtosPage.adicionarProdutoAoCarrinho1 ('2559', 'XS', 'Green', 1);
    cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho.');
    cy.get('.tbay-woocommerce-breadcrumb > :nth-child(5) > a').click(); // Clique para voltar à lista de produtos

    produtosPage.adicionarProdutoAoCarrinho2 ('2560', 'M', 'Blue', 1);
    cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho.');
    cy.get('.tbay-woocommerce-breadcrumb > :nth-child(5) > a').click(); // Clique para voltar à lista de produtos

    produtosPage.adicionarProdutoAoCarrinho3 ('2561', 'L', 'Gray', 1);
    cy.get('.woocommerce-message').should('contain', 'foi adicionado no seu carrinho.');
    
    // Verificar se os produtos foram adicionados corretamente
    cy.get('.dropdown-toggle > .text-skin > .icon-basket').click();
  });
});
