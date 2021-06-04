/// <reference types="Cypress" />

import { authLogin } from '../pageObjects/login.page.js'
import { authAddProfessor } from '../pageObjects/addProfessor.js'
import { authAddGradeBook } from '../pageObjects/addGradeBook.js'

const data = require("./../fixtures/data.json")
const faker = require('faker')
var randomFirstName = faker.name.firstName()
var randomLastName = faker.name.lastName()
  

describe('final test', () => {

    beforeEach(() => {
        cy.restoreLocalStorage();
      });
    
    it('login with valid credentials', () => {
        cy.visit('/login')

        cy.intercept('POST', 'https://gradebook-api.vivifyideas.com/api/login', (req) => {
        }).as('validLogin')

        authLogin.login(data.gradebookData.email, data.gradebookData.password)

        cy.wait('@validLogin').then((intercept) => {
            cy.log(JSON.stringify(intercept.response.statusCode))
            expect(intercept.response.statusCode).to.eql(200)
        })

    })

    it('add professor', () => {

        cy.intercept('POST', 'https://gradebook-api.vivifyideas.com/api/professors/create', (req) => {
        }).as('validAddProf')

        authAddProfessor.clickAddProfessor()
        cy.wait(1000)
        authAddProfessor.addProf(randomFirstName, randomLastName, data.gradebookData.imageUrl)
        cy.wait(2000)

        cy.wait('@validAddProf').then((intercept) => {
            cy.log(JSON.stringify(intercept.response.statusCode))
            expect(intercept.response.statusCode).to.eql(200)
        })
    })

    it('add gradebook', () => {

        cy.intercept('POST', 'https://gradebook-api.vivifyideas.com/api/gradebooks/store', (req) => {
        }).as('validAddGradebook')

        cy.wait(2000)
        authAddGradeBook.addGradebook(faker.random.word(), randomFirstName + ' ' + randomLastName)

        cy.wait('@validAddGradebook').then((intercept) => {
            cy.log(JSON.stringify(intercept.response.statusCode))
            expect(intercept.response.statusCode).to.eql(201)
        })

    })

    afterEach(() => {
        cy.saveLocalStorage();

    });
})