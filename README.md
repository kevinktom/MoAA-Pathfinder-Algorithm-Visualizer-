# MoAA

## Overview
-----------
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

MoAA which stands for Museum of Algorithmic Art is a Pathfinder Algorithm Visualizer that showcases the performances of search algorithms, specifically highlighting the efficiency of Dijkstra's Algorithm. Start and end points can be selected by the User, walls can be created to block the traversal to certain nodes, and weights can be added that represent a higher cost of traversing certain nodes. The User is able to select an algorithm and generate a visualization of an algorithm reaching the end point from the start. MoAA is built using vanilla JavaScript and Canvas.js.

### Website: [MoAA](https://kevinktom.github.io/MoAA/)

## Dijkstra's Traversal
----------------------

![Alt Text](https://media.giphy.com/media/fAhOFk3AKL0nC3RaCa/giphy.gif)


* Dijkstra's Algorithm is weighted, meaning that it takes into account the cost of traversing weighted nodes. This guarantees the shortest path from start to end in a more realistic representation of searching. 

```
function dijkstrasTraversal(graph, source, draw){
    let {distance, previous} = dijkstras(graph, source)
    let start = graph.starting;
    let end = graph.ending;
    let path = [end.key];
    let interval = null;
    let node = start;
    
    while(path[path.length - 1] !== start.key){
        path.push(previous[path[path.length - 1]]);
    }
    path = path.reverse().slice(1);

    let allNodes = graph.nodes.myFlatten();
    let pathNodes = []
    
    path.forEach(key => {
        allNodes.forEach(node => {
            if(key === node.key){
                pathNodes.push(node);
            }
        }
 )})
```

## Algorithms
------------
* Depth-first Search
* Breadth-first Search
* Dijkstra's Algorithm

## Technologies
---------------------------------
* Vanilla JavaScript
* Canvas.js

## Future Updates
-----------
* A* Search Algorithm
* Greedy Best-first Search Algorithm


Contact Me
-----------------------
Email: KevinKTom@gmail.com

Github: https://github.com/kevinktom 
