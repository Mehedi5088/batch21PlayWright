import { Base } from './Base.js';

class SignUpPage extends Base {
  constructor(page) {
    super(page);

    this.registerLink = page.locator('a[href="/register"]');
    this.genderRadioButton = page.locator('#gender-male');
    this.firstNameInput = page.locator('#FirstName');
    this.lastNameInput = page.locator('#LastName');
    this.emailInput = page.getByLabel('Email:');
    this.passwordInput = page.locator('#Password');
    this.confirmPasswordInput = page.locator('#ConfirmPassword');
    this.registerButton = page.locator('#register-button');
    this.varifyLogin = page.locator('a[href="/logout"]');
  }

  async clickRegisterLink() {
    await this.clickElement(this.registerLink);
  }

  async clickGenderRadioButton() {
    await this.clickElement(this.genderRadioButton);
  }

  async enterFirstName(firstName) {
    await this.firstNameInput.fill(firstName);
  }
  async enterLastName(lastName) {  
    await this.lastNameInput.fill(lastName);
  } 
  async enterEmail(email) {
    await this.emailInput.fill(email);
  }
  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }
  async enterConfirmPassword(confirmPassword) {
    await this.confirmPasswordInput.fill(confirmPassword);
  }

  async clickRegisterButton() {
    await this.clickElement(this.registerButton);
  }

}

export { SignUpPage };
