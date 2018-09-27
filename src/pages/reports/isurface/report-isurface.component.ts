import { Component } from '@angular/core';
import { BaseReportPage, ReportInsulatedSurface } from '../../../models/reports';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ReportService } from '../../../services/report.service';
import { CameraService } from '../../../services/camera';

@Component({
  selector: 'page-report-surface',
  templateUrl: 'report-isurface.component.html'
})

export class ReportInsulatedSurfacePage extends BaseReportPage {
  public unknow_surface: boolean = false;
  
  constructor(protected navCtrl: NavController,
    navParams: NavParams,
    protected service: ReportService,
    protected alertCtrl: AlertController,
    protected camera: CameraService
  ) {
    super(new ReportInsulatedSurface(navParams.get('project'), navParams.get('component')), navCtrl, service, alertCtrl, camera);
  }
}
