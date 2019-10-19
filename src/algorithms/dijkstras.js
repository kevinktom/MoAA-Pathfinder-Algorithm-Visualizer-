// function dijkstras(graph, source, draw) {
//     let distance = {};
//     let allNodes = graph.nodes.myFlatten();
//     allNodes.forEach(node => {
//         distance[node.key] = Infinity;
//     })
//     distance[source.key] = 0; //starting node


//     Array.prototype.myFlatten = function () {
//         let flattened = [];

//         this.forEach((el) => {
//             if (el instanceof Array) {
//                 flattened = flattened.concat(el.myFlatten());
//             } else {
//                 flattened.push(el);
//             }
//         });

//         return flattened;
//     };


//     let unvisited = new Set(allNodes);
//     let previous = {};

//     while (unvisited.size > 0) {
//         let currNode = minDistanceNode(unvisited, distance);
//         unvisited.delete(currNode);


//         let graphObject = {};
//         let currNeighbors = graph.nodes[currNode.x][currNode.y].neighbors //array
//         currNeighbors.forEach(neighbor => {
//             graphObject[neighbor.key] = neighbor.weight;
//         })
//         for (let neighbor in graphObject) {
//             // let distanceFromCurrToNeighbor = graph[currNode][neighbor];
//             let distanceFromCurrToNeighbor = graph.nodes[currNode.x][currNode.y].neighbors.find(finne => {
//                 if (finne.key === neighbor){
//                     return finne
//                 }}).weight;
//             let totalNeighborDistance = distance[currNode] + distanceFromCurrToNeighbor;

//             if (distance[neighbor] > totalNeighborDistance) {
//                 distance[neighbor] = totalNeighborDistance;
//                 previous[neighbor] = currNode;
//             }
//         }
//     }

//     return { distance, previous };
// }

// function minDistanceNode(nodes, distance) {
//     return Array.from(nodes).reduce((minNode, node) => (
//         distance[node] < distance[minNode] ? node : minNode
//     ));
// }



function dijkstras(graph, source) {

    Array.prototype.myFlatten = function () {
    let flattened = [];
    this.forEach((el) => {
        if (el instanceof Array) {
            flattened = flattened.concat(el.myFlatten());
        } else {
            flattened.push(el);
        }
    });
    return flattened;
    };

    let adjList = {}
    graph.nodes.myFlatten().forEach(node => {
        neibs = {}
        node.neighbors.forEach(neighbor => {
            neibs[neighbor.key] = neighbor.weight;
        })
        adjList[node.key] = neibs;
    })

    let distance = {};
    for (let node in adjList) {
        distance[node] = Infinity;
    }
    distance[source] = 0;

    let unvisited = new Set(Object.keys(adjList));
    let previous = {};




    while (unvisited.size > 0) {
        let currNode = minDistanceNode(unvisited, distance);
        unvisited.delete(currNode);

        for (let neighbor in adjList[currNode]) {
            let distanceFromCurrToNeighbor = adjList[currNode][neighbor];
            let totalNeighborDistance = distance[currNode] + distanceFromCurrToNeighbor;

            if (distance[neighbor] > totalNeighborDistance) {
                distance[neighbor] = totalNeighborDistance;
                previous[neighbor] = currNode;
            }
        }
    }

    return { distance, previous };
}

function minDistanceNode(nodes, distance) {
    return Array.from(nodes).reduce((minNode, node) => (
        distance[node] < distance[minNode] ? node : minNode
    ));
}

export default dijkstras;

