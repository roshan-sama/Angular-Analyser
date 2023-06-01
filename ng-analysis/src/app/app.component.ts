import { Component, ViewChild } from '@angular/core';
import { HeroService } from 'src/services/hero.service';
import { analysisOutput } from 'src/utils/analysis-output';
import { ForceGraph } from 'src/utils/force-graph';
import { falcorDependencyGraph } from './interfaces/falcor-dependency-graph';
import { IAnalysisFilter } from './interfaces/analysis-filter';

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.scss'],
  providers: [HeroService]
})
export class AppComponent {

  title = 'ng-analysis';

  constructor(private hero: HeroService) {
    this.analysisOutput = analysisOutput
  }

  analysisOutput: falcorDependencyGraph

  filteredOutput?: falcorDependencyGraph
  filterNodePropertiesToEnabledCountMap: { [key in string]: number } = {}
  filterNodePropertiesTotalValuesMap: { [key in string]: number } = {}

  filteredNodeObject: IAnalysisFilter = {}
  propertyPresentInAllNodes: Set<string> = new Set()
  filteredLinkObject: IAnalysisFilter = {}
  propertyPresentInAllLinks: Set<string> = new Set()

  filterLinkPropertiesToEnabledCountMap: { [key in string]: number } = {}
  filterLinkPropertiesTotalValuesMap: { [key in string]: number } = {}

  nodeDetails?: falcorDependencyGraph["nodesById"][0]

  ngOnInit() {    
    this.calculateDefaultNodeFilteredValues(this.analysisOutput)
    this.calculateDefaultLinkFilteredValues(this.analysisOutput)
    this.previousLinkFilterValues = this.filteredLinkObject
    this.previousNodeFilterValues = this.filteredNodeObject

    this.handleNodeFilterChange(this.filteredNodeObject)
  }

