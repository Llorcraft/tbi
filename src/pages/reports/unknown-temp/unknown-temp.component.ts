import { Component } from "@angular/core";
import { ViewController, NavParams, AlertController } from "ionic-angular";

@Component({
  selector: 'unknown-temp',
  templateUrl: 'unknown-temp.component.html'
})

export class KnownTempPage{
  public medium_temp: number = 0;
  public gas: string = '0';
  constructor(private viewCtrl: ViewController, params: NavParams, private alertCtrl: AlertController) {
    this.medium_temp = params.get('medium_temp') || '';
  }

  isNumber():boolean{
    return this.medium_temp.toString()!= '' && !isNaN(this.medium_temp);
  }

  protected close(): KnownTempPage {
    this.viewCtrl.dismiss(null);
    return this;
  }

  protected ok(): KnownTempPage {
    if(this.gas == '1'){
      this.alertCtrl.create({
        message: 'The properties of the gas affect the heat transfer calculation. Outputs are just an estimation, please contact your insulation expert to have a more accurate calculation',
        buttons: ['Agree']
      }).present();
    };
    this.viewCtrl.dismiss(this.medium_temp);
    return this;
  }
}