import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ActionSheetController, Keyboard } from 'ionic-angular';
import { ProjectPageBase } from './project-page-base';
import { Project, Document } from '../../models';
import { ProjectService } from '../../services/project.service';
import { NgForm } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { MessageService } from '../../services/messages.service';
import { FileService } from '../../services/file.service';
import { FileOpener } from '@ionic-native/file-opener';



@Component({
  selector: 'page-edit-project',
  templateUrl: 'edit.html'
})
export class EditProjectPage extends ProjectPageBase {
  public project: Project;
  public segment: string = 'properties';
  public edit_mode = false;
  public error: string = '';
  public form: NgForm;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public service: ProjectService,
    private file: FileService,
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private message: MessageService,
    private keyboard: Keyboard,
    private opener: FileOpener) {

    super(alertCtrl, service);
    this.project = navParams.get("project");
    this.edit_mode = false;
  }
  // ionViewDidLoad() {
  //   $('.tabbar').removeClass('show-tabbar');
  // }
  // ionViewWillLeave() {
  //   $('.tabbar').addClass('show-tabbar');
  // }

  public on_focus(event: FocusEvent) {
    const elm = (event.currentTarget || event.target) as HTMLElement
    const offset = 170;
    elm.closest('.scroll-content').scrollTo(0, 0);
    elm.closest('.scroll-content').scrollTo(0, elm.closest('ion-item').getBoundingClientRect().top - offset);
  }

  protected hide_keyboard() {
    this.keyboard.close();
  }

  public save(): void {
    this.service.save(this.project).then(() => this.navCtrl.pop());
  }

  private delete_file(file: Document): void {
    this.project.documents = this.project.documents.filter(f => f != file);
    this.file.delete(file);
    this.edit_mode = !!this.project.documents.length
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

  public open_file(file: Document): void {
    this.opener.open(`${file.folder}/${file.file}`, file.mime)
      .then(() => console.log('File opened'))
      .catch(err => this.message.alert('Open', `${err.message}\n${file.folder}/${file.file}`));
    // this.viewer.viewDocument(`${file.folder}/${file.file}`, file.mime, { title: file.file }, null, null,
    //   () => {
    //     this.message.alert("Open", 'No viewer installed for this file type');
    //   }, (ex) => {
    //     this.message.alert('Error', ex.message);
    //   });
  }

  choose_file() {
    this.file.select_file().then(d => {
      this.project.documents.push(d)
    });
  }

  ask_for_delete(file: Document): void {
    this.remove_mode = true;
    let confirm = this.alertCtrl.create({
      title: `Remove`,
      message: `Do you agree to remove '${file.file}'?`,
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
