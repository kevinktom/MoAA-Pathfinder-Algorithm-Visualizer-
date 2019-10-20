function keepwalls(graph, currentStart, currentEnd) {
    let graphRows = 25;
    let graphColumns = 40;
    graph.nodes.forEach(row => {
        row.forEach(node => {
            if (node.val !== 50 && node.val !==300)
            node.val = 10;
        })
    })
    // graph.nodes[0][0].val = 1;
    // graph.nodes[graphColumns - 1][graphRows - 1].val = 2;
    graph.starting = currentStart;
    graph.starting.val = 1;

    graph.ending = currentEnd;
    graph.ending.val = 2;
    // graph.nodes[graphColumns - 1][graphRows - 1].val = 2;
}

export default keepwalls;