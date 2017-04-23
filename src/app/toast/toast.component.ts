import { Component, Input } from '@angular/core';

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
  `],
  template: `
    <div class="toast padding-base-vertical padding-large-horizontal">
      <span class="main-text white-text">{{message}}</span>
    </div>
  `
})
export class Toast {
  @Input() message;
}
