import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Project } from '../../../models';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'page-report-safety-surface',
  templateUrl: 'surface.html'
})

export class ReportSafetSurfacePage {
  public type: string = "";
  public components_flag: number = 0;
  public visible_group: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public service: ProjectService,
    public appCtrl: NavController,
    public project: Project) {
    }
  }
