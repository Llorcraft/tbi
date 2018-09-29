import { Component } from '@angular/core';
import { BaseReportPage, ReportValve } from '../../../models/reports';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ReportService } from '../../../services/report.service';
import { PictureService } from '../../../services/picture.service';

@Component({
  selector: 'page-report-valve',
  templateUrl: 'report-valve.component.html'
})

export class ReportValvePage extends BaseReportPage {
  public unknow_length: boolean = true;

  constructor(protected navCtrl: NavController,
    navParams: NavParams,
    protected service: ReportService,
    protected alertCtrl: AlertController,
    protected camera: PictureService
  ) {
    super(new ReportValve(navParams.get('project'), navParams.get('component')), navCtrl, service, alertCtrl, camera);
  }
}
