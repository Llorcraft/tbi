import { Component } from '@angular/core';
import { BaseReportPage } from '../../../models/reports';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ReportService } from '../../../services/report.service';
import { ReportInsulatedPipe } from '../../../models/reports/report-ipipe.class';
import { Camera } from '@ionic-native/camera';
import { MessageService } from '../../../services/messages.service';

@Component({
  selector: 'page-report-pipe',
  templateUrl: 'report-ipipe.component.html'
})

export class ReportInsulatedPipePage extends BaseReportPage {
  constructor(protected navCtrl: NavController,
    navParams: NavParams,
    protected service: ReportService,
    protected alertCtrl: AlertController,
    protected camera: Camera,
    protected message: MessageService,
  ) {
    super(new ReportInsulatedPipe(navParams.get('project'), navParams.get('component')), navCtrl, service, alertCtrl, camera, message);
  }
}
