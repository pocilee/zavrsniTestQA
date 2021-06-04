class AuthAddGradeBook {

    get addGradeBookBtn () {
        return cy.get ('a[href="/gradebook/create"]')
    }

    get inputGradebookName () {
        return cy.get ('#name')
    }

    get selectProfessor () {
        return cy.get ('.custom-select.mb-4')
    }

    get submitBtn () {
        return cy.get ('.btn-submit')
    }

    clickAddGradeBook() {
        this.addGradeBookBtn.click()
    }

    clickinputGradebookName() {
        this.inputGradebookName.click()
    }

    clickSelectProfessor() {
        this.selectProfessor.click()
    }

  
    addGradebook(gardebookName, profName) {
        this.addGradeBookBtn.click()
        cy.wait(2000)
        this.inputGradebookName.type(gardebookName)
        this.selectProfessor.select(profName)
        this.submitBtn.click()
    }
    
}

export const authAddGradeBook = new AuthAddGradeBook