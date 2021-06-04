class AuthLogin {
    get email() {
        return cy.get('input[id="email"]')
    }

    get password() {
        return cy.get('input[id="userPassword"]')
    }

    get loginButton() {
        return cy.get('button[type="submit"]')
    }


    login(email, password) {
        this.email.type(email)
        this.password.type(password)
        cy.wait(1000)
        this.loginButton.click()
        cy.wait(1000)
    }
}

export const authLogin = new AuthLogin()