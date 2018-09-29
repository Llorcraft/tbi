import { Component } from '@angular/core';
import { BaseReportPage } from '../../../models/reports';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ReportService } from '../../../services/report.service';
import { PictureService } from '../../../services/picture.service';
import { ReportPipe } from '../../../models/reports/report-pipe.class';

@Component({
  selector: 'page-report-pipe',
  templateUrl: 'report-pipe.component.html'
})

export class ReportPipePage extends BaseReportPage {
  constructor(protected navCtrl: NavController,
    navParams: NavParams,
    protected service: ReportService,
    protected alertCtrl: AlertController,
    protected camera: PictureService
  ) {
    super(new ReportPipe(navParams.get('project'), navParams.get('component')), navCtrl, service, alertCtrl, camera);
  }
}
