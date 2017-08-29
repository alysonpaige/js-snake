var drawSnake = function(snakeToDraw) {
  var snake = [{ top: 0, left: 0}];
  var drawableSnake = { color: "green", pixels: snake };
  var drawableObjects = [drawableSnake];
  CHUNK.draw(drawableObjects);
};

  var snake = [{ top: 0, left: 0}];
  drawSnake(snake);