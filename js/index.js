document.addEventListener("DOMContentLoaded", ready);
function ready() {
  let element = document.getElementById("input-field");
  element.style.width = getWidthWindow();
  window.addEventListener("resize", function () {
    element.style.width = getWidthWindow();
  });
}
function getWidthWindow() {
  let newWidth = document.documentElement.clientWidth;
  let result = 900 - 330 + "px";
  if (newWidth < 900) {
    result = newWidth + "px";
    if (newWidth < 575) {
      result = newWidth * 0.8 - 17 + "px";
    }
  }
  return result;
}
