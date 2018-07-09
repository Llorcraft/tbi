import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ProjectService } from '../../../services/project.service';
import { PictureReport } from '../picture-report';

@Component({
  selector: 'page-generic-report',
  templateUrl: 'generic.html'
})

export class GenericReportPage extends PictureReport {
  public location: string = ''//Here component or location';
  public leakage: string = ''//Here leakage long text';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public service: ProjectService) {
    super(navCtrl, navParams, alertCtrl, service);

  }
}
