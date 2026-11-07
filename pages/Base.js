class Base {
    constructor(page) {
        this.page = page;
        this.pageUrl = 'https://demowebshop.tricentis.com/';
    }

  async pageOpen() {
      await this.page.goto(this.pageUrl, {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });
    // await this.page.goto("https://demowebshop.tricentis.com/");
  }

  async clickElement(data) {
    await data.click();
  }

}

export { Base };