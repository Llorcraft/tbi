import { Component } from '@angular/core';
import { BaseReportPage, ReportSurface } from '../../../models/reports';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ReportService } from '../../../services/report.service';
import { CameraService } from '../../../services/camera';
import { ReportBase } from '../../../models';

@Component({
  selector: 'page-report-surface',
  templateUrl: 'report-surface.component.html'
})

export class ReportSurfacePage extends BaseReportPage {
  public unknow_surface: boolean = false;

  constructor(protected navCtrl: NavController,
    navParams: NavParams,
    protected service: ReportService,
    protected alertCtrl: AlertController,
    protected camera: CameraService
  ) {
    super(new ReportSurface(navParams.get('project'), navParams.get('component')), navCtrl, service, alertCtrl, camera);
  }

  public toggle_know() {
    if (!!this.unknow_surface) this.report.component.fields.surface = null;
  }

  private before_calculate(temp: number) {
    this.report.component.fields.surface_temp = temp;
    setTimeout(() => {
      this.calculate();
    }, 200);
  }

  protected ask_calculate(): ReportBase {
    if (this.report.component.fields.surface_temp != null
      || !this.report.component.has_markers) return this.calculate();
    let confirm = this.alertCtrl.create({
      title: `Surface`,
      message: `Which temperature would you like to use for calculation?`,
      cssClass: `ion-dialog-horizontal`,
      buttons: [
        {
          text: `Average ${this.report.component.surface_temp}ºC`,
          handler: () => this.before_calculate(this.report.component.fields.surface_temp = this.report.component.surface_temp)
        },
        {
          text: `Minimum ${this.report.component.min_temp}ºC`,
          handler: () => this.before_calculate(this.report.component.fields.surface_temp = this.report.component.min_temp)
        },
        {
          text: `Maximun ${this.report.component.max_temp}ºC`,
          handler: () => this.before_calculate(this.report.component.fields.surface_temp = this.report.component.max_temp)
        }
      ]
    });
    confirm.present();
  }
}
