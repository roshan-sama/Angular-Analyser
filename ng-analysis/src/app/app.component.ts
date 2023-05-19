import { Component } from '@angular/core';
import { HeroService } from 'src/services/hero.service';
import { analysisOutput } from 'src/utils/analysis-output';
import { ForceGraph } from 'src/utils/force-graph';
import { falcorDependencyGraph } from './interfaces/falcor-dependency-graph';

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
    const chart = ForceGraph(analysisOutput, this.chart)
    console.log(chart, "cht")
    //@ts-ignore
    document.getElementById("chart-div")?.appendChild(chart)
  }

  chart = {
    nodeId: (d: any) => d.value[1],
    nodeGroup: (d: any) => analysisOutput.nodesById[d.value[1]].type,
    nodeTitle: (d: any) => analysisOutput.nodesById[d.value[1]].name,
    //@ts-ignore
    linkStrokeWidth: (l: any) => Math.sqrt(l.value),
    linkSource: ({ source }: falcorDependencyGraph["links"][0]) => source.value[1],
    linkTarget: ({ target }: falcorDependencyGraph["links"][0]) => target.value[1],
    width: 1000,
    height: 600,
    //@ts-ignore
    invalidation: null // a promise to stop the simulation when the cell is re-run
  }
}

//TODO: Distinguish between arrow functions, and const, var and let variables in naming using 
//project.getSourceFile('ng-analysis/src/app/app.component.ts').getVariableStatements()
export const valueitem = () => {
  console.log("test")
}

export var gly = ''
export let hluy = ''