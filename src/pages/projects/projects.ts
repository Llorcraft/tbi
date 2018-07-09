import { Project } from './../../models/project';
import { ProjectService } from './../../services';
import { Component } from '@angular/core';
import { NavController, Platform, ActionSheetController, AlertController, NavParams } from 'ionic-angular';
import { ProjectPageBase } from './project-page-base';
import { EditProjectPage } from './edit';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { ReportsPage } from '../reports';
import { ReportCategory } from '../../models';

@Component({
  selector: 'page-project',
  templateUrl: 'projects.html'
})

export class ProjectsPage extends ProjectPageBase {
  public projects: Project[] = [];
  public edit_mode: boolean = false;
  public orientation: string = "";
  public user_name = '';
  public top_categories: ReportCategory[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: ProjectService,
    public platform: Platform,
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController,
    orientation: ScreenOrientation) {

    super(alertCtrl, service);
    this.orientation = orientation.type;
    this.user_name = this.navParams.get("user_name") || this.user_name
    orientation.onChange().subscribe(
      () => this.orientation = orientation.type
    );
  }

  public open_report(project: Project): void {
    this.navCtrl.push(ReportsPage, {
      project: project,
      parent: this
    })
  }
  ask_for_action(project: Project) {
    this.actionSheetCtrl.create({
      //title: 'What would you like to do?',
      cssClass: 'project-action-sheet',
      buttons: [
        {
          text: 'Report',
          icon: 'document',
          handler: () => {
            this.navCtrl.push(ReportsPage, {
              project: project,
              parent: this
            });
          }
        },
        {
          text: 'Summary',
          icon: 'grid',
          handler: () => {
            this.navigate_to_reports(project);
          }
        },
        {
          text: 'Edit',
          icon: 'create',
          handler: () => {
            this.navigate_to_edit(project)
          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            setTimeout(() => this.delete_project(project, null), 250);
          }
        }, {
          text: 'Cancel',
          //icon: 'thumbs-down',
          role: 'cancel'
        }
      ]
    }).present();
  }

  ionViewWillEnter() {
    this.load();
  }

  public load(): void {
    this.projects = this.service.get_all();
    if (!this.projects.length) this.edit_mode = false;
  }

  public open(project: Project): void {
    if (this.remove_mode) {
      this.remove_mode = false;
    } else if (this.edit_mode) {
      this.edit_mode = false;
      this.navigate_to_edit(project);
    } else {
      this.navigate_to_reports(project);
    }
  }
  private navigate_to_reports(project?: Project): void {
    this.navCtrl.push(ReportsPage, {
      project: project,
      parent: this
    });
  }
  private navigate_to_edit(project?: Project, event?: Event): void {
    if (!!event) event.stopPropagation();
    this.navCtrl.push(EditProjectPage, {
      project: project,
      parent: this
    });
  }
  public toggle_edit_mode(): void {
    this.edit_mode = !this.edit_mode;
  }
  public select_file(): void {
    this.edit_mode = false;
    setTimeout(() => this.create(), 200);
  }
  public create(): void {
    setTimeout(() => this.navigate_to_edit(new Project()), this.edit_mode ? 200 : 0);
    this.edit_mode = false;
  }

  after_delete() {
    this.load();
  }
}
