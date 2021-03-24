/* eslint-disable no-undef */
let url='http://localhost:5000'
describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit(url)
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
  it('pokemon page can be opened', function () {
    cy.visit(`${url}/pokemon/machoke`)
    cy.contains('defense')
  })
})
