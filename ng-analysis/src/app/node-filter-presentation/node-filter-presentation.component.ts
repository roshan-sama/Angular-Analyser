import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { falcorDependencyGraph } from '../interfaces/falcor-dependency-graph';
import { IAnalysisFilter } from '../interfaces/analysis-filter';


@Component({
  selector: 'node-filter-presentation',
  templateUrl: './node-filter-presentation.component.html',
  styleUrls: ['./node-filter-presentation.component.scss']
})
export class NodeFilterPresentationComponent {
  @Input() analysisGraph?: falcorDependencyGraph

  @Output() filterChangeEvent: EventEmitter<IAnalysisFilter> = new EventEmitter()

  filterableKeys: string[] = []
  types: string[] = ['one', 'two']

  ngOnChanges(changes: SimpleChanges) {
    if (changes['analysisGraph']?.currentValue) {
      this.filterableKeys = this.getFilterableKeys(changes['analysisGraph']?.currentValue)

      const nodesObject: falcorDependencyGraph["nodesById"] = changes['analysisGraph']?.currentValue.nodesById
      const typeList: string[] = []
      const typeSet: { [key in string]: any } = {}

      Object.values(nodesObject).forEach((node) => {
        if (typeSet[node.type]) {
          return
        } else {
          typeSet[node.type] = true
          typeList.push(node.type)
        }
      })
      this.types = typeList
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

  handleTypeSelect(type: string, checked: boolean) {
    console.log(type)
    console.log(checked)
  }
}
