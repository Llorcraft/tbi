import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ActionSheetController, Keyboard } from 'ionic-angular';
import { ProjectPageBase } from './project-page-base';
import { Project, Document } from '../../models';
import { ProjectService } from '../../services/project.service';
import { NgForm } from '@angular/forms';
import { MessageService } from '../../services/messages.service';
import { FileService } from '../../services/file.service';
import { FileOpener } from '@ionic-native/file-opener';
import { PictureService } from '../../services';



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
    private picture: PictureService,
    private message: MessageService,
    protected keyboard: Keyboard,
    private opener: FileOpener) {

    super(alertCtrl, service, keyboard);
    this.project = navParams.get("project");
    this.edit_mode = false;
    //this.project.documents.push(new Document({ file: 'lolo.pdf' }))
    //this.keyboard.onClose(() => document.querySelectorAll('.scroll-content').forEach((x) => x.scrollTo(0, 0)));
  }
  
  public on_focus(event: any, scroll: number = 0) {
    const elm = event._elementRef.nativeElement
    const offset = 170  - scroll;
    elm.closest('.scroll-content').scrollTo(0, elm.closest('.scroll-content').scrollTop - 50);
    this.scroll(elm.closest('.scroll-content'), elm.closest('.scroll-content').scrollTop + elm.closest('ion-item').getBoundingClientRect().top - offset);
  }

  // scroll(elm: any, top: number) {
  //   if (elm.scrollTop < top) {
  //     elm.scrollTo(0, top);
  //     setTimeout(() => this.scroll(elm, top), 1);
  //   } else {
  //     elm.scrollTo(0, top)
  //   }
  // }

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
    this.picture.take_picture()
      .then(d => this.project.picture = d)
  }

  private open_gallery() {
    this.picture.get_picture()
      .then(d => this.project.picture = d)
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
  }

  choose_file() {
    this.file.select_file().then(d => {
      this.project.documents.push(d)
    });
  }

  ask_for_delete(file: Document): void {
    this.remove_mode = true;
    let confirm = this.alertCtrl.create({
      //title: `Remove`,
      message: `Do you agree to remove '${file.file}'?`,
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.delete_file(file);
          }
        },
        {
          text: 'No',
          role: 'cancel'
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
