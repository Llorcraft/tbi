import { AlertController } from 'ionic-angular';
import { Project } from '../../models';
import { ProjectService } from '../../services/project.service';

export class ProjectPageBase {
  protected remove_mode: boolean = false;

  constructor(
    public alertCtrl: AlertController,
    public service: ProjectService) {
  }

  public delete_project(project: Project, event: Event) {
    event.stopPropagation();
    this.remove_mode = true;
    let confirm = this.alertCtrl.create({
      title: `Remove`,
      message: `Do you agree to remove permanently '${project.name}'?`,
      buttons: [
        {
          text: 'Agree',
          handler: () => {
            this.delete(project);
          }
        },
        {
          text: 'Disagree',
        }
      ]
    });
    confirm.present();
  }

  public delete(project: Project): void {
    this.service.delete(project).then(() => this.after_delete());
  }

  protected after_delete(): void { }
}
