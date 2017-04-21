import { Component, ViewChild } from '@angular/core';

import { Builder } from 'escher-vis'

import * as data from './e_coli.iJO1366.central_metabolism.json'

@Component({
  selector: 'pathway-map',
  template: `
    <div>
      <div #mapcontainer></div>
    </div>
  `
})
export class PathwayMap {
  @ViewChild('mapcontainer') mapContainer;

  ngAfterViewInit(){
    var options = {
      menu: 'zoom',
      fill_screen: true
    };

    Builder(data, null, null, this.mapContainer.naiveElement, options);
  }
}
