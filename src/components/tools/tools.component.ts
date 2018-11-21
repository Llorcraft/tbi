import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight';
import { MessageService } from '../../services';

@Component({
  selector: 'tools',
  templateUrl: `tools.component.html`,
  encapsulation: ViewEncapsulation.None
})
export class ToolsComponent implements OnInit{
  public flashlight_on: boolean;
  
  constructor(public flashlight: Flashlight, public message: MessageService) { }

  ngOnInit(): void {
    this.flashlight_on = this.flashlight.isSwitchedOn();
  }
  
  toggle_light() {
    //this.message.alert('Flash', `${this.flashlight.isSwitchedOn()}`)
    if (!this.flashlight.isSwitchedOn()){
      this.flashlight.switchOn();
      this.flashlight_on = true;
    }else{
      this.flashlight.switchOff();
      this.flashlight_on = false;
    }
  }

  open_calculator() { }

}
