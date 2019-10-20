function reset(graph, currentStart, currentEnd) {
    let graphRows = 25;
    let graphColumns = 40;
    graph.nodes.forEach(row => {
        row.forEach(node => {
            node.val = 10;
        })
    })
    // graph.nodes[0][0].val = 1;
    // debugger
    // graph.nodes[0][0] = graph.starting;
    graph.starting = currentStart;
    graph.starting.val = 1;

    graph.ending = currentEnd;
    graph.ending.val = 2;
    
    // window.stop();


    // graph.nodes[graphColumns - 1][graphRows - 1].val = 2;

}

export default reset;