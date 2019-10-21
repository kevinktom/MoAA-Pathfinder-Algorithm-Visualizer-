// import GraphNodes from "../graphNodes";


function breadthFirstSearch(graph, draw) {
    let visited = new Set();
    let queue = [graph.starting];
    let interval = null;

    function addToQueue() {
        let node
        if (queue.length > 0) {
            node = queue[0];
        }
        if (queue[0] === graph.starting) {
            // debugger
            node = graph.starting
        }
        if (node === graph.ending || queue.length === 0) {
            // debugger
            clearInterval(interval);
            // other logice`
            // debugger
            queue = [];//clearing queue once it ends. maybe delete this to show history
            draw()
            console.log("made it to the end")
            return;
        } else if (visited.has(node)) {
            return;
        }
        node = queue.shift();
        console.log(queue)
        console.log(visited)
        console.log("----------------------")
        // console.log(graph.ending)
        visited.add(node);
        // queue.push(...node.neighbors);
        node.neighbors.forEach(neighbor => {
            if (!visited.has(neighbor) && neighbor.val !== 50 && !queue.includes(neighbor)) {
                queue.push(neighbor)
            }
        })
        // debugger
        if (node.val === 10) {
            node.val = 75;
        }

        else if (node.val === 300) {
            node.val = 350;
        }

        draw();
    }

    interval = setInterval(addToQueue, 40)
    console.log("donezo");
    // debugger
}

export default breadthFirstSearch;

