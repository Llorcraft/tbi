import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProjectsPage } from '../projects/projects';

@Component({
  selector: 'page-init',
  templateUrl: 'init.html'
})
export class InitPage {
  public user_name: string = 'Dev';
  constructor(
    public appCtrl: NavController) {
      this.save();
  }

  public save(): void {
    localStorage.setItem('tbi-user', this.user_name);
    this.appCtrl.setRoot(ProjectsPage, { user_name: this.user_name });
  }
}
