import { Component } from '@angular/core';
import { BaseReportPage } from '../../../models/reports';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ReportService } from '../../../services/report.service';
import { Camera } from '@ionic-native/camera';
import { MessageService } from '../../../services/messages.service';
import { ReportLeakage } from '../../../models/reports/report-leakage';
import { ReportBase } from '../../../models';

@Component({
  selector: 'page-report-leakage',
  templateUrl: 'report-leakage.component.html'
})

export class ReportLeakagePage extends BaseReportPage {
  constructor(protected navCtrl: NavController,
    navParams: NavParams,
    protected service: ReportService,
    protected alertCtrl: AlertController,
    protected camera: Camera,
    protected message: MessageService,
  ) {
    super(new ReportLeakage(navParams.data.project, navParams.data.component, navParams.data.report), navCtrl, service, alertCtrl, camera, message);
  }

  protected calculate(): ReportBase {
    this.start_changes_observer();
    if (!this.form.invalid) {
      this.view = 'result';
    } else {
      this.view = 'form';
    }
    return null;
  }
}
