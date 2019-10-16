export default class GraphNodes{
    constructor(graph){
        // this.graph = graph;
        this.nodes = [];
        this.determineNeighbors = this.determineNeighbors.bind(this)
    }

    nodeGenerator(){
        for(let i = 0; i < 20; i++){
            this.nodes.push([]);
            for(let n = 0; n < 20; n++){
                this.nodes[i].push(new Node(10, [i,n]));
            }
        }
    }


    determineNeighbors(nodes){
        
        positions = [[1,0],[-1,0],[1,1],[-1,-1],[0,1],[0,-1],[1,-1],[-1,1]]
        this.nodes.forEach(function(node){
            positions.forEach(function(position){
                if ((node.x + position[0]) >= 0 && (node.x + position[0]) <= 19 && (node.y + position[1]) >= 0 && (node.y + position[1]) <= 19 ){
                    node.neighbors.push(nodes[position[0]][position[1]]);
                }

            })
        })
    }

}
class Node{
    constructor(val, [x,y]){
        this.val = val;
        this.x = x;
        this.y = y;
        this.neighbors = [];
    }
}