var gameCanvas = document.getElementById('mycanvas');
var context = mycanvas.getContext('2d');
var canvasWidth = 900;
var canvasHeight = 900;
var score = 0;
var snake;
var snakeSize = 9;
var food;
var highScore = 0

var drawModule = (function () {

    var bodySnake = function (x, y) {
        context.fillStyle = 'green';
        context.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
        context.strokeStyle = 'darkgreen';
        context.strokeRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    }

    var pizza = function (x, y) {
        context.fillStyle = 'yellow';
        context.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
        context.fillStyle = 'red';
        context.fillRect(x * snakeSize + 1, y * snakeSize + 1, snakeSize - 2, snakeSize - 2);
    }

    var scoreText = function () {
        var score_text = "Score: " + score;
        context.fillStyle = 'blue';
        context.fillText(score_text, 845, canvasHeight - 5);
    }

    var drawSnake = function () {
        var length = 1;
        snake = [];
        for (var i = length - 1; i >= 0; i--) {
            snake.push({
                x: i,
                y: 0
            });
        }
    }

    var paint = function () {
        context.fillStyle = 'lightgrey';
        context.fillRect(0, 0, canvasWidth, canvasHeight);
        context.strokeStyle = 'black';
        context.strokeRect(0, 0, canvasWidth, canvasHeight);

        startButton.setAttribute('disabled', true);

        var snakeX = snake[0].x;
        var snakeY = snake[0].y;

        if (direction == 'right') {
            snakeX++;
        } else if (direction == 'left') {
            snakeX--;
        } else if (direction == 'up') {
            snakeY--;
        } else if (direction == 'down') {
            snakeY++;
        }

        if (snakeX == -1 || snakeX == canvasWidth / snakeSize || snakeY == -1 || snakeY == canvasHeight / snakeSize || checkCollision(snakeX, snakeY, snake)) {
            //restart game
            if (score > highScore || highScore == 0){highScore = score}
            startButton.innerText = `High score: ${highScore}`
            startButton.removeAttribute('disabled', true);

            context.clearRect(0, 0, canvasWidth, canvasHeight);
            gameloop = clearInterval(gameloop);
            return;
        }

        if (snakeX == food.x && snakeY == food.y) {
            var tail = {
                x: snakeX,
                y: snakeY
            }; //Create a new head instead of moving the tail
            score++;

            createFood(); //Create new food
        } else {
            var tail = snake.pop(); //pops out the last cell
            tail.x = snakeX;
            tail.y = snakeY;
        }
        //The snake can now eat the food.
        snake.unshift(tail); //puts back the tail as the first cell

        for (var i = 0; i < snake.length; i++) {
            bodySnake(snake[i].x, snake[i].y);
        }

        pizza(food.x, food.y);
        scoreText();
    }

    var createFood = function () {
        food = {
            x: Math.floor((Math.random() * 95) + 1),
            y: Math.floor((Math.random() * 95) + 1)
        }

        for (var i = 0; i > snake.length; i++) {
            var snakeX = snake[i].x;
            var snakeY = snake[i].y;

            if (food.x === snakeX && food.y === snakeY || food.y === snakeY && food.x === snakeX) {
                food.x = Math.floor((Math.random() * 95) + 1);
                food.y = Math.floor((Math.random() * 95) + 1);
            }
        }
    }

    var checkCollision = function (x, y, array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].x === x && array[i].y === y)
                return true;
        }
        return false;
    }

    var init = function () {
        score = 0
        direction = 'down'
        drawSnake()
        createFood();
        gameloop = setInterval(paint, 20);
    }


    return {
        init: init
    };


}());
(function (window, document, drawModule, undefined) {

    var startButton = document.getElementById('startButton');
    startButton.addEventListener("click", function () {
        drawModule.init();
    });

    document.onkeydown = function (event) {

        keyCode = window.event.keyCode;
        keyCode = event.keyCode;

        switch (keyCode) {

            case 37:
                if (direction != 'right') {
                    direction = 'left';
                }
                console.log('left');
                break;

            case 39:
                if (direction != 'left') {
                    direction = 'right';
                    console.log('right');
                }
                break;

            case 38:
                if (direction != 'down') {
                    direction = 'up';
                    console.log('up');
                }
                break;

            case 40:
                if (direction != 'up') {
                    direction = 'down';
                    console.log('down');
                }
                break;
        }
    }


})(window, document, drawModule);