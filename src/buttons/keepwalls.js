function keepwalls(graph) {
    let graphRows = 25;
    let graphColumns = 40;
    graph.nodes.forEach(row => {
        row.forEach(node => {
            if (node.val === 75)
            node.val = 10;
        })
    })
    graph.nodes[0][0].val = 1;
    graph.nodes[graphColumns - 1][graphRows - 1].val = 2;
}

export default keepwalls;