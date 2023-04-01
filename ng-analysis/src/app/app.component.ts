import { Component } from '@angular/core';
import { HeroService } from 'src/services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-analysis';

  constructor(private hero: HeroService){}
}
