import { Component } from '@angular/core';
import { AlertController, NavParams, ModalController, NavController } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Project, Value, ReportBase, Result } from '../../models';
import { ProjectService } from '../../services/project.service';
import { SummaryEditPage } from './summary-edit';
import { ReportRouter } from '../../models/report-router';
import { ReportsPage } from '../reports';
import { TbiComponent } from '../../models/component';

@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html'
})

export class SummaryPage {
  private orientation: string;
  public project: Project;
  public components: TbiComponent[] = [];
  public heat_lost: Value = new Value();
  public saving_potential_min: Value = new Value();
  public saving_potential_max: Value = new Value();
  public advises: Map<string, string> = new Map<string, string>([
    ['', ''],
    ['System OK', 'OK'],
    ['Insulation recommended', 'Recommended'],
    ['SAFETY-Insulation recommended', 'SAFETY-Recommended'],
    ['Savings can be achieved by increasing the insulant performance or thickness', 'SAVINGS-achieved']
  ]);
  public totals: Result = new Result()
  constructor(
    protected navParams: NavParams,
    protected alertCtrl: AlertController,
    protected modalCtrl: ModalController,
    protected service: ProjectService,
    protected navCtrl: NavController,
    orientation: ScreenOrientation) {

    this.project = this.navParams.get('project');
    this.components = this.project.components || [];

    this.components.filter(c => !!c.result && !c.fields.unknow_surface)
      .map(c => c.result)
      .forEach(r => {
        this.totals.headLost.power += r.headLost.power;
        this.totals.headLost.money += r.headLost.money;
        this.totals.savingPotentialMin.power += r.savingPotentialMin.power;
        this.totals.savingPotentialMin.money += r.savingPotentialMin.money;
        this.totals.savingPotentialMax.power += r.savingPotentialMax.power;
        this.totals.savingPotentialMax.money += r.savingPotentialMax.money;
      });

    this.orientation = orientation.type;
    orientation.onChange().subscribe(
      () => this.orientation = orientation.type
    );
  }

  public go_to_reports() {
    this.navCtrl.push(ReportsPage, {
      project: this.project,
      parent: this
    });
  }

  ellipsis(text: string, size: number = 30): string {
    return text.length + 3  <= size ? text: text.substr(0, size) + '...';
  }
  protected remove(cl: TbiComponent, event: Event) {
    event.preventDefault();
    event.cancelBubble = true;
    
    let confirm = this.alertCtrl.create({
      //title: `Remove`,
      message: `Do you agree to remove permanently '${cl.fields.location}' component?`,
      buttons: [
        {
          text: 'Agree',
          handler: () => {
            this.components = this.components.filter(c => c !== cl);
            this.project.components = this.project.components.filter(c => c !== cl);
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

  public open(report: ReportBase, event: Event) {
    event.cancelBubble = true;
    (new ReportRouter(report.component.project, report.component, this.navCtrl)).navigate_to_report(report.path, report.summary_id, report);
  }

  protected edit(cl: TbiComponent) {
    const modal = this.modalCtrl.create(SummaryEditPage,
      {
        tbi_component: cl
      },
      {
        cssClass: "modal-window-summary",
        showBackdrop: true,
        enableBackdropDismiss: false

      });
    modal.onDidDismiss(v => {
      if (!v) return this;
      const report = cl.reports.find(r => r.id == v);
      (new ReportRouter(cl.project, cl, this.navCtrl)).navigate_to_report(report.path, report.summary_id, report);
    });
    modal.present();
    return this;
  }

  ionViewWillEnter() {

  }


}
