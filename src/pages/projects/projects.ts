import { Project } from './../../models/project';
import { ProjectService } from '../../services/project.service';
import { Component } from '@angular/core';
import { NavController, Platform, ActionSheetController, AlertController, NavParams, Keyboard } from 'ionic-angular';
import { ProjectPageBase } from './project-page-base';
import { EditProjectPage } from './edit';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { ReportsPage } from '../reports';
import { ReportCategory, ReportBase } from '../../models';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { LicencesService } from '../../services/licences.service';
import { DownloadPage } from '../download/download';
import { SummaryPage } from '../summary/summary';


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
    orientation: ScreenOrientation,
    public licences: LicencesService,
    uuid: UniqueDeviceID,
    protected keyboard: Keyboard) {

    super(alertCtrl, service, keyboard);
    
    // if (!!navParams.get('project')) {
    //   this.open_report(navParams.get('project'));
    // }

    uuid.get()
      .then((uuid: any) => console.log(uuid))
      .catch((error: any) => console.log(error));

    this.orientation = orientation.type;
    this.user_name = this.navParams.get("user_name") || this.user_name
    orientation.onChange().subscribe(
      () => this.orientation = orientation.type
    );

    if (!!navParams.get('summary'))
    this.navCtrl.setRoot(SummaryPage, { project: navParams.get('project') }, { animate: true, direction: 'backward' });

  }

  public open_report(project: Project): void {
    if (this.licences.lock) {
      this.alert_licence();
    } else {
      this.navCtrl.push(ReportsPage, {
        project: project,
        report: null,
        parent: this
      });
    }
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



  alert_licence() {
    this.alertCtrl.create({
      //title: 'Licence',
      message: 'To create more projects upgrade to Pro or Enterprise version',
      cssClass: 'project-action-sheet',
      buttons: [
        {
          text: 'Upgrade',
          handler: () => {
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    }).present();
  }

  ionViewWillEnter() {
    this.load();
  }

  public load(): void {
    this.service.get_all().then(p => {
      this.projects = p;
      if (!this.projects.length) this.edit_mode = false;
    });
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
    if (this.licences.type == 'BASIC' && !this.edit_mode && this.projects.length > 0) {
      this.alert_licence();
      return;
    }

    setTimeout(() => this.navigate_to_edit(new Project()), this.edit_mode ? 200 : 0);
    this.edit_mode = false;
  }

  public create_db(): void {
    this.navCtrl.push(DownloadPage);
    // this.service.create_database().then(blob => {
    //   var a = document.createElement("a"),
    //     url = URL.createObjectURL(blob);
    //   a.href = url;
    //   a.download = 'db.zip';
    //   a.click();
    //   setTimeout(function () {
    //     window.URL.revokeObjectURL(url);
    //   }, 0);
    // })
  }

  after_delete() {
    this.load();
  }

  private flatten(arr: any[]): any[] {
    return [].concat.apply([], arr);
  }
  get_by_type(project: Project, type: string): ReportBase[] {
    //return project.get_reports_by_types(type);
    return this.flatten(project.components.map(c => c.reports)).filter(r => !!r.path.match(new RegExp('(' + type + ')', 'gi')));
  }
}
