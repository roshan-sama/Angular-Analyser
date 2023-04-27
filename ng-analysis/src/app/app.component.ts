import { Component } from '@angular/core';
import { HeroService } from 'src/services/hero.service';
import { analysisOutput1 } from 'src/utils/analysis-output';
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
    //@ts-ignore
    const chart = ForceGraph(analysisOutput1, this.chart1)
    console.log(chart, "cht")
    //@ts-ignore
    document.getElementById("chart-div")?.appendChild(chart)
  }

  chart1 = {
    nodeId: (d:any) => d.value[1],
    // nodeGroup: (d: any) => d.group,
    nodeTitle: (d: any) => d.value[1],
    //@ts-ignore
    linkStrokeWidth: (l: any) => Math.sqrt(l.value),
    width: 1000,
    height: 600,
    //@ts-ignore
    invalidation: null // a promise to stop the simulation when the cell is re-run
  }

  chart2 = {
    nodeId: (d:any) =>  d.value[1],
    nodeGroup: (d: any) => analysisOutput1["nodesById"][d.value[0] as string].)
    nodeTitle: (d: any) => d.value[1],
    //@ts-ignore
    linkStrokeWidth: (l: any) => Math.sqrt(l.value),
    width: 1000,
    height: 600,
    //@ts-ignore
    invalidation: null // a promise to stop the simulation when the cell is re-run
  }
}
