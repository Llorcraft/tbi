import { Component } from '@angular/core';
import { BaseReportPage, ReportInsulatedSurface } from '../../../models/reports';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ReportService } from '../../../services/report.service';
import { Camera } from '@ionic-native/camera';
import { MessageService } from '../../../services/messages.service';

@Component({
  selector: 'page-report-surface',
  templateUrl: 'report-isurface.component.html'
})

export class ReportInsulatedSurfacePage extends BaseReportPage {
  public unknow_surface: boolean = false;
  
  constructor(protected navCtrl: NavController,
    navParams: NavParams,
    protected service: ReportService,
    protected alertCtrl: AlertController,
    protected camera: Camera,
    protected message: MessageService,
  ) {
    super(new ReportInsulatedSurface(navParams.data.project, navParams.data.component, navParams.data.report), navCtrl, service, alertCtrl, camera, message);
  }
}
