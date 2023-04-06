import { Component } from '@angular/core';
import { HeroService } from 'src/services/hero.service';
import { analysisOutput } from 'src/utils/analysis-output';
import { miserables } from 'src/utils/fg-example';
import { ForceGraph } from 'src/utils/force-graph';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-analysis';

  constructor(private hero: HeroService) { }

  ngOnInit() {
    const chart = ForceGraph(analysisOutput, {
      nodeId: d => d.value[1],
      // nodeGroup: (d: any) => d.group,
      nodeTitle: (d: any) => d.value[1],
      //@ts-ignore
      linkStrokeWidth: (l: any) => Math.sqrt(l.value),
      width: 1000,
      height: 600,
      //@ts-ignore
      invalidation: null // a promise to stop the simulation when the cell is re-run
    })
    console.log(chart, "cht")
    //@ts-ignore
    document.getElementById("chart-div")?.appendChild(chart)
  }
}
