/* key codes 

37 - left

38 - up

39 - right

40 - down 

*/
const squareElement = document.querySelector(".square");
const squareStyles = window.getComputedStyle(squareElement);

function getSquareColumn() {
  const gridColumnStart = parseInt(
    squareStyles.getPropertyValue("grid-column-start")
  );
  return gridColumnStart;
}

function getSquareRow() {
  const gridRowStart = parseInt(
    squareStyles.getPropertyValue("grid-row-start")
  );
  return gridRowStart;
}

function moveRight() {
  let prev = getSquareColumn();

  if (prev < 10) {
    squareElement.style.gridColumn = `${prev + 1}`;
  }
}

function moveLeft() {
  let prev = getSquareColumn();

  if (prev > 1) {
    squareElement.style.gridColumn = `${prev - 1}`;
  }
}

function moveDown() {
  let prev = getSquareRow();
  console.log(prev);
  squareElement.style.gridRow = `${prev + 1}`;
  return prev;
}

let interval = setInterval(() => {
  let posY = moveDown();
  if (posY >= 14) return clearInterval(interval);
}, 1000);

document.addEventListener("keydown", function (event) {
  let code = event.keyCode;
  switch (code) {
    case 37:
      moveLeft();
      break;
    case 39:
      moveRight();
      break;
    default:
      break;
  }
});
