// import GraphNodes from "../graphNodes";


function depthFirstSearch(graph) {
    let visited = new Set();
    let stack = [graph.starting];

    while (stack.length > 0) {

        let node = stack.pop();
        if (node === graph.ending) break;

        if (visited.has(node)) continue;


        // visited.add(graph.starting);
        visited.add(node);


        // stack.push(...graph.starting.neighbors);
        stack.push(...node.neighbors);
        if (node.val === 10){
            node.val = 75;
        }
    }
    console.log("donezo");
}

export default depthFirstSearch;

