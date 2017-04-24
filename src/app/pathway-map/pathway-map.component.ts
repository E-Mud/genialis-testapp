import { Component, ViewChild, Input, SimpleChanges, SimpleChange } from '@angular/core';

import { Builder } from 'escher-vis'

@Component({
  selector: 'pathway-map',
  styles: [`
    .pathway-map {
      height: 100%;
    }
    .pathway-map .escher-container {
      background-color: transparent;
    }
    :host /deep/ .segment {
      cursor: pointer;
    }
  `],
  template: `
    <div class="pathway-map" fxLayout="column">
      <div #mapcontainer fxFlex></div>
      <toast *ngIf="showingMessage" [message]="toastMessage" (onCloseClicked)="hideMessage()"></toast>
    </div>
  `
})
export class PathwayMap {
  @Input() pathway;
  @Input() reactionColor;
  @ViewChild('mapcontainer') mapContainer;

  private escherBuilder : Builder;
  private showingMessage : boolean = false;
  private toastMessage : string;

  private static GREEN = '#2ECC71';
  private static BUILDER_OPTIONS = {
    menu: 'zoom',
    fill_screen: false,
    use_3d_transform: true,
    enable_editing: false,
    never_ask_before_quit: true,
    enable_tooltips: true
  };

  private pathwayHasChanged(changes : SimpleChanges) {
    return !!changes['pathway']
  }

  private loadMap(changes : SimpleChanges) {
    const newData = changes['pathway'].currentValue.mapContent;
    return Builder(newData, null, null, this.mapContainer.nativeElement, PathwayMap.BUILDER_OPTIONS);
  }

  private setReactionColor() {
    this.escherBuilder.selection.selectAll('svg.escher-svg .reaction .segment')
    .style('stroke', () => {
      return this.reactionColor === 'green' ? PathwayMap.GREEN : null
    })
  }

  private getNodeName(nodeId) {
    const node = this.pathway.nodes[nodeId];
    let name = node.node_id;

    if(node.name){
      name += ` (${node.name})`
    }

    return name;
  }

  private showMessage(segment) {
    const fromNode = this.getNodeName(segment.from_node_id)
    const toNode = this.getNodeName(segment.to_node_id)

    this.showingMessage = true;
    this.toastMessage = `From ${fromNode} to ${toNode}`
  }

  hideMessage() {
    this.showingMessage = false;
  }

  ngOnChanges(changes : SimpleChanges) {
    if(this.pathwayHasChanged(changes)){
      this.escherBuilder = this.loadMap(changes)
    }

    this.setReactionColor();

    this.escherBuilder.selection.selectAll('.reaction .segment')
      .on('click', (segment) => this.showMessage(segment));
  }
}
