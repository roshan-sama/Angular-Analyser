import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { falcorDependencyGraph } from '../interfaces/falcor-dependency-graph';
import { IAnalysisFilter } from '../interfaces/analysis-filter';
import { analysisOutput } from 'src/utils/analysis-output';


@Component({
  selector: 'node-filter-presentation',
  templateUrl: './node-filter-presentation.component.html',
  styleUrls: ['./node-filter-presentation.component.scss']
})
export class NodeFilterPresentationComponent {
  @Input() analysisGraph?: falcorDependencyGraph
  @Input() filterPropertiesToEnabledCountMap: { [key in string]: number } = {}
  @Input() filterPropertiesTotalValuesMap: { [key in string]: number } = {}

  @Output() filterChangeEvent: EventEmitter<IAnalysisFilter> = new EventEmitter()

  filterableKeys: string[] = []
  filterableValues: { [key in string]: string[] } = {}

  filteredObject: IAnalysisFilter = {}

  constructor() {
    this.filterChangeEvent.subscribe((filteredObject) => {

      Object.keys(filteredObject).forEach((key) => {
        let currentKeyTotal = 0

        Object.keys(filteredObject[key]).forEach((value) => {
          if (filteredObject[key][value]) {
            currentKeyTotal++
          }
        })

        this.filterPropertiesToEnabledCountMap[key] = currentKeyTotal
      })
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['analysisGraph']?.currentValue) {
      const { codeElementProperties, propertyPresentInAllNodes } = this.getFilterableKeys(changes['analysisGraph']?.currentValue)
      this.filterableKeys = Array.from(codeElementProperties)
      const nodesObject: falcorDependencyGraph["nodesById"] = changes['analysisGraph']?.currentValue.nodesById

      this.filterableKeys.forEach((key) => {
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
        this.filterableValues[key] = valuesList
        this.filteredObject[key] = valuesSet
      })

      console.debug(this.filteredObject, "filt object at end")
    }
  }

  ngOnInit() {
    this.filterChangeEvent.emit(this.filteredObject)
  }

  getFilterableKeys(graph: falcorDependencyGraph) {
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

    return ({ codeElementProperties, propertyPresentInAllNodes })
  }

  handleTypeSelect(key: string, value: string, checked: boolean) {
    this.filteredObject[key][value] = checked
    this.filterChangeEvent.emit(this.filteredObject)
  }

  handleCheckAll(key: string, $event: any) {
    $event.stopPropagation();
    Object.keys(this.filteredObject[key]).forEach((value) => {
      this.filteredObject[key][value] = true
    })
    this.filterChangeEvent.emit(this.filteredObject)
  }

  handleUncheckAll(key: string, $event: any) {
    $event.stopPropagation();
    Object.keys(this.filteredObject[key]).forEach((value) => {
      this.filteredObject[key][value] = false
    })
    this.filterChangeEvent.emit(this.filteredObject)
  }

}
