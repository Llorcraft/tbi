import { Component } from '@angular/core';
import { BaseReportPage, ReportCondensation } from '../../../models/reports';
import { NavController, NavParams, AlertController, Keyboard } from 'ionic-angular';
import { ReportService } from '../../../services/report.service';
import { ReportBase } from '../../../models/report-base';
import { MessageService } from '../../../services/messages.service';
import { PictureService } from '../../../services';

@Component({
  selector: 'page-report-condensation',
  templateUrl: 'report-condensation.component.html'
})

export class ReportCondensationPage extends BaseReportPage {

  constructor(protected navCtrl: NavController,
    navParams: NavParams,
    protected service: ReportService,
    protected alertCtrl: AlertController,
    protected picture: PictureService,
    protected message: MessageService,
    protected keyboard: Keyboard
  ) {
    super(new ReportCondensation(navParams.data.project, navParams.data.component, navParams.data.report), navCtrl, service, alertCtrl, picture, message, keyboard);
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