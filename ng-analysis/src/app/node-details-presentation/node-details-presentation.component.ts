import { Component, Input, SimpleChanges } from '@angular/core';
import { falcorDependencyGraph } from '../interfaces/falcor-dependency-graph';
import { ITreeGraph } from '../interfaces/tree-graph';
import { createTreeGraphSvg } from 'src/utils/tree-graph';

@Component({
  selector: 'node-details-presentation',
  templateUrl: './node-details-presentation.component.html',
  styleUrls: ['./node-details-presentation.component.scss']
})
export class NodeDetailsPresentationComponent {
  @Input() nodeDetails?: { details: falcorDependencyGraph["nodesById"][0], id: string }
  @Input() currentGraph?: falcorDependencyGraph

  maxDepth = 10

  ngOnChanges(changes: SimpleChanges) {
    const newNodeDetails = changes["nodeDetails"]?.currentValue

    if (newNodeDetails !== undefined && this.currentGraph !== undefined) {
      const graph = this.getTreeGraphForNode(newNodeDetails, this.currentGraph)
      this.drawTreeGraph(graph)
    }

    const newCurrentGraph = changes["currentGraph"]?.currentValue

    if (newCurrentGraph !== undefined && this.nodeDetails !== undefined) {
      const graph = this.getTreeGraphForNode(this.nodeDetails, newCurrentGraph)
      this.drawTreeGraph(graph)
    }
  }

  visitedIds = new Set<string>()

  getTreeGraphForNode(newNodeDetails: { details: falcorDependencyGraph["nodesById"][0], id: string }, currentGraph: falcorDependencyGraph) {
    let currentDepth = 1
    this.visitedIds.clear()
    return this.getTreeGraphForNodeRecursive(newNodeDetails, currentGraph, currentDepth)
  }

  //https://codepen.io/blackjacques/pen/ZPMpza
  getTreeGraphForNodeRecursive(newNodeDetails: { details: falcorDependencyGraph["nodesById"][0], id: string }, currentGraph: falcorDependencyGraph, currentDepth: number): ITreeGraph {

    const graph: ITreeGraph = {
      name: newNodeDetails.details["Name"],
      id: newNodeDetails["id"],
      depth: currentDepth,
      type: newNodeDetails.details["Type"],
    }

    this.visitedIds.add(newNodeDetails.id)

    currentDepth++

    const links = currentGraph.links.filter(link => link.source.value[1] === newNodeDetails.id)

    const children = new Set<string>()

    links.forEach(link => {
      const targetId = link.target.value[1]
      children.add(targetId)
    })

    if(children.size > 0) {
      graph.children = []
    }

    children.forEach(childId => {
      if(!this.visitedIds.has(childId)) {
        const childNodeDetails = {
          details: currentGraph.nodesById[childId],
          id: childId
        }

        const childGraph = this.getTreeGraphForNodeRecursive(childNodeDetails, currentGraph, currentDepth)

        graph.children?.push(childGraph)
      }
    })

    return graph
  }

  drawTreeGraph(treeGraph: ITreeGraph) {
    const svg = createTreeGraphSvg(treeGraph)

    const chartDiv = document.querySelector('#tree-graph-div')
    if (chartDiv) {
      chartDiv.innerHTML = ''
      //@ts-ignore
      chartDiv.appendChild(svg)
    } else {
      console.error(`chartDiv element wasn't selectable`)
    }
  }
}
