import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Project } from '../../models';

@Component({
  selector: 'page-pictures',
  templateUrl: 'pictures.html'
})
export class PicturesPage {
  public project: Project;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.project = navParams.get('project');
  }

}
