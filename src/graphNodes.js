class GraphNodes{
    constructor(){
        // this.graph = graph;
        this.determineNeighbors = this.determineNeighbors.bind(this);
        this.nodeGenerator = this.nodeGenerator.bind(this);
        this.nodes = this.nodeGenerator();
        this.starting = this.nodes[15][15];
        this.ending = this.nodes[42][15];
        // this.determineNeighbors();
        
    }

    nodeGenerator(){
        let nodes = [];
        let boxW = 20;
        let boxH = 20
        for(let i = 0; i < 57; i++){
            nodes.push([]);
            for(let n = 0; n < 31; n++){
               nodes[i].push(new Node(10, [i,n], i*(boxW+3), n*(boxH+3)));
            }
        }
        this.determineNeighbors(nodes);
        return nodes;
    }
    // nodeGenerator(){
    //     let nodes = [];
    //     const positions = [[1, 0], [-1, 0], [1, 1], [-1, -1], [0, 1], [0, -1], [1, -1], [-1, 1]]
    //     for(let i = 0; i < 20; i++){
    //         nodes.push([]);
    //         for(let n = 0; n < 20; n++){
    //             let singlenode = new Node(10, [i,n]);

    //            nodes[i].push(new Node(10, [i,n]));
    //         }
    //     }
    //     this.determineNeighbors(nodes);
    //     return nodes;
    // }


    determineNeighbors(nodes){
        
        // const positions = [[1,-1],[-1,1],[-1,-1],[1,1],[0,-1],[-1,0],[0,1],[1,0]]
        const positions = [[0,-1],[-1,0],[0,1],[1,0]]
        let flattened = nodes.myFlatten();
        // debugger
        flattened.forEach(function(node){
            // console.log(node);
            // debugger
            positions.forEach(function(position){
                // console.log(position);
                let neighbor = [node.x + position[0], node.y + position[1]]
                // console.log(neighbor)
                // debugger
                if (((neighbor[0]) >= 0 && (neighbor[0]) < 57 && (neighbor[1]) >= 0 && (neighbor[1]) < 31) && !node.neighbors.includes(nodes[neighbor[0]][neighbor[1]]) ){
                    node.neighbors.push(nodes[neighbor[0]][neighbor[1]]);
                }

            })
        })
    }


}
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
class Node{
    constructor(val, [x,y], xpos, ypos){
        this.val = val; // 10 === empty, 56 === wall, 1 === start, 2 === end, //75 === traversed, //300 === weighted with 300, //350 === traversed through weighted
        this.key = `[${x}][${y}]`;
        this.x = x;
        this.y = y;
        this.neighbors = [];
        this.xpos = xpos;
        this.ypos = ypos;
        this.weight = 1;
        // this.visited = false;
    }
};



export default GraphNodes;