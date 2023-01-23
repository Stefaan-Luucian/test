const logo = document.getElementById("logo");

logo.addEventListener("click", function () {
  open("gamesPage.html", "_self");
});

const audio = new Audio("looneycartooney.wav");
audio.play();
audio.loop = true;
