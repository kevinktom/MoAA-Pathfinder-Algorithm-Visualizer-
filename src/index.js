// import './styles/index.scss';
// import './graph.js';
import GraphNodes from './graphNodes.js';

window.addEventListener('DOMContentLoaded', () => {
    // document.getElementById('app').innerText = "Hello World!";
    init();
    // debugger
    canvas = document.getElementById("app");
    ctx = canvas.getContext("2d");
    canvas.onmousedown = mouseDown;
    canvas.onmouseup = mouseUp;
    // canvas.onmousedown(function(e){mouseDown(e)})
    // canvas.addEventListener('click', () => {
    //     canvas.onmousedown = mouseDown;
    // })
    // canvas.addEventListener('mousedown',mouseDown);
    
});

// window.addEventListener('click', mouseDown)

let canvas
// debugger
let ctx

let WIDTH = 1200;
let HEIGHT = 800;

let nodeW = 20;
let nodeH = 20;

let graphRows = 25;
let graphColumns = 40;

let boundX = 0;
let boundY = 0;

// let graph = new GraphNodes.GraphNodes();
let graph = new GraphNodes();
// console.log(graph);

// let tiles = [];
// for (let c = 0; c < graphColumns; c++){
//     tiles[c] = [];
//     for (let r = 0; r < graphRows; r++){
//         tiles[c][r] = {x: c*(nodeW+3), y: r*(nodeH+3), state: 10}; //empty
//     }
// }

// tiles[0][0].state = 's'; //start
// tiles[graphColumns-1][graphRows-1].state = 'f'; //finish

graph.nodes[0][0].val = 1;
graph.nodes[graphColumns-1][graphRows-1].val = 2;


function rect(x,y,w,h, state){
    if (state === 1){
        ctx.fillStyle = "#75E170";
    }
    else if (state === 2){
        ctx.fillStyle = "#FC7272";
    }
    else if (state === 10){
        ctx.fillStyle = "#EEEEDD";
    }
    else if (state === 50){
        ctx.fillStyle = '#1212A5';
    }

    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.fill();
}

// function draw(){
//     // ctx.fillStyle = "#black";
//     // rect(10,10,10,10);
//     clear();

//     for (let c = 0; c < graphColumns; c++) {
//         for (let r = 0; r < graphRows; r++) {
//             rect(tiles[c][r].x, tiles[c][r].y, nodeW, nodeH, tiles[c][r].state);
//         }
//     }
// }

function draw(){
    // ctx.fillStyle = "#black";
    // rect(10,10,10,10);
    clear();

    for (let c = 0; c < graphColumns; c++) {
        for (let r = 0; r < graphRows; r++) {
            rect(graph.nodes[c][r].xpos, graph.nodes[c][r].ypos, nodeW, nodeH, graph.nodes[c][r].val);
        }
    }
}

// function draw(){
//     for (let c = 0; c < graphColumns; c++) {
//         for (let r = 0; r < graphRows; r++) {
//             ctx.fillStyle = "#AAAAAA";
//             ctx.fillRect(10*c, 10*r, 10, 10)
//         }
//     }
// }

function clear(){
    // debugger
    ctx.clearRect(0,0,WIDTH, HEIGHT)
}



function init(){
    canvas = document.getElementById("app");
    ctx = canvas.getContext("2d");
    // canvas.addEventListener('mousedown', mouseDown);
    // debugger
    return setInterval(draw,10);
}

function mouseDown(e){
    canvas.onmousemove = myMove;

    // let x = e.pageX - canvas.offsetLeft;
    // let y = e.pageY - canvas.offsetTop;

    let position = getMousePosition(canvas, e);// next three lines possibly unecessary
    let posx = position.x;
    let posy = position.y;

    // debugger
    // console.log(posx, posy);
    for (let c = 0; c < graphColumns; c++){
        for (let r=0; r < graphRows; r++){
            if ((c*(nodeW+3) < posx) 
            && (posx < c*(nodeW+3)+nodeW) 
            && (r*(nodeH+3) < posy) 
            && (posy < r*(nodeH+3)+nodeH)) {

                if (graph.nodes[c][r].val === 10){ //if empty make it a wall ()
                    graph.nodes[c][r].val = 50;
                    boundX = c;
                    boundY = r;
                }
                else if (graph.nodes[c][r].val === 50){
                    graph.nodes[c][r].val = 10;
                    boundX = c;
                    boundY = r;
                }
            }
        }
    }
    // draw();
}

function myMove(e){
    let position = getMousePosition(canvas, e);// next three lines possibly unecessary
    let posx = position.x;
    let posy = position.y;

    // debugger
    // console.log(posx, posy);
    for (let c = 0; c < graphColumns; c++) {
        for (let r = 0; r < graphRows; r++) {
            if ((c * (nodeW + 3) < posx)
                && (posx < c * (nodeW + 3) + nodeW)
                && (r * (nodeH + 3) < posy)
                && (posy < r * (nodeH + 3) + nodeH)) {

                if (graph.nodes[c][r].val === 10 && (c !== boundX || r !== boundY)) { //if empty make it a wall ()
                    graph.nodes[c][r].val = 50;
                    boundX = c;
                    boundY = r;
                }
                else if (graph.nodes[c][r].val === 50 && (c !== boundX || r !== boundY)) {
                    graph.nodes[c][r].val = 10;
                    boundX = c;
                    boundY = r;
                }
            }
        }
    }
}

function mouseUp(){
    canvas.onmousemove = null;
}

function getMousePosition(canv, event){
    let box = canv.getBoundingClientRect();
    return{
        x: event.clientX - box.left,
        y: event.clientY - box.top
    };
}
// init();
// canvas.onmousedown = mouseDown;

