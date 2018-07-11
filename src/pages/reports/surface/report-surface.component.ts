import { Component } from '@angular/core';
import { BaseReportPage, ReportSurface } from '../../../models/reports';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-report-surface',
  templateUrl: 'report-surface.component.html'
})

export class ReportSurfacePage extends BaseReportPage {

  // public report: ReportSurface = new ReportSurface(
  //   this.navParams.get('project')
  // );

  constructor(protected navCtrl: NavController, navParams: NavParams) {
    super(new ReportSurface(navParams.get('project')), navCtrl);
  }
}
