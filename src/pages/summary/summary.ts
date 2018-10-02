import { Component } from '@angular/core';
import { AlertController, NavParams, ModalController, NavController } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Project, ComponentLocation, Value } from '../../models';
import { ProjectService } from '../../services/project.service';
import { SummaryEditPage } from './summary-edit';
import { ReportRouter } from '../../models/report-router';
import { ReportsPage } from '../reports';

@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html'
})

export class SummaryPage {
  private orientation: string;
  public project: Project;
  public components: ComponentLocation[] = [];
  public heat_lost: Value = new Value();
  public saving_potential_min: Value = new Value();
  public saving_potential_max: Value = new Value();

  constructor(
    protected navParams: NavParams,
    protected alertCtrl: AlertController,
    protected modalCtrl: ModalController,
    protected service: ProjectService,
    protected navCtrl: NavController,
    orientation: ScreenOrientation) {

    this.project = this.navParams.get('project');
    this.components = (this.project.components || []).map(c => new ComponentLocation(c));
    this.components.forEach(c => {
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

  public go_to_reports(){
    this.navCtrl.push(ReportsPage, {
      project: this.project,
      parent: this
    });
  }

  protected remove(cl: ComponentLocation) {
    let confirm = this.alertCtrl.create({
      title: `Remove`,
      message: `Do you agree to remove permanently '${cl.name}' component?`,
      buttons: [
        {
          text: 'Agree',
          handler: () => {
            this.components = this.components.filter(c => c !== cl);
            this.project.components = this.project.components.filter(c => c !== cl.component);
            this.service.save(this.project);
          }
        },
        {
          text: 'Disagree',
        }
      ]
    });
    confirm.present();
  }

  protected edit(cl: ComponentLocation) {
    const modal = this.modalCtrl.create(SummaryEditPage,
      {
        tbi_component: cl.component
      },
      {
        cssClass: "modal-window-markers",
        showBackdrop: true,
        enableBackdropDismiss: false

      });
    modal.onDidDismiss(v => {
      this.service.get_all().then(projects => {
        const project = projects.find(p => !!p.components.filter(p => !!p.reports.find(r => r.id == v)).length);
        const component = project.components.find(p => !!p.reports.find(r => r.id == v));
        const report = component.reports.find(r => r.id == v);
        (new ReportRouter(project, component, this.navCtrl)).navigate_to_report(report.path, report);
      });
    });
    modal.present();
    return this;
  }

  ionViewWillEnter() {

  }


}
