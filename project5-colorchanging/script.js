const randomColor = function () {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(randomColor());
let randColor
function startColorChanging() {
  if(!randColor){
    randColor = setInterval(changing, 100);
  }

  function changing() {
    document.body.style.backgroundColor = randomColor();
  }
}

function stopColorChanging() {
  clearInterval(randColor);
  randColor = null
}

document.getElementById("start").addEventListener("click", startColorChanging);

document.getElementById("stop").addEventListener("click", stopColorChanging);
