class AddProfessor {

    get addProfessor () {
        return cy.get ("a[href='/professors/create']")
    }

    get enterFirstName () {
        return cy.get ('input[id="input-default"]')
    }

    get enterLastName () {
        return cy.get ('input[id="input-default1"]')
    }

    get selectItemField () {
        return cy.get ('select[class="mb-4 custom-select"]')
    }

    get selectItem () {
        return cy.get ('option[value="141"]')
    }

    get addImage () {
        return cy.get ('.proba > .btn.btn-image.btn-primary')
    }

    get addImageInput () {
        return cy.get ('.form-group > div[role="group"]  .form-control')
    }

    get submitBtn () {
        return cy.get ('button[class="btn btn-secondary"]')
    }


    clickAddProfessor() {
        this.addProfessor.click()
    }

    clickselectItemField() {
        this.selectItemField.click()
    }

    clickselectItem() {
        this.selectItem.click()
    }

    addProf(firstName, lastName, imageUrl) {
        
        this.enterFirstName.type(firstName)
        this.enterLastName.type(lastName)
        this.addImage.click()
        this.addImageInput.type(imageUrl)
        this.submitBtn.click()

        
    }
    
}

export const authAddProfessor = new AddProfessor