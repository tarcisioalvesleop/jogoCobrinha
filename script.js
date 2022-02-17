let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; // tamanho de cada quadrado
let snake = [];
snake[0] = {//tamanho da cobra
    x: 8 * box,
    y: 8 * box
}
let direction = "right";//direcção

let food = {//gera um numero aleatório (random 0.0 a 1.0 e floor deixa o numero inteiro)
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); // quantidade de box ao quadrao
}
function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";//cor na cobrinha
        context.fillRect(snake[i].x, snake[i].y, box, box); //tamanho da cobra e o tamanho do box
    }
}

//criando a comida
function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

//captura os cliques no teclado e chama a função update
document.addEventListener('keydown', update); 

function update (event){//direciona a cobrinha
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){

    //retornando na outra parte da tela
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0; 
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    for(i=1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();    

    //posicionamento da cobrinha
    let snakeX = snake[0].x; 
    let snakeY = snake[0].y;

    //coordenadas de deslocamento
    if( direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    //aumentando o tamanho da cobrinha
    if(snakeX != food.x || snakeY != food.y){
        snake.pop(); //retirando último elemento do array
    }
    else{//recebe mais um quadrado da cobrinha
        food.x = Math.floor(Math.random() * 15 + 1) * box,
        food.y = Math.floor(Math.random() * 15 + 1) * box
    }

    let newHead = {//cabeça da cobrinha 1 casa a frente
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);//a cada 100ms é atualizada a cobrinha