import { Component } from '@angular/core';

import { Pathway } from './pathway/pathway';

@Component({
  selector: 'app-root',
  styles: [`
    .app-component {
      height: 100%;
    }
    .app-component pathway-map {
      padding-top: 1.6rem;
    }
  `],
  template: `
    <div class="app-component" fxLayout="column">
      <app-bar (onPathwayUploaded)="changePathway($event)" (onColorToggled)="toggleColor()"></app-bar>
      <pathway-map [pathway]="currentPathway" [reactionColor]="currentColor" fxFlex></pathway-map>
    </div>
  `
})
export class AppComponent {
  currentPathway : Pathway;
  currentColor : string = 'default';

  changePathway(pathway) {
    this.currentPathway = pathway;
  }

  toggleColor() {
    this.currentColor = this.currentColor === 'default' ? 'green' : 'default'
  }
}