  ngAfterViewInit() {
    this.drawGraph(this.analysisOutput)
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

  previousNodeFilterValues?: IAnalysisFilter
  previousLinkFilterValues?: IAnalysisFilter

  handleNodeFilterChange(filterValues: IAnalysisFilter) {
    this.previousNodeFilterValues = filterValues

    let newGraph
    newGraph = this.processNodeFilter(filterValues, analysisOutput)
    if (this.previousLinkFilterValues) {
      newGraph = this.processLinkFilter(this.previousLinkFilterValues, newGraph)
    }

    if (newGraph) {
      this.filteredOutput = newGraph
      this.drawGraph(this.filteredOutput)
    }
  }

  handleLinkFilterChange(filterValues: IAnalysisFilter) {
    this.previousLinkFilterValues = filterValues

    let newGraph
    if (this.previousNodeFilterValues) {
      newGraph = this.processNodeFilter(this.previousNodeFilterValues, analysisOutput)
    }
    console.log(filterValues, "f vals")
    console.log(newGraph ?? analysisOutput, "f vals 2")
    newGraph = this.processLinkFilter(filterValues, newGraph ?? analysisOutput)

    if (newGraph) {
      this.filteredOutput = newGraph
      this.drawGraph(this.filteredOutput)
    }
  }

  processNodeFilter(filterValues: IAnalysisFilter, analysisGraph: falcorDependencyGraph): falcorDependencyGraph {
    let filteredOutput = structuredClone(analysisGraph)
    const nodeIds = new Set<string>(Object.keys(analysisGraph.nodesById));

    const newFilteredNodeObject: IAnalysisFilter = structuredClone(this.filteredNodeObject)

    console.log(filterValues)
    // For each key in the filter values, 
    // Loop through each nodeObject and check if that 
    // node object's value, in the filtered Values is enabled or not
    Object.keys(filterValues).forEach((key) => {

      nodeIds.forEach((nodeId) => {
        Object.entries(filterValues[key]).forEach(([value, enabled]) => {
          newFilteredNodeObject[key] = filterValues[key]
          // Remove nodes from the list if their value matches the filter value and
          // the filter value is not enabled for display
          if (!enabled) {
            if (analysisOutput.nodesById[nodeId][key] === value && this.propertyPresentInAllNodes.has(key)) {
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
    filteredOutput.nodes = analysisGraph.nodes.filter((node) => nodeIds.has(node.value[1]))
    filteredOutput.links = analysisGraph.links.filter((link) => nodeIds.has(link.source.value[1]) && nodeIds.has(link.target.value[1]))

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

    this.filterNodePropertiesToEnabledCountMap = tempPropertiesToEnabledCountMap
    this.filterNodePropertiesTotalValuesMap = tempPropertiesToCountMap
    this.filteredNodeObject = newFilteredNodeObject
    
    return filteredOutput
  }

  processLinkFilter(filterValues: IAnalysisFilter, analysisGraph: falcorDependencyGraph): falcorDependencyGraph {
    let filteredOutput = structuredClone(analysisGraph)
    let links = [...analysisGraph.links]

    const newFilteredLinkObject: IAnalysisFilter = structuredClone(this.filteredLinkObject)
    
    Object.keys(filterValues).forEach((key) => {

      filteredOutput.links.forEach((link: falcorDependencyGraph["links"][0]) => {
        Object.entries(filterValues[key]).forEach(([value, enabled]) => {
          newFilteredLinkObject[key] = filterValues[key]
          // Remove nodes from the list if their value matches the filter value and
          // the filter value is not enabled for display
          if (!enabled) {
            if (link[key] === value && this.propertyPresentInAllLinks.has(key)) {
              //@ts-ignore
              links = links.filter((l) => l[key] !== value)
            }
          }
          // If the current key is enabled, but the value for the key in the node is undefined, 
          // remove the node
          if (enabled) {
            if (link[key] === undefined) {
              //@ts-ignore
              links = links.filter((l) => l[key] !== value)
            }
          }
        })
      })
    })

    // TODO: Hardcoding id as second element here, ensure no side effects
    // this.filteredOutput!.nodes = this.analysisOutput!.nodes.filter((node) => nodeIds.has(node.value[1]))
    filteredOutput.links = links

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
    this.filterLinkPropertiesToEnabledCountMap = tempPropertiesToEnabledCountMap
    this.filterLinkPropertiesTotalValuesMap = tempPropertiesToCountMap
    this.filteredLinkObject = newFilteredLinkObject

    console.debug("Final Links post filter: ", links)

    return filteredOutput
  }

  drawGraph(analysisGraph: falcorDependencyGraph) {
    //@ts-ignore
    const chart = ForceGraph(analysisGraph, this.chart)
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

  calculateDefaultNodeFilteredValues(analysisGraph: falcorDependencyGraph) {
    const { codeElementProperties, propertyPresentInAllNodes } = this.getFilterableNodeKeys(analysisGraph)
    this.propertyPresentInAllNodes = propertyPresentInAllNodes
    const filterableKeys = Array.from(codeElementProperties)
    const nodesObject: falcorDependencyGraph["nodesById"] = analysisGraph.nodesById

    const filterableValues: { [key in string]: string[] } = {}
    const filteredObject: { [key in string]: { [key in string]: boolean } } = {}

    filterableKeys.forEach((key) => {
      const valuesList: string[] = []
      const valuesSet: { [key in string]: boolean } = {}

      Object.values(nodesObject).forEach((node) => {
        if (valuesSet[node[key]]) {
          return
        } else if (node[key] !== undefined) {
          valuesSet[node[key]] = propertyPresentInAllNodes.has(key) ? true : false
          valuesList.push(node[key])
        }
      })
      filterableValues[key] = valuesList
      filteredObject[key] = valuesSet
    })

    this.filteredNodeObject = filteredObject
    console.debug(this.filteredNodeObject, "filt object at end")
  }

  getFilterableNodeKeys(graph: falcorDependencyGraph) {
    const codeElements = Object.values(graph.nodesById)

    const codeElementProperties = new Set<string>()
    const propertyNameToCountMap = new Map<string, number>();
    const propertyPresentInAllNodes = new Set<string>()

    if (!(codeElements.length > 0)) {
      console.error('Output graph has no nodes in nodesById key')
      return ({ codeElementProperties, propertyPresentInAllNodes })
    }

    // Loop over every node, and for each node, check every property
    // it contains, and add it to the unique Set of code element properties
    codeElements.forEach((codeElement) => {
      Object.keys(codeElement).forEach((codeElementProperty) => {

        codeElementProperties.add(codeElementProperty)

        if (propertyNameToCountMap.has(codeElementProperty)) {
          const previousCount = propertyNameToCountMap.get(codeElementProperty)!
          propertyNameToCountMap.set(codeElementProperty, previousCount + 1)
        } else {
          propertyNameToCountMap.set(codeElementProperty, 1)
        }

      })
    })

    propertyNameToCountMap.forEach((count, property) => {
      if (count === codeElements.length) {
        propertyPresentInAllNodes.add(property)
      }
    })

    console.log(codeElementProperties, "codeElementProperties")
    codeElementProperties.delete('Non Filterable')
    propertyPresentInAllNodes.delete('Non Filterable')
    return ({ codeElementProperties, propertyPresentInAllNodes })
  }

  calculateDefaultLinkFilteredValues(analysisGraph: falcorDependencyGraph) {
    const { linkElementProperties, propertyPresentInAllLinks } = this.getFilterableLinkKeys(analysisGraph)
    this.propertyPresentInAllLinks = propertyPresentInAllLinks

    const filterableKeys = Array.from(linkElementProperties)
    const links: falcorDependencyGraph["links"] = analysisGraph.links

    const filterableValues: { [key in string]: string[] } = {}
    const filteredObject: { [key in string]: { [key in string]: boolean } } = {}

    filterableKeys.forEach((key) => {
      const valuesList: string[] = []
      const valuesSet: { [key in string]: boolean } = {}

      links.forEach((link) => {
        //@ts-ignore
        if (valuesSet[link[key]]) {
          return
        } else if (link[key] !== undefined) {
          //@ts-ignore
          valuesSet[link[key]] = propertyPresentInAllLinks.has(key) ? true : false
          //@ts-ignore
          valuesList.push(link[key])
        }
      })
      filterableValues[key] = valuesList
      filteredObject[key] = valuesSet
    })

    this.filteredLinkObject = filteredObject

    console.debug(this.filteredNodeObject, "filt object at end")
  }

  getFilterableLinkKeys(graph: falcorDependencyGraph) {
    const linkElements = graph.links

    const linkElementProperties = new Set<string>()
    const propertyNameToCountMap = new Map<string, number>();
    const propertyPresentInAllLinks = new Set<string>()

    if (!(linkElements.length > 0)) {
      console.error('Output graph has no links in nodesById key')
      return ({ linkElementProperties, propertyPresentInAllLinks })
    }

    // Loop over every link, and for each node, check every property
    // it contains, and add it to the unique Set of code element properties
    linkElements.forEach((linkElement) => {
      Object.keys(linkElement).forEach((linkElementProperty) => {

        if (linkElementProperty === 'source' || linkElementProperty === 'target') {
          return
        }

        linkElementProperties.add(linkElementProperty)

        if (propertyNameToCountMap.has(linkElementProperty)) {
          const previousCount = propertyNameToCountMap.get(linkElementProperty)!
          propertyNameToCountMap.set(linkElementProperty, previousCount + 1)
        } else {
          propertyNameToCountMap.set(linkElementProperty, 1)
        }

      })
    })

    propertyNameToCountMap.forEach((count, property) => {
      if (count === linkElements.length) {
        propertyPresentInAllLinks.add(property)
      }
    })

    return ({ linkElementProperties, propertyPresentInAllLinks })
  }

}

//TODO: Distinguish between arrow functions, and const, var and let variables in naming using 
//project.getSourceFile('ng-analysis/src/app/app.component.ts').getVariableStatements()
export const valueitem = () => {
  console.log("test")
}

export var testVariable1 = ''
export let referencerLetVariable = testVariable1 + '20'