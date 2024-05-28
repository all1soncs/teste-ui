// produtosPage.js

// Defina a função adicionarProdutoAoCarrinho
function adicionarProdutoAoCarrinho1(produto, tamanho, cor, quantidade) {
    cy.get('.post-2559 > .product-block > .caption > .meta > .infor > .name').click();
    cy.get(`.button-variable-item-${tamanho}`).should('be.visible').click();
    cy.get(`.button-variable-item-${cor}`).should('be.visible').click();
    cy.get('.input-text').clear().type(1); // Usar quantidade passada como argumento   
    cy.get('.single_add_to_cart_button').click();
}
function adicionarProdutoAoCarrinho2(produto, tamanho, cor, quantidade) {
    cy.get('.post-2622 > .product-block > .caption > .meta > .infor > .name').click();
    cy.get(`.button-variable-item-${tamanho}`).should('be.visible').click();
    cy.get(`.button-variable-item-${cor}`).should('be.visible').click();
    cy.get('.input-text').clear().type(1); // Usar quantidade passada como argumento   
    cy.get('.single_add_to_cart_button').click();
}
function adicionarProdutoAoCarrinho3(produto, tamanho, cor, quantidade) {
    cy.get(`.post-${2517} .infor .name a`).should('be.visible').click();
    cy.get(`.button-variable-item-${tamanho}`).should('be.visible').click();
    cy.get(`.button-variable-item-${cor}`).should('be.visible').click();
    cy.get('.input-text').clear().type(1); // Usar quantidade passada como argumento   
    cy.get('.single_add_to_cart_button').click();
}


// Exporte a função para que ela possa ser acessada em outros arquivos
module.exports = {
    adicionarProdutoAoCarrinho1,
    adicionarProdutoAoCarrinho2,
    adicionarProdutoAoCarrinho3
};
