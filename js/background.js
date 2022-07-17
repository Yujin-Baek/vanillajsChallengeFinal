const images = ["1.png", "3.png", "4.png", "5.png", "8.png", "9.png", "10.png", "11.png", "13.png", "14.png", "17.png", "19.png"];
const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.setAttribute("style", "width:100vw; height:100vh");

document.body.appendChild(bgImage);