import * as d3 from "d3";


const createGraph = () => {
    let w = 400;
    let h = 400;
    
    let grapher = d3.select('#app').append("svg:svg").attr("width", w).attr("height", h);
    
    for (var j = 25; j <= w - 25; j += 25) {
        grapher.append("svg:line")
        .attr("x1", 25)
        .attr("y1", j)
        .attr("x2", w - 25)
        .attr("y2", j)
        .style("stroke", "black")
        .style("stroke-width", 2);
    };
    
}
        // export default graph = () => {
        //     function gridCreator(){
        //         let grid = [];
        //         for (let i=0; i < 10; i++){
        //             grid[i] = [];
        //             for (let k=0; k < 10; k++){
        //                 grid[i][k] = 10;
        //             }
        //         }
        //     }
        //     let renderGrid = gridCreator();
        //     let graphgrid = d3.select("#app").append("svg").attr("width", "100px").attr("height", "100px");
        //     let row = graphgrid.selectAll(".row").data(renderGrid).enter().append("g").attr("class", "row");
        //     let column = row.selectAll(".square").data(function (d) { return d; }).enter().append("rect").attr("class", "square")
        //         .attr("x", function (d) { return d.x; })
        //         .attr("y", function (d) { return d.y; })
        //         .attr("width", function (d) { return d.width; })
        //         .attr("height", function (d) { return d.height; })
        //         .style("fill", "#fff")
        //         .style("stroke", "#222");
        // }

export default createGraph;