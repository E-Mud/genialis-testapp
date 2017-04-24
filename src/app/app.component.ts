import { Component } from '@angular/core';

import { Pathway } from './pathway/pathway';

@Component({
  selector: 'app-root',
  styles: [`
    .app-component {
      height: 100%;
    }
    .app-component .no-pathway-msg {
      font-size: 2rem;
    }
  `],
  template: `
    <div class="app-component" fxLayout="column">
      <app-bar (onPathwayUploaded)="addPathway($event)" (onColorToggled)="toggleColor()" [showColorToggler]="!!currentPathway"></app-bar>
      <div fxFlex *ngIf="!currentPathway" fxLayout="row" fxLayoutAlign="center center" class="no-pathway-msg secondary-text">
        <span>There is no loaded pathway. Click on Upload File to load one.</span>
      </div>
      <div fxFlex *ngIf="!!currentPathway" class="padding-large-top" fxLayout="row">
        <div class="padding-base" fxFlex="20">
          <p class="secondary-text">Node types</p>
          <pathway-node-stats [pathway]="currentPathway"></pathway-node-stats>
          <p class="secondary-text margin-large-top">Recent maps</p>
          <pathway-selector [pathwayList]="pathwayList" (onPathwaySelected)="changePathway($event)"></pathway-selector>
        </div>
        <pathway-map [pathway]="currentPathway" [reactionColor]="currentColor" fxFlex></pathway-map>
      </div>
    </div>
  `
})
export class AppComponent {
  currentPathway : Pathway;
  pathwayList : Pathway[] = [];
  currentColor : string = 'default';

  changePathway(pathway) {
    if(this.currentPathway !== pathway){
      this.currentPathway = pathway;
    }
  }

  addPathway(pathway) {
    this.pathwayList.push(pathway);
    this.changePathway(pathway);
  }

  toggleColor() {
    this.currentColor = this.currentColor === 'default' ? 'green' : 'default'
  }
}
