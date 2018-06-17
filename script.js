document.addEventListener("DOMContentLoaded", init);

function init(){
    var greenBox = document.querySelector("#greenBox");
    var balloon = document.querySelector("#balloon");
    var balloonAnimation = document.querySelector("#balloonAnimation");
    var upHouse = document.querySelector("#upHouse");
    //var bString = document.querySelector("#bString");

    greenBox.addEventListener("click", makeBalloon);

    var balloonCounter = 0;

    function makeBalloon(){
      balloonCounter += 1;
      var balloonClone = balloon.cloneNode(true);
      var animationClone = balloonAnimation.cloneNode(true);
      //var bStringClone = bString.cloneNode(true);

      balloonClone.setAttribute("visible", `true`);
      balloonClone.setAttribute("id", "balloon" + balloonCounter.toString());
      animationClone.setAttribute("id", "balloonAnimation" + balloonCounter.toString());

      var houseX = upHouse.getAttribute("position").x;
      var houseY = upHouse.getAttribute("position").y;
      var houseZ = upHouse.getAttribute("position").z;

      var cloneX = randBetween(5);
      var cloneY = randBetween(2) + 10;
      var cloneZ = randBetween(5);
      var cloneColor = getRandomColor();

      balloonClone.setAttribute("position", `${cloneX} ${cloneY} ${cloneZ}`);
      animationClone.setAttribute("to", `${cloneX} ${cloneY + 0.5} ${cloneZ}`);
      balloonClone.setAttribute("color", cloneColor);

      balloonClone.children[0].setAttribute("line", `start: 0 0 0; end: ${-cloneX} ${-cloneY +2.5} ${-cloneZ}; color: red`);

      console.log(balloonClone.children[0]);
      upHouse.appendChild(balloonClone);
      balloonClone.appendChild(animationClone);


      if(balloonCounter === 25){
        upHouse.emit("houseRise");
      }

    }

    function randBetween(amountBothWaysFromMidpoint) {
      var double = amountBothWaysFromMidpoint * 2;
      return (Math.floor(Math.random() * double) - amountBothWaysFromMidpoint);
    }

    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }


}
