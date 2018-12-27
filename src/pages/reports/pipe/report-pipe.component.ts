import { Component } from '@angular/core';
import { BaseReportPage } from '../../../models/reports';
import { NavController, NavParams, AlertController, Keyboard, ModalController } from 'ionic-angular';
import { ReportService } from '../../../services/report.service';
import { ReportPipe } from '../../../models/reports/report-pipe.class';
import { MessageService } from '../../../services/messages.service';
import { PictureService } from '../../../services';

@Component({
  selector: 'page-report-pipe',
  templateUrl: 'report-pipe.component.html'
})

export class ReportPipePage extends BaseReportPage {
  constructor(protected navCtrl: NavController,
    navParams: NavParams,
    protected service: ReportService,
    protected alertCtrl: AlertController,
    protected picture: PictureService,
    protected message: MessageService,
    protected keyboard: Keyboard,
    public modalCtrl: ModalController,
  ) {
    super(new ReportPipe(navParams.data.project, navParams.data.component, navParams.data.report), navCtrl, service, alertCtrl, picture, message, keyboard, modalCtrl);
  }
}
