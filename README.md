# MoAA

## Overview
-----------
MoAA which stands for Museum of Algorithmic Art is a Path Finder project that showcases the performances of search algorithms. A start and end point can be selected by the User as well as any walls that may block certain nodes. The User is able to select an algorithm and generate a visualization of an algorithm reaching the end point from the start. The canvas starts off blank and once the User clicks to generate, the selected algorithm begins to traverse through the maze. 

## Functionality & MVP
----------------------
* Blank Canvas with the User being able to create start and end points and walls to disable nodes from being accessed by the algorithm
* User can select different algorithms which will yield different results
* User can reset the Canvas to a blank one
* Once a path is found, the shortest path will be highlighted

## Wireframe
------------
MoAA will have a single page canvas. The User can select the different algorithms on the right panel. The generate button will be used to start the algorithm's search for the end point and the clear button will be used to reset the canvas to a blank one and clear the current maze. 

![alt text](https://github.com/kevinktom/MoAA/blob/master/wireframe.png)

## Architectures and Technologies
---------------------------------
* Vanilla Javascript
* D3 for visualization

## Timeline
-----------
Tuesday - Research D3 and MDN Dom Manipulation and familiarize myself with the searching algorithms
Wednesday - Create the canvas and framework for how the nodes behave
Thursday - Implement functionality of each algorithm
Friday - Create ability for users to create walls and the generate and clear buttons
Weekend - Polish up core functionality and work on bonus features

## Bonus Features
* Allow User to scale the size of the grid/maze
* Add feature of giving nodes weights so that the efficiency of Dijkstra's algorithm in comparison to the other algorithms
* Add an option for all algorthms to run at the same time

