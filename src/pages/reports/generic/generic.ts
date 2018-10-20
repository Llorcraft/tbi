import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Keyboard } from 'ionic-angular';
import { ReportService } from '../../../services/report.service';
import { ReportGeneric } from '../../../models/reports/report-generic.class';
import { BaseReportPage } from '../../../models/reports';
import { MessageService } from '../../../services/messages.service';
import { ReportBase } from '../../../models';
import { PictureService } from '../../../services';

@Component({
  selector: 'page-generic-report',
  templateUrl: 'generic.html',
})

export class GenericReportPage extends BaseReportPage {

  constructor(protected navCtrl: NavController,
    navParams: NavParams,
    protected service: ReportService,
    protected alertCtrl: AlertController,
    protected picture: PictureService,
    protected message: MessageService,
    protected keyboard: Keyboard
  ) {
    super(new ReportGeneric(navParams.data.project, navParams.data.component, navParams.data.report), navCtrl, service, alertCtrl, picture, message, keyboard);
  }

  protected calculate(): ReportBase {
    this.start_changes_observer();
    if (!this.form.invalid) {
      this.save();
    } else {
      this.view = 'form';
    }
    return null;
  }
}
