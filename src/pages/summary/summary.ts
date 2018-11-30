import { Component } from '@angular/core';
import { AlertController, NavParams, ModalController, NavController, ActionSheetController } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Project, Value, ReportBase, Result } from '../../models';
import { ProjectService } from '../../services/project.service';
import { SummaryEditPage } from './summary-edit';
import { ReportRouter } from '../../models/report-router';
import { ReportsPage } from '../reports';
import { TbiComponent } from '../../models/component';
import { PDFExportComponent } from '@progress/kendo-angular-pdf-export';
import { Group, exportPDF } from '@progress/kendo-drawing';
import { ProjectsPage } from '../projects/projects';
import { FileService, MessageService } from '../../services';
import { FileOpener } from '@ionic-native/file-opener';

@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html'
})

export class SummaryPage {
  private orientation: string;
  public project: Project;
  public report: ReportBase = null;
  public components: TbiComponent[] = [];
  public heat_lost: Value = new Value();
  public saving_potential_min: Value = new Value();
  public saving_potential_max: Value = new Value();
  public advises: Map<string, string> = new Map<string, string>([
    ['', ''],
    ['System OK', 'OK'],
    ['Insulation recommended', 'Recommended'],
    ['SAFETY-Insulation recommended', 'SAFETY-Recommended'],
    ['Savings can be achieved by increasing insulation performance or thickness', 'SAVINGS-achieved']
  ]);
  public totals: Result = new Result()
  constructor(
    protected navParams: NavParams,
    protected alertCtrl: AlertController,
    protected actionSheetCtrl: ActionSheetController,
    protected modalCtrl: ModalController,
    protected service: ProjectService,
    protected navCtrl: NavController,
    private opener: FileOpener,
    private file: FileService,
    orientation: ScreenOrientation) {

    this.orientation = orientation.type;
    orientation.onChange().subscribe(
      () => this.orientation = orientation.type
    );
  }

  public go_to_projects() {
    this.navCtrl.push(ProjectsPage);
  }

  public go_to_reports(component: TbiComponent) {
    this.navCtrl.push(ReportsPage, {
      project: this.project,
      component: component,
      parent: this
    });
  }

  ellipsis(text: string, size: number = 40): string {
    return text.length + 3 <= size ? text : text.substr(0, size) + '...';
  }

  add_report(type: string, component: TbiComponent, event: Event): void {
    event.cancelBubble = true;
    event.preventDefault();
    this.navCtrl.setRoot(ReportsPage, {
      project: this.project,
      parent: this,
      to: type,
      component: component
    });
  }

  async actions(cl: TbiComponent, event: Event) {
    event.preventDefault();
    event.cancelBubble = true;
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Add report',
          icon: 'ios-add-circle',
          handler: () => {
            this.go_to_reports(cl);
          }
        }, {
          text: 'Edit',
          icon: 'ios-create',
          handler: () => {
            this.edit(cl);
          }
        }, {
          text: 'Duplicate',
          icon: 'ios-copy',
          handler: () => {
            this.duplicate(cl);
          }
        }, {
          text: 'Delete',
          role: 'ios-destructive',
          icon: 'trash',
          handler: () => {
            this.remove(cl, event);
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }

  duplicate(c: TbiComponent) {
    var component = new TbiComponent(c.project, c);
    component.id = '';
    component.fields.location += ' Copy';
    component.date = new Date();
    this.project.components.push(component);
    this.service.save(this.project).then(p => {
      this.get_project();
    })
  }

  protected remove(cl: TbiComponent, event: Event) {
    event.preventDefault();
    event.cancelBubble = true;

    let confirm = this.alertCtrl.create({
      //title: `Remove`,
      message: `Do you agree to remove permanently '${cl.fields.location}' component?`,
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.components = this.components.filter(c => c !== cl);
            this.project.components = this.project.components.filter(c => c !== cl);
            this.service.save(this.project).then(() => this.get_project());
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

  private hide_svg(pdf: any) {
    Array.from(pdf.element.nativeElement.getElementsByTagName('svg'))
      .forEach((svg: any, i: number) => {
        if (i < 3) svg.style.fill = '#fff';
        let img = document.createElement('img');
        img.src = `data:image/svg+xml;base64,${window.btoa(new XMLSerializer().serializeToString(svg))}`;
        img.width = svg.getBoundingClientRect().width;
        //img.height = svg.getBoundingClientRect().height;
        svg.parentElement.appendChild(img);
      });
    pdf.element.nativeElement.className = 'print'
  }

  private show_svg(pdf: any) {
    Array.from(pdf.element.nativeElement.getElementsByTagName('img'))
      .forEach((img: any) => img.remove());
    pdf.element.nativeElement.className = '';
  }

  public export_pdf(pdf: PDFExportComponent) {
    this.hide_svg(pdf);
    pdf.export().then((g: Group) => {
      exportPDF(g).then(data => {
        this.file.create_pdf(data, `${(new Date()).getTime()}`).then(r => {
          this.opener.open(r, 'application/pdf');
          this.show_svg(pdf);
        })
      })
    })
  }

  public open(report: ReportBase, event: Event) {
    event.cancelBubble = true;
    (new ReportRouter(report.component.project, report.component, this.navCtrl)).navigate_to_report(report.path, report.summary_id, report);
  }

  protected edit(cl: TbiComponent): SummaryPage {
    if (cl.reports.length == 1) {
      (new ReportRouter(cl.project, cl, this.navCtrl)).navigate_to_report(cl.reports[0].path, cl.reports[0].summary_id, cl.reports[0]);
      return this;
    }
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
    setTimeout(() => this.get_project(), 0);
  }

  get_project(): void {
    this.totals.headLost.power = 0;
    this.totals.headLost.money = 0;
    this.totals.savingPotentialMin.power = 0;
    this.totals.savingPotentialMin.money = 0;
    this.totals.savingPotentialMax.power = 0;
    this.totals.savingPotentialMax.money = 0;

    this.service.get(this.navParams.get('project').id).then(project => {
      this.project = project;
      //this.project = this.navParams.get('project');
      this.report = this.project.components[0].reports[0];
      this.components = [].concat((this.project.components || [])).sort((a, b) => a.date > b.date ? 1 : -1);

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
    });
  }
}
