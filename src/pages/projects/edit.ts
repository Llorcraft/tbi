import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import { ProjectPageBase } from './project-page-base';
import { Project } from '../../models';
import { ProjectService } from '../../services/project.service';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { FileOpener } from '@ionic-native/file-opener';
import * as $ from 'jquery';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NON_PICTURE } from '../../const/images';

@Component({
  selector: 'page-edit-project',
  templateUrl: 'edit.html'
})
export class EditProjectPage extends ProjectPageBase {
  public project: Project;
  public original_project: Project;
  public segment: string = 'properties';
  public files: any[] = [];
  public edit_mode = false;
  public error: string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public service: ProjectService,
    private fileChooser: FileChooser,
    private filePath: FilePath,
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private fileOpener: FileOpener) {

    super(alertCtrl, service);
    this.original_project = navParams.get("project");
    this.project = new Project(this.original_project);
    this.edit_mode = false;
    this.files = !this.project.id ? [] : [
      'Berly.2016.T2.130.pdf',
      'Declaracion Luis 2016.pdf',
      'Gas.PDF',
      'Berly.2016.T2.130.pdf',
      'Declaracion Luis 2016.pdf',
      'Gas.PDF',
      'Berly.2016.T2.130.pdf',
      'Declaracion Luis 2016.pdf',
      'Gas.PDF'];
  }

  ionViewDidLoad() {
    $('.tabbar').removeClass('show-tabbar');
  }
  ionViewWillLeave() {
    $('.tabbar').addClass('show-tabbar');
  }

  public open_file(file: string): void {
    this.fileOpener.open(file, 'application/pdf')
        .catch(err => this.error = JSON.stringify(err, null, 2));
  }

  public save(): void {
    this.original_project = this.project;
    this.service.save(this.project);
    this.after_delete();
  }

  private delete_file(file: string): void {
    this.files = this.files.filter(f => f != file);
    this.edit_mode = !!this.files.length
  }

  public ask_for_change_picture(project: Project) {
    let action_sheet = this.actionSheetCtrl.create({
      cssClass: 'picture-action-sheet',
      buttons: [
        {
          text: 'Take picture',
          icon: 'camera',
          handler: () => {
            let options: CameraOptions = {
              quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              allowEdit: true
            };

            this.camera.getPicture(options).then((imageData) => {
              project.picture = 'data:image/jpeg;base64,' + imageData;
              setTimeout(() => this.service.save(project), 500);
            }, (err) => {
              console.log(err);
            });
          }
        },
        {
          text: 'From gallery',
          icon: 'images',
          handler: () => {
            let options: CameraOptions = {
              quality: 100,
              sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              allowEdit: true
            };

            this.camera.getPicture(options).then((imageData) => {
              project.picture = 'data:image/jpeg;base64,' + imageData;
              setTimeout(() => this.service.save(project), 500);
            }, (err) => {
              console.log(err);
            });
          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          cssClass: 'disable',
          handler: () => {
            project.picture = NON_PICTURE;
            this.service.save(project);
          }
        }, {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    action_sheet.present();
  }

  link_file(file: string) {
    this.fileChooser.open()
      .then(uri => {
        this.files.push(uri);
        this.filePath.resolveNativePath(uri)
            .then(filePath => this.files.push(filePath))
            .catch(err => this.error = JSON.stringify(err, null, 2));
        //this.files.push(uri)
      })
      .catch(e => this.files.push(e));
  }

  ask_for_delete(file: string): void {
    this.remove_mode = true;
    let confirm = this.alertCtrl.create({
      title: `Remove`,
      message: `Do you agree to remove '${file}'?`,
      buttons: [
        {
          text: 'Agree',
          handler: () => {
            this.delete_file(file);
          }
        },
        {
          text: 'Disagree'
        }

      ]
    });
    confirm.present();
  }

  after_delete(): void {
    this.navCtrl.pop();
  }

  edit() {
    this.edit_mode = true;
  }
}
