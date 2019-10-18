import './styles/index.scss';
import GraphNodes from './graphNodes.js';
import depthFirstSearch from './algorithms/dfs';
import breadthFirstSearch from './algorithms/bfs';

import reset from './buttons/reset';
import keepwalls from './buttons/keepwalls';
// import enableWalls from './buttons/enableWalls';

window.addEventListener('DOMContentLoaded', () => {
    let wallsEnabled = false;
    let canvas = document.getElementById("app");
    let ctx = canvas.getContext("2d");
    init();
    canvas.onmousedown = mouseDown;
    canvas.onmouseup = mouseUp;
    let dfs = document.getElementById("dfs");
    dfs.onclick = () => {
        depthFirstSearch(graph, draw);
    }

    let bfs = document.getElementById("bfs");
    bfs.onclick = () => {
        breadthFirstSearch(graph, draw);
    }

    let resetbutton = document.getElementById("reset");
    resetbutton.onclick = () => {
        reset(graph);
    }

    let wallsremain = document.getElementById("keepwalls");
    wallsremain.onclick = () => {
        keepwalls(graph);
    }


    let ewall = document.getElementById("addwalls");
    ewall.onclick = () => {
        // enableWalls(wallsEnabled);
        wallsEnabled = !wallsEnabled;
        ewall.classList.toggle("clicked");
    }

// });


// let canvas
// let ctx
// let wallsEnabled = false;



let WIDTH = 1200;
let HEIGHT = 800;

let nodeW = 20;
let nodeH = 20;

let graphRows = 25;
let graphColumns = 40;

let boundX = 0;
let boundY = 0;



let graph = new GraphNodes();
// debugger

graph.nodes[0][0].val = 1;
graph.nodes[graphColumns-1][graphRows-1].val = 2;

function rect(x,y,w,h, state){
    if (state === 1){ //start
        ctx.fillStyle = "#75E170";
    }
    else if (state === 2){ //end
        ctx.fillStyle = "#FC7272";
    }
    else if (state === 10){ //unvisited
        ctx.fillStyle = "#EEEEDD";
    }
    else if (state === 50){ //walls
        ctx.fillStyle = '#1212A5';
    }
    else if (state === 75){ //visited
        ctx.fillStyle = '#50FFF7';
    }

    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.fill();
}

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

function clear(){
    // debugger
    ctx.clearRect(0,0,WIDTH, HEIGHT)
}

function init(){
    canvas = document.getElementById("app");
    ctx = canvas.getContext("2d");

    return setInterval(draw,10);
}

let currentStart = graph.starting;

function mouseDown(e){
    canvas.onmousemove = myMove;
    // debugger

    let position = getMousePosition(canvas, e);// next three lines possibly unecessary
    let posx = position.x;
    let posy = position.y;



    for (let c = 0; c < graphColumns; c++){
        for (let r=0; r < graphRows; r++){
            if ((c*(nodeW+3) < posx) 
            && (posx < c*(nodeW+3)+nodeW) 
            && (r*(nodeH+3) < posy) 
            && (posy < r*(nodeH+3)+nodeH)) {

                if (graph.nodes[c][r].val === 10 && wallsEnabled === true){ //if empty make it a wall ()
                    graph.nodes[c][r].val = 50;
                    boundX = c;
                    boundY = r;
                }
                else if (graph.nodes[c][r].val === 50 && wallsEnabled === true){
                    graph.nodes[c][r].val = 10;
                    boundX = c;
                    boundY = r;
                }
                else if (wallsEnabled === false && graph.nodes[c][r] !== 2 && graph.nodes[c][r] === 1) {
                    // debugger
                    currentStart.val = 10;
                    graph.nodes[c][r].val = 1;
                    currentStart = graph.nodes[c][r];
                    graph.starting = currentStart;
                    // debugger
                    boundX = c;
                    boundY = r;
                }
                
                
            }
        }
    }
}

function myMove(e){
    let position = getMousePosition(canvas, e);// next three lines possibly unecessary
    let posx = position.x;
    let posy = position.y;
    // let currentStart = graph.starting;


    for (let c = 0; c < graphColumns; c++) {
        for (let r = 0; r < graphRows; r++) {
            if ((c * (nodeW + 3) < posx)
                && (posx < c * (nodeW + 3) + nodeW)
                && (r * (nodeH + 3) < posy)
                && (posy < r * (nodeH + 3) + nodeH)) {

                if (graph.nodes[c][r].val === 10 && (c !== boundX || r !== boundY) && wallsEnabled === true) { //if empty make it a wall ()
                    graph.nodes[c][r].val = 50;
                    boundX = c;
                    boundY = r;
                }
                else if (graph.nodes[c][r].val === 50 && (c !== boundX || r !== boundY) && wallsEnabled === true) {
                    graph.nodes[c][r].val = 10;
                    boundX = c;
                    boundY = r;
                }
                // else if (wallsEnabled === false){
                //     currentStart.val = 10;
                //     graph.nodes[c][r].val = 1;
                //     currentStart = graph.nodes[c][r];
                //     // debugger
                //     boundX = c;
                //     boundY = r;
                // }

                else if (wallsEnabled === false && graph.nodes[c][r] !== 2 
                    // && ((currentStart.x * (nodeW + 1) < posx)
                    // && (posx < currentStart.x * (nodeW + 3) + 3* nodeW)
                    // && (posy > currentStart.y * (nodeH + 1))
                    // && (posy < currentStart.y * (nodeH + 3) + 3* nodeH)
                    ) {
                    // debugger
                    currentStart.val = 10;
                    graph.nodes[c][r].val = 1;
                    currentStart = graph.nodes[c][r];
                    graph.starting = currentStart;
                    // debugger
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
});

