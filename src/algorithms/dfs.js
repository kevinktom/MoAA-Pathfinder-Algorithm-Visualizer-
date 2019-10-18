// import GraphNodes from "../graphNodes";


function depthFirstSearch(graph, draw) {
    let visited = new Set();
    let stack = [graph.starting];
    let interval = null;

    function addToStack(){
        let node
        if (stack.length > 0){
            node = stack[stack.length - 1];
        }
        if (stack[0] === graph.starting){
            // debugger
            node = graph.starting
        }
        if (node === graph.ending || stack.length === 0){
            clearInterval(interval);
            // other logice`
            // debugger
            stack = [];//clearing stack once it ends. maybe delete this to show history
            draw()
            console.log("made it to the end")
            return;
        } else if (visited.has(node)) {
            return;
        }
        node = stack.pop();
        console.log(stack)
        console.log(visited)
        console.log("----------------------")
        // console.log(graph.ending)
        visited.add(node);
        // stack.push(...node.neighbors);
        node.neighbors.forEach(neighbor => {
            if (!visited.has(neighbor) && neighbor.val !== 50){
                stack.push(neighbor)
            }
        })
        if (node.val === 10) {
            node.val = 75;
        }

        draw();
    }
    
    interval = setInterval(addToStack, 40)
    console.log("donezo");
    // debugger
}

export default depthFirstSearch;

