import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { falcorDependencyGraph } from '../interfaces/falcor-dependency-graph';
import { IAnalysisFilter } from '../interfaces/analysis-filter';
import { analysisOutput } from 'src/utils/analysis-output';


@Component({
  selector: 'link-filter-presentation',
  templateUrl: './link-filter-presentation.component.html',
  styleUrls: ['./link-filter-presentation.component.scss']
})
export class LinkFilterPresentationComponent {
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
    if (changes['analysisGraph']?.currentValue !== undefined) {
      const { linkElementProperties, propertyPresentInAllNodes } = this.getFilterableKeys(changes['analysisGraph']!.currentValue)
      this.filterableKeys = Array.from(linkElementProperties)
      const links: falcorDependencyGraph["links"] = changes['analysisGraph']?.currentValue.links

      this.filterableKeys.forEach((key) => {
        const valuesList: string[] = []
        const valuesSet: { [key in string]: boolean } = {}

        links.forEach((link) => {
          //@ts-ignore
          if (valuesSet[link[key]]) {
            return
          } else if (link[key] !== undefined) {
            //@ts-ignore
            valuesSet[link[key]] = propertyPresentInAllNodes.has(key) ? true : false
            //@ts-ignore
            valuesList.push(link[key])
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
    const linkElements = graph.links

    const linkElementProperties = new Set<string>()
    const propertyNameToCountMap = new Map<string, number>();
    const propertyPresentInAllNodes = new Set<string>()

    if (!(linkElements.length > 0)) {
      console.error('Output graph has no links in nodesById key')
      return ({ linkElementProperties, propertyPresentInAllNodes })
    }

    // Loop over every link, and for each node, check every property
    // it contains, and add it to the unique Set of code element properties
    linkElements.forEach((linkElement) => {
      Object.keys(linkElement).forEach((linkElementProperty) => {

        if(linkElementProperty === 'source' || linkElementProperty === 'target') {
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
        propertyPresentInAllNodes.add(property)
      }
    })

    return ({ linkElementProperties, propertyPresentInAllNodes })
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
