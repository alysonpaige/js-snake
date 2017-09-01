var drawSnake = function(snakeToDraw) {
  var drawableSnake = { color: "green", pixels: snake };
  var drawableObjects = [drawableSnake];
  CHUNK.draw(drawableObjects);
};

var moveSnake = function(snake) {
  var newSnake = [];
  snake.forEach(function(oldSegment) {
    var newSegment = moveSegment(oldSegment);
    newSegment.direction = oldSegment.direction;
    newSnake.push(newSegment);
  });
  return newSnake;
};

var advanceGame = function() {
  snake = moveSnake(snake);
  if (CHUNK.detectCollisionBetween(snake, CHUNK.gameBoundaries())) {
    CHUNK.endGame();
    CHUNK.flashMessage("Whoops! You hit a wall!");
  }
  drawSnake(snake);
};

// change to switch statement
var moveSegment = function(segment) {
  switch(segment.direction) {
    case "down":
      return { top: segment.top + 1, left: segment.left };
    case "up":
      return { top: segment.top - 1, left: segment.left };
    case "right":
      return { top: segment.top, left: segment.left + 1 }
    case "left":
      return { top: segment.top, left: segment.left - 1 }
    default:
      return segment;
  };
};

var changeDirection = function(direction) {
  snake[0].direction = direction;
};

var snake = [{ top: 1, left: 0, direction: "down" }, { top: 0, left: 0, direction: "down" }];
// drawSnake(snake);
CHUNK.executeNTimesPerSecond(advanceGame, 2);
CHUNK.onArrowKey(changeDirection);
