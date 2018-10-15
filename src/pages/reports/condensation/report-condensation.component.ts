import { Component } from '@angular/core';
import { BaseReportPage, ReportCondensation } from '../../../models/reports';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ReportService } from '../../../services/report.service';
import { ReportBase } from '../../../models/report-base';
import { Camera } from '@ionic-native/camera';
import { MessageService } from '../../../services/messages.service';

@Component({
  selector: 'page-report-condensation',
  templateUrl: 'report-condensation.component.html'
})

export class ReportCondensationPage extends BaseReportPage {

  constructor(protected navCtrl: NavController,
    navParams: NavParams,
    protected service: ReportService,
    protected alertCtrl: AlertController,
    protected camera: Camera,
    protected message: MessageService,
  ) {
    super(new ReportCondensation(navParams.data.project, navParams.data.component, navParams.data.report), navCtrl, service, alertCtrl, camera, message);
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
