const body = document.querySelector("body");

const IMG_NUMBER = 15;

function handleImgLoad() {
  console.log("finished loading");
}

function paintImage(imgNumber) {
  const img = new Image();
  img.src = `img/img_${imgNumber + 1}.jpg`;
  img.classList.add("bgImage");
  body.prepend(img);
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();
