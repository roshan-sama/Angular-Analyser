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
  @Input() filteredObject: IAnalysisFilter = {}

  @Output() filterChangeEvent: EventEmitter<IAnalysisFilter> = new EventEmitter()

  filterableKeys: string[] = []
  filterableValues: { [key in string]: string[] } = {}

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
    if (changes["filteredObject"]?.currentValue !== undefined) {
      this.filterableKeys = Object.keys(this.filteredObject)
      
      this.filterableValues = {}
      this.filterableKeys.forEach((key) => {
        this.filterableValues[key] = Object.keys(this.filteredObject[key])
      })
    }
  }

  ngOnInit() {
    this.filterableKeys = Object.keys(this.filteredObject)

    this.filterableValues = {}
    this.filterableKeys.forEach((key) => {
      this.filterableValues[key] = Object.keys(this.filteredObject[key])
    })
  }

  handleTypeSelect(key: string, value: string, checked: boolean) {
    const newValues = structuredClone(this.filteredObject)
    newValues[key][value] = checked
    this.filterChangeEvent.emit(newValues)
  }

  handleCheckAll(key: string, $event: any) {
    $event.stopPropagation();
    const newValues = structuredClone(this.filteredObject)
    Object.keys(newValues[key]).forEach((value) => {
      newValues[key][value] = true
    })
    this.filterChangeEvent.emit(newValues)
  }

  handleUncheckAll(key: string, $event: any) {
    $event.stopPropagation();
    const newValues = structuredClone(this.filteredObject)
    Object.keys(newValues[key]).forEach((value) => {
      newValues[key][value] = false
    })
    this.filterChangeEvent.emit(newValues)
  }

}
