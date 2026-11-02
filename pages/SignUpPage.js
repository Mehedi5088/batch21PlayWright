// @ts-check
class SignUpPage {
  constructor(page) {
    this.page = page;
    this.pageUrl = 'https://demowebshop.tricentis.com/';
    this.registerLink = page.locator('a[href="/register"]');
    this.genderRadioButton = page.locator('#gender-male');
    this.firstNameInput = page.locator('#FirstName');
    this.lastNameInput = page.locator('#LastName');
    this.emailInput = page.getByLabel('Email:');
    this.passwordInput = page.locator('#Password');
    this.confirmPasswordInput = page.locator('#ConfirmPassword');
    this.registerButton = page.locator('#register-button');
  }

  async pageOpen() {
      await this.page.goto(this.pageUrl, {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });
    // await this.page.goto("https://demowebshop.tricentis.com/");
  }

  async clickRegisterLink() {
    await this.registerLink.click();
  }

  async clickGenderRadioButton() {
    await this.genderRadioButton.click();
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
    await this.registerButton.click();
  }

}

export { SignUpPage };
