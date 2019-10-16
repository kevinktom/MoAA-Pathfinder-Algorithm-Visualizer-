// import GraphNodes from "../graphNodes";


function depthFirstSearch(graph) {
    let visited = new Set();
    let stack = [graph.starting];

    while (stack.length) {

        let node = stack.pop();
        if (node === graph.ending) break;

        // if this node has already been visited, then skip this node
        if (visited.has(node)) continue;

        // otherwise it hasn't yet been visited,
        // so print it's val and mark it as visited.
        // console.log(node);
        visited.add(graph.starting);

        // then add its neighbors to the stack to be explored 
        stack.push(...graph.starting.neighbors);
    }
}

// depthFirstSearch(f);