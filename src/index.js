import "./styles.css";

var ball = document.getElementById("ball");

ball.style.top = ball.offsetTop + "px";
ball.style.left = ball.offsetLeft + "px";

var ballHeight = ball.offsetHeight;
var ballWidth = ball.offsetWidth;

function setValue(value) {
  return value + "px";
}

function key(keyPress) {
  var top = parseInt(ball.style.top);
  var left = parseInt(ball.style.left);

  // W is pressed
  if (keyPress === "w" || keyPress === "W") {
    if (top > 4) {
      ball.style.top = setValue(top - 5);
    }
  }

  // A is pfressed
  else if (keyPress === "a" || keyPress === "A") {
    if (left > 4) {
      ball.style.left = setValue(left - 5);
    }
  }

  // S is pressed
  else if (keyPress === "s" || keyPress === "S") {
    if (top < window.innerHeight - ballHeight - 2) {
      ball.style.top = setValue(top + 5);
    }
  }

  // D is pressed
  else if (keyPress === "d" || keyPress === "D") {
    if (left < window.innerWidth - ballWidth - 2) {
      ball.style.left = setValue(left + 5);
    }
  }
}

document.addEventListener("keydown", function (event) {
  key(event.key);
});

// container.style.position = "relative";
// ball.style = "position:absolute; left:0; top:0;"

// document.addEventListener("keydown", function (event) {
//   if (keydown === 119 || keydown === 87) {
//     if (top > 5) {
//       ball.style.top = setValue(top - 5);
//     }
//   }
// if (event.key === "w" && ballCoordinates.top > containerCoordinates.top) {
//   if (ballCoordinates.top <= containerCoordinates.top) {
//     count = 0;
//     ball.style.top = count + "px";
//     return;
//   }
//   count -= 2;
//   ball.style.top = count + "px";
// }
// if (event.key === "s") {
//   count += 2;
//   ball.style.top = count + "px";
// }
// switch (event.key) {
//   case "w":
//     ball.style.top = parseInt(ball.style.top) - count + "px";
//     break;

//   case "s":
//     ball.style.top = parseInt(ball.style.top) + count + "px";
//     break;

//   case "a":
//     ball.style.left = parseInt(ball.style.left) - count + "px";
//     break;

//   case "d":
//     ball.style.left = parseInt(ball.style.left) + count + "px";
//     break;

//   default:
//     break;
// }
// });
