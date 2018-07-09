import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Project } from '../../models';
import { ProjectService } from '../../services';
import { ProjectPageBase } from '../projects/project-page-base';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage extends ProjectPageBase {
  public project: Project = new Project();
  private original_project: Project;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public service: ProjectService) {

    super(alertCtrl, service);
    this.original_project = navParams.get("project");
    this.project = new Project(this.original_project);
  }

  public save(): void {
    this.original_project = this.project;
    this.service.save(this.project);
    this.navCtrl.pop();
  }

  after_delete(): void {
    this.navCtrl.pop();
  }
}
