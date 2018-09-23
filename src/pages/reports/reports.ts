import { REPORT } from './../../const/report.const';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Project, ReportBase } from '../../models';
import { ProjectService } from '../../services/project.service';
import { ProjectsPage } from '../projects/projects';
import { ReportRouter } from '../../models/report-router';
import { Segment } from './segment/segment.class';
import { SummaryPage } from '../summary/summary';
import { TbiComponent } from '../../models/component';

@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html'
})

export class ReportsPage extends ReportRouter {
  public report: ReportBase;
  public type: string = "";
  public segment: Segment = new Segment();
  public REPORT = REPORT;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public service: ProjectService) {

    super(navParams.get('project') as Project, navParams.get('component') as TbiComponent, navCtrl);
    this.type = navParams.get('type') || '';
    this.report = navParams.get('report');
    this.segment.set(this.type);
  }

  ionViewDidLoad() {
    if (!this.navParams.get('message')) return;

    let toast = this.alertCtrl.create({
      title: null,
      message: this.navParams.get('message'),
      buttons: [{
        text: 'OK'
      }]
    });
    toast.present();
  }

  protected disabled_for(family: string) {
    switch (family) {
      case 'insulation':
        return !!this.component.reports.filter(r => !!r.path.match(/insulation/gi)).length;
      default:
        return false;
    }
  }

  protected open_summary(): void {
    this.navCtrl.push(SummaryPage, { project: this.project });
  }

  public navigate_to(name: string | number, report_name: string): void {
    let page: any = null
    let params: any = { project: this.project, parent: this, component: this.component };
    switch (name) {
      default:
        page = ReportsPage;
        params.type = name;
    }
    this.navCtrl.push(page, params);
  }
  public go_back(): void {
    if (!this.type)
      this.navigate_to_projects();
    else
      this.navigate_to('', 'Reports');
  }
  public navigate_to_projects(): void {
    this.navCtrl.push(ProjectsPage, {
      project: this.project,
      parent: this.navParams.get('parent')
    });
  }
}
