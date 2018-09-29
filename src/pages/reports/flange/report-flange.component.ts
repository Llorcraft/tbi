import { Component } from '@angular/core';
import { BaseReportPage, ReportFlange } from '../../../models/reports';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ReportService } from '../../../services/report.service';
import { PictureService } from '../../../services/picture.service';

@Component({
  selector: 'page-report-flange',
  templateUrl: 'report-flange.component.html'
})

export class ReportFlangePage extends BaseReportPage {
  public unknow_length: boolean = true;

  constructor(protected navCtrl: NavController,
    navParams: NavParams,
    protected service: ReportService,
    protected alertCtrl: AlertController,
    protected camera: PictureService
  ) {
    super(new ReportFlange(navParams.get('project'), navParams.get('component')), navCtrl, service, alertCtrl, camera);
  }

}
