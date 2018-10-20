import { Component } from '@angular/core';
import { BaseReportPage, ReportValve } from '../../../models/reports';
import { NavController, NavParams, AlertController, Keyboard } from 'ionic-angular';
import { ReportService } from '../../../services/report.service';
import { MessageService } from '../../../services/messages.service';
import { PictureService } from '../../../services';


@Component({
  selector: 'page-report-valve',
  templateUrl: 'report-valve.component.html'
})

export class ReportValvePage extends BaseReportPage {
  public unknow_length: boolean = true;

  constructor(protected navCtrl: NavController,
    navParams: NavParams,
    protected service: ReportService,
    protected alertCtrl: AlertController,
    protected picture: PictureService,
    protected message: MessageService,
    protected keyboard: Keyboard
  ) {
    super(new ReportValve(navParams.data.project, navParams.data.component, navParams.data.report), navCtrl, service, alertCtrl, picture, message, keyboard);
  }
}
