import { Component, ViewChild, Input, SimpleChanges } from '@angular/core';

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
  @ViewChild('mapcontainer') mapContainer;

  private static options = {
    menu: 'zoom',
    fill_screen: false
  };

  ngOnChanges(changes : SimpleChanges) {
    let newData = changes['pathway'].currentValue ? changes['pathway'].currentValue.fileContent : data;
    Builder(newData, null, null, this.mapContainer.nativeElement, PathwayMap.options);
  }
}
