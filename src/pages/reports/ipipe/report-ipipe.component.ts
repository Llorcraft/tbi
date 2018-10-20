import { Component } from '@angular/core';
import { BaseReportPage } from '../../../models/reports';
import { NavController, NavParams, AlertController, Keyboard } from 'ionic-angular';
import { ReportService } from '../../../services/report.service';
import { ReportInsulatedPipe } from '../../../models/reports/report-ipipe.class';
import { MessageService } from '../../../services/messages.service';
import { PictureService } from '../../../services';

@Component({
  selector: 'page-report-pipe',
  templateUrl: 'report-ipipe.component.html'
})

export class ReportInsulatedPipePage extends BaseReportPage {
  constructor(protected navCtrl: NavController,
    navParams: NavParams,
    protected service: ReportService,
    protected alertCtrl: AlertController,
    protected picture: PictureService,
    protected message: MessageService,
    protected keyboard: Keyboard
  ) {
    super(new ReportInsulatedPipe(navParams.data.project, navParams.data.component, navParams.data.report), navCtrl, service, alertCtrl, picture, message, keyboard);
  }
}
