import { Component, Input, SimpleChanges, EventEmitter, Output, PipeTransform, Pipe } from '@angular/core';

import { Pathway } from '../pathway/pathway';

@Pipe({name: 'pathwayName'})
export class PathwayName implements PipeTransform {
  transform(pathway): string {
    return pathway && pathway.name ? pathway.name : '[Unknown name]'
  }
}

@Component({
  selector: 'pathway-selector',
  template: `
    <div class="pathway-node-stats card padding-base">
      <div class="padding-base-vertical" fxLayout="row" *ngFor="let pathway of pathwayList">
        <a class="main-text" (click)="onPathwaySelected.emit(pathway)">{{pathway | pathwayName}}</a>
      </div>
    </div>
  `
})
export class PathwaySelector {
  @Input() pathwayList : Pathway[];
  @Output() onPathwaySelected = new EventEmitter<Pathway>();
}
