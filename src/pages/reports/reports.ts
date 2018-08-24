import { REPORT } from './../../const/report.const';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Project } from '../../models';
import { ProjectService } from '../../services/project.service';
import { GenericReportPage } from './';
import { ProjectsPage } from '../projects/projects';
import { ReportRouter } from '../../models/report-router';
import { Segment } from './segment/segment.class';
import { SummaryPage } from '../summary/summary';

@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html'
})

export class ReportsPage extends ReportRouter {
  public project: Project;
  public type: string = "";
  public segment: Segment = new Segment();
  public REPORT = REPORT;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public service: ProjectService) {

    super(navParams.get('project') as Project, navCtrl);
    this.project = navParams.get('project');
    this.type = navParams.get('type') || '';
    this.segment.set(this.type);
  }

  protected open_summary():void{
    this.navCtrl.push(SummaryPage, {project: this.project});
  }

  public navigate_to(name: string | number, report_name: string): void {
    let page: any = null
    let params: any = { project: this.project, parent: this };
    switch (name) {
      case 'generic':
        page = GenericReportPage;
        params.report_name = report_name;
        break;
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
