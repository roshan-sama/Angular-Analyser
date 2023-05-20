import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { falcorDependencyGraph } from '../interfaces/falcor-dependency-graph';

@Component({
  selector: 'node-filter-presentation',
  templateUrl: './node-filter-presentation.component.html',
  styleUrls: ['./node-filter-presentation.component.scss']
})
export class NodeFilterPresentationComponent {
  @Input() analysisGraph?: falcorDependencyGraph

  @Output() filterChangeEvent: EventEmitter<> = new EventEmitter()

  types: string[] = []

  ngOnChanges(changes: SimpleChanges) {
    if (changes['analysisGraph']?.currentValue) {
      this.types = Object.values(changes['analysisGraph']?.currentValue).map((val) => {
        console.log(val, "val")
        return val as string
      })
    }
  }
}
