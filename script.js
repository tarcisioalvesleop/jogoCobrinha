let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; // tamanho de cada quadrado
let snake = [];
snake[0] = {//tamanho da cobra
    x: 8 * box,
    y: 8 * box
}
let direction = "right";//direcção

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

    criarBG();
    criarCobrinha();

    //posicionamento da cobrinha
    let snakeX = snake[0].x; 
    let snakeY = snake[0].y;

    //coordenadas de deslocamento
    if( direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;
    
    //retirando último elemento do array
    snake.pop();

    let newHead = {//cabeça da cobrinha 1 casa a frente
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);//a cada 100ms é atualizada a cobrinha