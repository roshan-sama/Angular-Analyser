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

  @Output() filterChangeEvent: EventEmitter<IAnalysisFilter> = new EventEmitter()

  filterableKeys: string[] = []
  filterableValues: { [key in string]: string[] } = {}

  filteredObject: IAnalysisFilter = {}

  constructor(){
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['analysisGraph']?.currentValue) {
      this.filterableKeys = this.getFilterableKeys(changes['analysisGraph']?.currentValue)
      const nodesObject: falcorDependencyGraph["nodesById"] = changes['analysisGraph']?.currentValue.nodesById

      this.filterableKeys.forEach((key) => {
        const valuesList: string[] = []
        const valuesSet: { [key in string]: boolean } = {}

        Object.values(nodesObject).forEach((node) => {
          if (valuesSet[node[key]]) {
            return
          } else {
            valuesSet[node[key]] = true
            valuesList.push(node[key])
          }
        })
        this.filterableValues[key] = valuesList
        this.filteredObject[key] = valuesSet
      })

      console.log(this.filteredObject, "filt object at end")
    }
  }

  getFilterableKeys(graph: falcorDependencyGraph) {
    const nodesValues = Object.values(graph.nodesById)
    if (!(nodesValues.length > 0)) {
      console.error('Output graph has no nodes in nodesById key')
      return []
    }
    const keys = Object.keys(nodesValues[0])
    return keys
  }

  handleTypeSelect(key: string, value: string, checked: boolean) {
    
  }
}
