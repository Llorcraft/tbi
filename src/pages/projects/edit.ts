import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ActionSheetController, Keyboard } from 'ionic-angular';
import { ProjectPageBase } from './project-page-base';
import { Project } from '../../models';
import { ProjectService } from '../../services/project.service';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { FileOpener } from '@ionic-native/file-opener';
import { NgForm } from '@angular/forms';
import { PictureService } from '../../services/picture.service';

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
    private picture: PictureService,
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

  protected hide_keyboard() {
    this.keyboard.close();
  }

  protected on_keypress(event: KeyboardEvent) {
    //console.log(event.which)
    if (event.which === 13) this.save();
  }

  protected on_focus(event: FocusEvent) {
    const elm = (event.currentTarget as HTMLElement);
    elm.scrollIntoView(false);
    elm.scrollIntoView({ block: "end", behavior: "smooth" });
    const elementRect = elm.getBoundingClientRect();
    const absoluteElementTop = elementRect.top;
    elm.closest('.scroll-content').scrollTo(0, absoluteElementTop + Number(elm.getAttribute('scroll')) || 0);
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
    this.picture.take_picture(false, 80).then(p => this.project.picture = p);
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
            this.picture.get_picture(false, 80).then(p => project.picture = p);
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
