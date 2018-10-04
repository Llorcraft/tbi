import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ActionSheetController, Keyboard } from 'ionic-angular';
import { ProjectPageBase } from './project-page-base';
import { Project } from '../../models';
import { ProjectService } from '../../services/project.service';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { FileOpener } from '@ionic-native/file-opener';
import { NgForm } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { MessageService } from '../../services/messages.service';


@Component({
  selector: 'page-edit-project',
  templateUrl: 'edit.html'
})
export class EditProjectPage extends ProjectPageBase {
  public project: Project;
  public segment: string = 'properties';
  public files: any[] = [];
  public edit_mode = false;
  public error: string = '';
  public form: NgForm;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public service: ProjectService,
    private fileChooser: FileChooser,
    private filePath: FilePath,
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private message: MessageService,
    private keyboard: Keyboard,
    private fileOpener: FileOpener) {

    super(alertCtrl, service);
    this.project = navParams.get("project");
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

  // ionViewDidLoad() {
  //   $('.tabbar').removeClass('show-tabbar');
  // }
  // ionViewWillLeave() {
  //   $('.tabbar').addClass('show-tabbar');
  // }

  public on_focus(event: FocusEvent) {
    const elm = (event.currentTarget as HTMLElement);
    const offset = 170;
    elm.closest('.scroll-content').scrollTo(0, 0);
    elm.closest('.scroll-content').scrollTo(0, elm.closest('ion-item').getBoundingClientRect().top - offset);
  }

  protected hide_keyboard() {
    this.keyboard.close();
  }

  public open_file(file: string): void {
    this.fileOpener.open(file, 'application/pdf')
      .catch(err => this.error = JSON.stringify(err, null, 2));
  }

  public save(): void {
    this.service.save(this.project).then(() => this.navCtrl.pop());
  }

  private delete_file(file: string): void {
    this.files = this.files.filter(f => f != file);
    this.edit_mode = !!this.files.length
  }

  private open_camera() {
    this.camera.getPicture({
      quality: 80,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false
    }).then(d => this.project.picture = 'data:image/jpeg;base64,' + d)
      .catch(ex => {
        this.message.alert('Error take picture', JSON.stringify(ex, null, 2));
      });
  }

  private open_gallery() {
    this.camera.getPicture({
      quality: 80,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false
    }).then(d => this.project.picture = 'data:image/jpeg;base64,' + d)
      .catch(ex => {
        this.message.alert('Error take picture', JSON.stringify(ex, null, 2));
      });
  }

  public ask_for_change_picture(project: Project) {
    let action_sheet = this.actionSheetCtrl.create({
      cssClass: 'picture-action-sheet',
      buttons: [
        {
          text: 'Take picture',
          icon: 'camera',
          handler: () => {
            this.open_camera();
          }
        },
        {
          text: 'From gallery',
          icon: 'images',
          handler: () => {
            this.open_gallery();
          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          cssClass: 'disable',
          handler: () => {
            project.picture = '';
          }
        }
        , {
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
    this.service.get(this.project.id).then(p => {
      p => this.project;
      this.navCtrl.pop();
    });
  }

  edit() {
    this.edit_mode = true;
  }
}
