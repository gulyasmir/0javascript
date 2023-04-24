class Storage {
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
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let j = 0; j < 10; j++) {
        randomStr += possible.charAt(
          Math.floor(Math.random() * possible.length)
        );
      }

      this.addString(randomStr);
    }

    setTimeout(() => {
      console.log("Initialization complete.");
    }, 1000);
  }
}
document.addEventListener("DOMContentLoaded", initData);

function initData() {
  const storage = new Storage();
  storage.init();
  let allString = storage.getAllStrings();
  let element = document.getElementById("data");
  element.innerHTML = makeHtml(allString);
  start();
}

function makeHtml(data) {
  html = `<ul>`;
  data.forEach((item, index) => {
    html += `<li><p id="id${index}">${index}. ${item}</p> </li>`;
  });
  html += `</ul>`;
  return html;
}
