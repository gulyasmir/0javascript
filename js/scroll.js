function start() {
  let buttonFirst = document.getElementById("go-first");
  let buttonLast = document.getElementById("go-last");
  let buttonTo = document.getElementById("go-to");
  let buttonToStart = document.getElementById("go-start");

  buttonToStart.addEventListener("click", () => {
    scroll("go-first");
  });
  buttonFirst.addEventListener("click", () => {
    scroll("id0");
  });
  buttonLast.addEventListener("click", () => {
    let buttons = document.getElementsByTagName("li");
    let count = buttons.length - 1;
    let id = "id" + count;
    scroll(id);
  });
  buttonTo.addEventListener("click", () => {
    let input = document.getElementsByTagName("input");
    let value = input[0].value - 1;
    let id = "id" + value;
    scroll(id);
  });
}

function scroll(target) {
  const targetElement = document.getElementById(target);
  const currentPosition = window.pageYOffset;
  const targetPosition = targetElement.offsetTop;
  const distance = targetPosition - currentPosition;
  const speed = 0.001;
  let startTime = null;
  function scrollToTarget(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }
    const time = timestamp - startTime;
    const position = Math.floor(currentPosition + distance * speed * time);
    window.scrollTo(0, position);

    if (distance > 0 && position >= targetPosition) {
      return;
    }
    if (distance < 0 && position <= targetPosition) {
      return;
    }

    requestAnimationFrame(scrollToTarget);
  }

  requestAnimationFrame(scrollToTarget);
}
