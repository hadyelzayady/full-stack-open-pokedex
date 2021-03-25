/* eslint-disable no-undef */
let url='http://localhost:8080'
describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit(url)
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
  it('pokemon page can be opened', function () {
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})
