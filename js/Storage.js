export default class Storage {
  constructor() {
    this.strings = [];
  }

  addString(str) {
    this.strings.push(str);
  }

  getString(index) {
    return this.strings[index];
  }

  getAllStrings() {
    return this.strings;
  }

  getCount() {
    return this.strings.length;
  }

  init() {
    for (let i = 0; i < 500; i++) {
      let randomStr = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let j = 0; j < 10; j++) {
        randomStr += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      this.addString(randomStr);
    }

    setTimeout(() => {
      console.log("Initialization complete.");
    }, 1000);
  }
}