import { Component, ViewChild, Input, SimpleChanges, SimpleChange } from '@angular/core';

import { Builder } from 'escher-vis'

import * as data from './e_coli.iJO1366.central_metabolism.json'

@Component({
  selector: 'pathway-map',
  styles: [`
    .pathway-map {
      height: 100%;
    }
    .pathway-map .escher-container {
      background-color: #E0E0E0;
    }
  `],
  template: `
    <div class="pathway-map" fxLayout="column">
      <div #mapcontainer fxFlex></div>
    </div>
  `
})
export class PathwayMap {
  @Input() pathway;
  @Input() reactionColor;
  @ViewChild('mapcontainer') mapContainer;

  private escherBuilder;

  private static GREEN = '#2ECC71';
  private static BUILDER_OPTIONS = {
    menu: 'zoom',
    fill_screen: false,
    use_3d_transform: true,
    enable_editing: false,
    never_ask_before_quit: true,
    enable_tooltips: false
  };

  private pathwayHasChanged(changes : SimpleChanges) {
    return !!changes['pathway']
  }

  private getNewPathway(changes : SimpleChanges) {
    return changes['pathway'].currentValue ? changes['pathway'].currentValue.mapContent : data;
  }

  private loadMap(changes : SimpleChanges) {
    let newData = this.getNewPathway(changes)
    return Builder(newData, null, null, this.mapContainer.nativeElement, PathwayMap.BUILDER_OPTIONS);
  }

  private setReactionColor() {
    this.escherBuilder.selection.selectAll('svg.escher-svg .reaction .segment')
    .style('stroke', () => {
      return this.reactionColor === 'green' ? PathwayMap.GREEN : null
    })
  }

  ngOnChanges(changes : SimpleChanges) {
    if(this.pathwayHasChanged(changes)){
      this.escherBuilder = this.loadMap(changes)
    }

    this.setReactionColor();
  }
}
