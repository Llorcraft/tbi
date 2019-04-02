import { Component, ChangeDetectorRef, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { NavController, Keyboard } from 'ionic-angular';
import { ProjectsPage } from '../projects/projects';
import { LicencesService } from '../../services';
import { ScrollToComponent } from '../scroll_to_component.class';


@Component({
  selector: 'page-init',
  templateUrl: 'init.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InitPage extends ScrollToComponent implements AfterViewInit {
  public user_name: string = '';
  public isPro = -1;
  public code = '';

  constructor(public appCtrl: NavController, public license: LicencesService, private cd: ChangeDetectorRef, protected keyboard: Keyboard) {
    super(keyboard);
    this.offset = 0;
    // this.isPro = license.type == 'PRO' ? 1 : -1;
    this.isPro = -1;
    //this.save();
  }

  public onVersionSelected(e) {
    if (e == 0) this.save();
  }

  public onCodeChange(e) {
    if ((e.value || '').toLowerCase() == LicencesService.CODE) this.save();
  }

  public save(): void {
    //if(form.invalid) return;
    localStorage.setItem('tbi-user', this.user_name);
    this.license.type = '';
    if (this.isPro == 1 && this.code.toLocaleLowerCase() == LicencesService.CODE) this.license.type = 'PRO';
    //this.appCtrl.setRoot(ProjectsPage, { user_name: this.user_name, summary: true, project: '6243045674937677'});
    this.appCtrl.setRoot(ProjectsPage, { user_name: this.user_name });
  }


  ngAfterViewInit() {
    this.cd.detectChanges();
  }
}