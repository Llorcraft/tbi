import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'tools',
  templateUrl: `tools.component.html`,
  encapsulation: ViewEncapsulation.None
})
export class ToolsComponent implements OnInit {
  constructor(private flashlight: Flashlight) { }

  toggle_light() { }

  open_calculator() { }

  ngOnInit(): void {
    if (!this.flashlight.isSwitchedOn())
      this.flashlight.switchOn();
    else
      this.flashlight.switchOff();
  }
}
