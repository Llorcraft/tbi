import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Project, ComponentLocation, Value, ReportBase } from '../../models';

@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html'
})

export class SummaryPage {
  private orientation: string;
  public project: Project;
  public components: ComponentLocation[];
  public heat_lost: Value = new Value();
  public saving_potential_min: Value = new Value();
  public saving_potential_max: Value = new Value();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController,
    orientation: ScreenOrientation) {

    this.project = navParams.get('project');
    //this.components = this.group_components();
    this.components.forEach(c=> {
      this.heat_lost.money += c.section_energy.heat_lost.money;
      this.heat_lost.power += c.section_energy.heat_lost.power;
      this.saving_potential_max.money += c.section_energy.saving_potential_max.money;
      this.saving_potential_min.money += c.section_energy.saving_potential_min.money;
      this.saving_potential_max.power += c.section_energy.saving_potential_max.power;
      this.saving_potential_min.power += c.section_energy.saving_potential_min.power;
    });

    this.orientation = orientation.type;
    orientation.onChange().subscribe(
      () => this.orientation = orientation.type
    );
  }

  // private group_components(): ComponentLocation[] {
  //   const group = this.project.component.reports.reduce(function (rv, x) {
  //     (rv[x.fields.location] = rv[x.fields.location] || []).push(x);
  //     return rv;
  //   }, {});
  //   const result = Object.keys(group).map(k => new ComponentLocation(group[k]));
  //   return result;
  // }

  protected edit_report(report: ReportBase):void{
    console.table([report]);
    console.table([report.component.project]);
  }

  ionViewWillEnter() {

  }


}
