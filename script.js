let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; // tamanho de cada quadrado
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); // quantidade de box ao quadrao
}
function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";//cor na cobrinha
        context.fillRect(snake[i].x, snake[i].y, box, box); //tamanho d cobra e o tamanho do box
    }
}

criarBG();
criarCobrinha();