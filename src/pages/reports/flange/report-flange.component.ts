import { Component } from '@angular/core';
import { BaseReportPage, ReportFlange } from '../../../models/reports';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ReportService } from '../../../services/report.service';
import { Camera } from '@ionic-native/camera';
import { MessageService } from '../../../services/messages.service';


@Component({
  selector: 'page-report-flange',
  templateUrl: 'report-flange.component.html'
})

export class ReportFlangePage extends BaseReportPage {
  public unknow_length: boolean = true;

  constructor(protected navCtrl: NavController,
    navParams: NavParams,
    protected service: ReportService,
    protected alertCtrl: AlertController,
    protected camera: Camera,
    protected message: MessageService,
  ) {
    super(new ReportFlange(navParams.get('project'), navParams.get('component')), navCtrl, service, alertCtrl, camera, message);
  }

}
