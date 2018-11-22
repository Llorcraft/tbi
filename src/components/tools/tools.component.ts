import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight';
import { MessageService } from '../../services';
import { WebIntent, IntentOptions } from '@ionic-native/web-intent';

@Component({
  selector: 'tools',
  templateUrl: `tools.component.html`,
  encapsulation: ViewEncapsulation.None
})
export class ToolsComponent implements OnInit {
  public flashlight_on: boolean;
  public apps: any[] = [];

  constructor(
    public flashlight: Flashlight, public message: MessageService, private webIntent: WebIntent) {

  }

  ngOnInit(): void {
    this.flashlight_on = this.flashlight.isSwitchedOn();
    
    (<any>window).plugins.packagemanager.show(true, (apps) => {
      this.apps = apps.map(a => a.split(';')[1]);

    }, (e) => {
      this.message.alert('Error', e.message);
    });
  }

  toggle_light() {
    //this.message.alert('Flash', `${this.flashlight.isSwitchedOn()}`)
    if (!this.flashlight.isSwitchedOn()) {
      this.flashlight.switchOn();
      this.flashlight_on = true;
    } else {
      this.flashlight.switchOff();
      this.flashlight_on = false;
    }
  }

  open_calculator() {
    const options: IntentOptions = {
      action: this.webIntent.ACTION_VIEW,
      url: this.apps.find(p=>!!p.match(/calc/g)),
      type: 'application/vnd.android.package-archive'
    };

    this.webIntent.startActivity(options).then(() => {
      this.message.alert('Ok', this.apps.find(p=>!!p.match(/calc/g)));
    }, (err) => {
      this.message.alert('Error', err.message);
    });
  }

}
