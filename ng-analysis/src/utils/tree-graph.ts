import * as d3 from "d3";
import { ITreeGraph } from "src/app/interfaces/tree-graph";

export const createTreeGraphSvg = (treeData: ITreeGraph) => {

  // set the dimensions and margins of the diagram
  const margin = { top: 20, right: 90, bottom: 30, left: 150 },
    width = 660 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  // declares a tree layout and assigns the size
  const treemap = d3.tree<ITreeGraph>().size([height, width]);

  //  assigns the data to a hierarchy using parent-child relationships
  let nodes = d3.hierarchy(treeData, d => d.children);

  // maps the node data to the tree layout
  nodes = treemap(nodes);

  // append the svg object to the body of the page
  // appends a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  const svg = d3.create("svg")
    .attr("width", width + margin.left + margin.right + 200)
    .attr("height", height + margin.top + margin.bottom),
    g = svg.append("g")
      .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

  // adds the links between the nodes
  const link = g.selectAll(".link")
    .data(nodes.descendants().slice(1))
    .enter().append("path")
    .attr("class", "link-tree-graph")
    .attr("d", d => {
      //@ts-ignore
      return "M" + d.y + "," + d.x
        //@ts-ignore
        + "C" + (d.y + d.parent?.y) / 2 + "," + d.x
        //@ts-ignore
        + " " + (d.y + d.parent?.y) / 2 + "," + d.parent?.x
        //@ts-ignore
        + " " + d.parent?.y + "," + d.parent?.x;
    });

  // adds each node as a group
  const node = g.selectAll(".node")
    .data(nodes.descendants())
    .enter().append("g")
    .attr("class", d => "node-tree-graph" + (d.children ? " node--internal" : " node--leaf"))
    //@ts-ignore
    .attr("transform", d => "translate(" + d.y + "," + d.x + ")");

  // adds the circle to the node
  node.append("circle")
    .attr("r", d => 10 - (d.data?.depth ?? 0))
    .style("stroke", d => d.data.type)

  // adds the text to the node
  node.append("text")
    .attr("dy", ".35em")
    .attr("x", 0)
    .attr("y", d => ((d.data?.depth ?? 1) % 2 === 0 ? 1 : -1) * 16)
    .style("text-anchor", "middle")
    .text(d => d.data.name);

  // Define zoom behavior
  const zoom = d3.zoom()
    .scaleExtent([0.1, 10])  // This control how much you can zoom in and out
    .on("zoom", function (event) {
      svg.attr("transform", event.transform);
    });

    //@ts-ignore
  svg.call(zoom);
  // Construct the scales.  
  return svg.node()
}