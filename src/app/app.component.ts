import { Component } from '@angular/core';

import { Pathway } from './pathway/pathway';

import * as data from './pathway-map/e_coli.iJO1366.central_metabolism.json';

@Component({
  selector: 'app-root',
  styles: [`
    .app-component {
      height: 100%;
    }
  `],
  template: `
    <div class="app-component" fxLayout="column">
      <app-bar (onPathwayUploaded)="changePathway($event)" (onColorToggled)="toggleColor()"></app-bar>
      <div fxFlex class="padding-large-top" fxLayout="row">
        <div class="padding-base" fxFlex="20">
          <p class="secondary-text">Node types</p>
          <pathway-node-stats [pathway]="currentPathway"></pathway-node-stats>
        </div>
        <pathway-map [pathway]="currentPathway" [reactionColor]="currentColor" fxFlex></pathway-map>
      </div>
    </div>
  `
})
export class AppComponent {
  currentPathway : Pathway = new Pathway(data);
  currentColor : string = 'default';

  changePathway(pathway) {
    this.currentPathway = pathway;
  }

  toggleColor() {
    this.currentColor = this.currentColor === 'default' ? 'green' : 'default'
  }
}
