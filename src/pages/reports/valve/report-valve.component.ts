import { Component } from '@angular/core';
import { BaseReportPage, ReportValve } from '../../../models/reports';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ReportService } from '../../../services/report.service';
import { Camera } from '@ionic-native/camera';
import { MessageService } from '../../../services/messages.service';


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
    protected camera: Camera,
    protected message: MessageService,
  ) {
    super(new ReportValve(navParams.get('project'), navParams.get('component')), navCtrl, service, alertCtrl, camera, message);
  }
}
