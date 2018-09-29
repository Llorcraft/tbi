import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ReportService } from '../../../services/report.service';
import { PictureService } from '../../../services/picture.service';
import { ReportGeneric } from '../../../models/reports/report-generic.class';
import { BaseReportPage } from '../../../models/reports';

@Component({
  selector: 'page-generic-report',
  templateUrl: 'generic.html'
})

export class GenericReportPage extends BaseReportPage {

  constructor(protected navCtrl: NavController,
    navParams: NavParams,
    protected service: ReportService,
    protected alertCtrl: AlertController,
    protected camera: PictureService
  ) {
    super(new ReportGeneric(navParams.get('project'), navParams.get('component')), navCtrl, service, alertCtrl, camera);
  }
}
