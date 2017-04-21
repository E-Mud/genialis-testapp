import { Component, ViewChild, EventEmitter, Output } from '@angular/core';

import { PathwayFileReader } from '../pathway/pathway-file-reader';
import { Pathway } from '../pathway/pathway';

@Component({
  selector: 'app-bar',
  styles: [`
    .app-bar {
      background-color: #FFFFFF;
      height: 4rem;
      box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.3);
    }
  `],
  template: `
    <div class="app-bar" fxLayout="row" fxLayoutAlign="start center">
      <span fxFlex></span>
      <input [hidden]="true" type="file" (change)="fileChange($event)" accept=".json" #fileinput hidden/>
      <div class="flat button" (click)="uploadFile()">
        UPLOAD
      </div>
      <div class="flat button" (click)="switchColor()">
        SWITCH COLOR
      </div>
    </div>
  `
})
export class AppBar {
  @ViewChild('fileinput') fileInput;
  @Output() onPathwayUploaded = new EventEmitter<Pathway>()
  @Output() onColorToggled = new EventEmitter<void>()

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      PathwayFileReader.readPathwayFile(file).then((pathway : Pathway) => {
        this.onPathwayUploaded.emit(pathway);
      });
    }
  }

  uploadFile() {
    this.fileInput.nativeElement.click();
  }

  switchColor() {
    this.onColorToggled.emit();
  }
}
