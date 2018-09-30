import { Component } from '@angular/core';
import { BaseReportPage, ReportSurface } from '../../../models/reports';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ReportService } from '../../../services/report.service';
import { Camera } from '@ionic-native/camera';
import { MessageService } from '../../../services/messages.service';

@Component({
  selector: 'page-report-surface',
  templateUrl: 'report-surface.component.html'
})

export class ReportSurfacePage extends BaseReportPage {
  public unknow_surface: boolean = false;

  constructor(protected navCtrl: NavController,
    navParams: NavParams,
    protected service: ReportService,
    protected alertCtrl: AlertController,
    protected camera: Camera,
    protected message: MessageService,
  ) {
    super(new ReportSurface(navParams.get('project'), navParams.get('component')), navCtrl, service, alertCtrl, camera, message);
  }
}
