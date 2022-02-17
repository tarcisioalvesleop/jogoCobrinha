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

function iniciarJogo(){
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