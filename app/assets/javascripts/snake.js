var drawSnake = function(snakeToDraw) {
  var drawableSnake = { color: "green", pixels: snake };
  var drawableObjects = [drawableSnake];
  CHUNK.draw(drawableObjects);
};

var moveSnake = function(snake) {
  var oldSegment = snake[0];
  var newSegment = moveSegment(oldSegment);
  newSegment.direction = oldSegment.direction;
  var newSnake = [newSegment];
  return newSnake;
};

var advanceGame = function() {
  snake = moveSnake(snake);
  drawSnake(snake);
};

// change to switch statement
var moveSegment = function(segment) {
  if (segment.direction === "down") {
    return { top: segment.top + 1, left: segment.left }
  } else if (segment.direction === "up") {
    return { top: segment.top - 1, left: segment.left }
  } else if (segment.direction === "right" ) {
    return { top: segment.top, left: segment.left + 1 }
  } else if (segment.direction === "left" ) {
    return { top: segment.top, left: segment.left - 1 }
  }
  return segment;
};

var snake = [{ top: 0, left: 0, direction: "down" }];
// drawSnake(snake);
CHUNK.executeNTimesPerSecond(advanceGame, 2);
