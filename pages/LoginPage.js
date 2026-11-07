import { Base } from './Base.js';

class LoginPage extends Base {
  constructor(page) {
    super(page);

    this.loginLink = page.locator('a[href="/login"]');
    this.emailInput = page.getByLabel('Email:');
    this.passwordInput = page.locator('#Password');
    this.checkbox = page.locator('#RememberMe');
    this.LoginButton = page.getByRole('button', { name: 'Log in' });
    this.varifyLogin = page.locator('a[href="/logout"]');
  }

  async clickLoginLink() {
    await this.clickElement(this.loginLink);
  }

  async enterEmail(email) {
    await this.emailInput.fill(email);
  }
  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  async rememberMeCheckbox() {
    await this.clickElement(this.checkbox);
  }

  async clickLoginButton() {
    await this.clickElement(this.LoginButton);
  }

}

export { LoginPage };
