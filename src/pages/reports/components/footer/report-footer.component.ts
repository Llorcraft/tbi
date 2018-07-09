import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ProjectService } from '../../../../services/project.service';

@Component({
  selector: 'report-footer',
  templateUrl: './report-footer.component.html'
})
export class ReportFooterComponent {
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public service: ProjectService) { }

}
