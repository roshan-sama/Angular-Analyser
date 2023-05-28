import { Component, Input } from '@angular/core';
import { falcorDependencyGraph } from '../interfaces/falcor-dependency-graph';

@Component({
  selector: 'node-details-presentation',
  templateUrl: './node-details-presentation.component.html',
  styleUrls: ['./node-details-presentation.component.scss']
})
export class NodeDetailsPresentationComponent {
  @Input() nodeDetails?: falcorDependencyGraph["nodesById"][0]

  
}
