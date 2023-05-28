import { Component, ViewChild } from '@angular/core';
import { HeroService } from 'src/services/hero.service';
import { analysisOutput } from 'src/utils/analysis-output';
import { ForceGraph } from 'src/utils/force-graph';
import { falcorDependencyGraph } from './interfaces/falcor-dependency-graph';
import { IAnalysisFilter } from './interfaces/analysis-filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HeroService]
})
export class AppComponent {

  title = 'ng-analysis';

  constructor(private hero: HeroService) {
    let filterValues: IAnalysisFilter = {}
  }

  analysisOutput?: falcorDependencyGraph

  filteredOutput?: falcorDependencyGraph
  filterPropertiesToEnabledCountMap: { [key in string]: number } = {}
  filterPropertiesTotalValuesMap: { [key in string]: number } = {}

  defaultFilterValues?: IAnalysisFilter
  nodeDetails?: falcorDependencyGraph["nodesById"][0]

  ngOnInit() {
    this.analysisOutput = analysisOutput
  }

  ngAfterViewInit() {
    this.drawGraph(analysisOutput)
  }

  onNodeSelect = (nodeId: string) => {
    this.nodeDetails = analysisOutput.nodesById[nodeId]
  }
  
  chart = {
    nodeId: (d: any) => d.value[1],
    nodeGroup: (d: any) => analysisOutput.nodesById[d.value[1]]['Type'],
    nodeTitle: (d: any) => analysisOutput.nodesById[d.value[1]]['Name'],
    //@ts-ignore
    linkStrokeWidth: (l: any) => Math.sqrt(l.value),
    linkSource: ({ source }: falcorDependencyGraph["links"][0]) => source.value[1],
    linkTarget: ({ target }: falcorDependencyGraph["links"][0]) => target.value[1],
    width: 1280,
    height: 640,
    //@ts-ignore
    invalidation: null, // a promise to stop the simulation when the cell is re-run
    onClick: this.onNodeSelect
  }

  handleFilterChange(filterValues: IAnalysisFilter) {
    this.filteredOutput = structuredClone(analysisOutput)
    const nodeIds = new Set<string>(Object.keys(analysisOutput.nodesById));

    console.log(filterValues)
    // For each key in the filter values, 
    // Loop through each nodeObject and check if that 
    // node object's value, in the filtered Values is enabled or not
    Object.keys(filterValues).forEach((key) => {

      nodeIds.forEach((nodeId) => {
        Object.entries(filterValues[key]).forEach(([value, enabled]) => {
          // Remove nodes from the list if their value matches the filter value and
          // the filter value is not enabled for display
          if (!enabled) {
            if (analysisOutput.nodesById[nodeId][key] === value) {
              nodeIds.delete(nodeId)
            }
          }
          // If the current key is enabled, but the value for the key in the node is undefined, 
          // remove the node
          if (enabled) {
            if (analysisOutput.nodesById[nodeId][key] === undefined) {
              nodeIds.delete(nodeId)
            }
          }
        })
      })
    })

    // TODO: Hardcoding id as second element here, ensure no side effects
    this.filteredOutput!.nodes = this.analysisOutput!.nodes.filter((node) => nodeIds.has(node.value[1]))
    this.filteredOutput!.links = this.analysisOutput!.links.filter((link) => nodeIds.has(link.source.value[1]) && nodeIds.has(link.target.value[1]))

    const tempPropertiesToEnabledCountMap: { [key in string]: number } = {} = {}
    const tempPropertiesToCountMap: { [key in string]: number } = {} = {}
    Object.keys(filterValues).forEach((key) => {
      let currentEnabledKeyTotal = 0
      let currentKeyTotal = 0

      Object.keys(filterValues[key]).forEach((value) => {
        if (filterValues[key][value]) {
          currentEnabledKeyTotal++
        }
        currentKeyTotal++
      })

      tempPropertiesToEnabledCountMap[key] = currentEnabledKeyTotal
      tempPropertiesToCountMap[key] = currentKeyTotal
    })
    this.filterPropertiesToEnabledCountMap = tempPropertiesToEnabledCountMap
    this.filterPropertiesTotalValuesMap = tempPropertiesToCountMap

    console.debug("Final Node Ids post filter: ", nodeIds)
    this.drawGraph(this.filteredOutput!)
  }

  drawGraph(analysisOutput: falcorDependencyGraph) {
    //@ts-ignore
    const chart = ForceGraph(analysisOutput, this.chart)
    console.log(chart, "cht")

    const chartDiv = document.querySelector('#chart-div')
    if (chartDiv) {
      chartDiv.innerHTML = ''
      //@ts-ignore
      chartDiv.appendChild(chart)
    } else {
      console.error(`chartDiv element wasn't selectable`)
    }
  }

}

//TODO: Distinguish between arrow functions, and const, var and let variables in naming using 
//project.getSourceFile('ng-analysis/src/app/app.component.ts').getVariableStatements()
export const valueitem = () => {
  console.log("test")
}

export var testVariable1 = ''
export let referencerLetVariable = testVariable1 + '20'