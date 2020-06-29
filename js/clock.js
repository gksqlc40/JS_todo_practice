const clockContianer = document.querySelector(".clock"),
  clockTitle = clockContianer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const secondes = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${horus}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${secondes < 10 ? `0${secondes}` : secondes}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
