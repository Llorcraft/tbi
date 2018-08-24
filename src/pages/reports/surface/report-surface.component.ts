import { Component } from '@angular/core';
import { BaseReportPage, ReportSurface } from '../../../models/reports';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ReportService } from '../../../services/report.service';

@Component({
  selector: 'page-report-surface',
  templateUrl: 'report-surface.component.html'
})

export class ReportSurfacePage extends BaseReportPage {

  constructor(protected navCtrl: NavController,
    navParams: NavParams,
    protected service: ReportService,
    protected alertCtrl: AlertController,
  ) {
    super(new ReportSurface(navParams.get('project')), navCtrl, service, alertCtrl);
  }
}
