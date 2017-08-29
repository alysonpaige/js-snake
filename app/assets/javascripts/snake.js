var drawSnake = function(snakeToDraw) {
  var drawableSnake = { color: "green", pixels: snake };
  var drawableObjects = [drawableSnake];
  CHUNK.draw(drawableObjects);
};

var moveSnake = function(snake) {
  var oldSegment = snake[0];
  var newSegment = { top: oldSegment.top + 1, left: oldSegment.left };
  var newSnake = [newSegment];
  return newSnake;
};

var advanceGame = function() {
  snake = moveSnake(snake);
  drawSnake(snake);
};

var snake = [{ top: 0, left: 0}];
// drawSnake(snake);
CHUNK.executeNTimesPerSecond(advanceGame, 2);
