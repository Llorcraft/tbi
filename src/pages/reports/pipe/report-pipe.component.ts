import { Component } from '@angular/core';
import { BaseReportPage } from '../../../models/reports';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ReportService } from '../../../services/report.service';
import { ReportPipe } from '../../../models/reports/report-pipe.class';
import { Camera } from '@ionic-native/camera';
import { MessageService } from '../../../services/messages.service';

@Component({
  selector: 'page-report-pipe',
  templateUrl: 'report-pipe.component.html'
})

export class ReportPipePage extends BaseReportPage {
  constructor(protected navCtrl: NavController,
    navParams: NavParams,
    protected service: ReportService,
    protected alertCtrl: AlertController,
    protected camera: Camera,
    protected message: MessageService,
  ) {
    super(new ReportPipe(navParams.data.project, navParams.data.component, navParams.data.report), navCtrl, service, alertCtrl, camera, message);
  }
}
