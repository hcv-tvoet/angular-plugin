import { Component, Input, ChangeDetectorRef, OnChanges } from '@angular/core';
import { Pin, PinData, Position } from '../../types';
import { PinComponent } from '../pin/pin.component';

@Component({
  templateUrl: './pins.component.html',
  imports: [
    PinComponent
  ]
})
export class PinsComponent implements OnChanges {
  @Input() rendered!: () => void
  @Input() pins!: PinData['pins']
  @Input() down?: (id: string) => void
  @Input() translate?: (id: string, dx: number, dy: number) => void
  @Input() menu?: (id: string) => void
  @Input() getPointer?: () => Position

  constructor(private cdr: ChangeDetectorRef) {
    this.cdr.detach()
  }

  ngOnChanges(): void {
    this.cdr.detectChanges()
    requestAnimationFrame(() => this.rendered())
  }

  track(_: number, item: Pin) {
    return item.id
  }
}
