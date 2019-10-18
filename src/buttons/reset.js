function reset(graph) {
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
    graph.starting = graph.nodes[0][0];
    graph.starting.val = 1;

    graph.ending = graph.nodes[39][24];
    graph.ending.val = 2;



    // graph.nodes[graphColumns - 1][graphRows - 1].val = 2;

}

export default reset;