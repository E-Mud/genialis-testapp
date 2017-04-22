import { Component, Input, SimpleChanges } from '@angular/core';

import { Pathway } from '../pathway/pathway';

@Component({
  selector: 'pathway-node-stats',
  template: `
    <div class="pathway-node-stats card padding-base">
      <div class="padding-base-vertical" fxLayout="row" *ngFor="let nodeType of nodeCountByType">
        <span fxFlex>{{nodeType.type}}</span>
        <span>{{nodeType.count}}</span>
      </div>
    </div>
  `
})
export class PathwayNodeStats {
  @Input() pathway : Pathway;
  private nodeCountByType : object[];

  ngOnChanges(changes : SimpleChanges) {
    let pathway = changes['pathway'].currentValue;
    let nodeCount = {};

    for(let nodeId in pathway.nodes) {
      let nodeType = pathway.nodes[nodeId].node_type;

      if(!nodeCount[nodeType]){
        nodeCount[nodeType] = 1;
      }else{
        nodeCount[nodeType]++;
      }
    }

    this.nodeCountByType = [];

    for(let nodeType in nodeCount) {
      this.nodeCountByType.push({type: nodeType, count: nodeCount[nodeType]});
    }
  }
}
