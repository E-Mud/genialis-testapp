import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toast',
  styles: [`
    .toast {
      background-color: #000000;
      opacity: 0.75;
      border-radius: 0.6rem;
      position: fixed;
      bottom: 6%;
      left: 50%;
    }
    .toast i {
      cursor: pointer;
    }
  `],
  template: `
    <div class="toast padding-base-vertical padding-large-horizontal" fxLayout="row" fxLayoutAlign="start center">
      <span class="main-text white-text" fxFlex>{{message}}</span>
      <i class="material-icons white-text margin-large-left main-text" (click)="onCloseClicked.emit()">&#xE5CD;</i>
    </div>
  `
})
export class Toast {
  @Input() message;
  @Output() onCloseClicked = new EventEmitter<void>()
}
