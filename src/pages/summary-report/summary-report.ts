import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AlertController, NavParams, ModalController, NavController, ActionSheetController, Content } from 'ionic-angular';
import { Project, Value, ReportBase, Result, Fields } from '../../models';
import { ProjectService } from '../../services/project.service';
import { ReportRouter } from '../../models/report-router';
import { ReportsPage, ReportResultComponent } from '../reports';
import { TbiComponent } from '../../models/component';
import { PDFExportComponent } from '@progress/kendo-angular-pdf-export';
import { Group, exportPDF } from '@progress/kendo-drawing';
import { ProjectsPage } from '../projects/projects';
import { FileService, LicencesService, MessageService } from '../../services';
import { FileOpener } from '@ionic-native/file-opener';
import { IMAGES } from '../../const/images';
import { InitPage } from '../init/init';
import { EditProjectPage } from '../projects/edit';
import { DisclaimerPage } from '../disclaimer/disclaimer';
import { REPORT } from '../../const';
import { SummaryPage } from '../summary/summary';

@Component({
  selector: 'pdf-summary',
  templateUrl: 'summary-report.html',
  changeDetection: ChangeDetectionStrategy.Default,
})

export class SummaryReportPage implements OnInit {
  public reportPageCount = 0;
  public has_people = false;
  public REPORT = REPORT;
  public creating_pdf = true;
  public images = IMAGES;
  public project: Project;
  public report: ReportBase;
  public reports: ReportBase[] = [];
  public components: TbiComponent[] = [];
  public heat_lost: Value = new Value();
  public saving_potential_min: Value = new Value();
  public saving_potential_max: Value = new Value();
  public advises: Map<string, string> = new Map<string, string>([
    ['', ''],
    ['Maintenance', 'Maintenance'],
    ['System OK', 'OK'],
    ['Insulation recommended', 'Recommended'],
    ['SAFETY-Insulation recommended', 'SAFETY-Recommended'],
    ['Savings can be achieved by increasing insulation performance or thickness', 'SAVINGS-achieved']
  ]);
  public totals: Result = new Result();
  @ViewChild('pdf') public pdf: PDFExportComponent;
  @ViewChild('report_result', { read: ReportResultComponent }) public report_result: ReportResultComponent;
  @ViewChild(Content) content: Content;
  pr: Project;
  constructor(
    protected navParams: NavParams,
    protected alertCtrl: AlertController,
    protected actionSheetCtrl: ActionSheetController,
    protected modalCtrl: ModalController,
    protected service: ProjectService,
    protected navCtrl: NavController,
    private opener: FileOpener,
    public licences: LicencesService,
    private message: MessageService,
    private file: FileService,
    private cdRef: ChangeDetectorRef) {
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

  add_custom_report(component: TbiComponent, event: Event): void {
    event.cancelBubble = true;
    event.preventDefault();
    const router = new ReportRouter(this.project, component, this.navCtrl);
    router.navigate_to_report(REPORT.CUSTOM, 'Other')
  }

  private hide_svg(pdf: any): Promise<any> {
    return new Promise<any>(resolve => {
      document.querySelector(".result-chart").className = 'result-chart zoom-normal';
      pdf.element.nativeElement.className = 'print';
      resolve(true);
    })
  }

  private show_svg(pdf: any, restore: any): Promise<any> {
    return new Promise<any>(resolve => {
      document.querySelector(".result-chart").className = 'result-chart';
      pdf.element.nativeElement.className = '';
      resolve(true);
    });

  }

  public export_pdf() {
    setTimeout(() => {
      this.hide_svg(this.pdf).then(restores => {
        this.pdf.export().then((g: Group) => {
          exportPDF(g).then(data => {
            this.file.create_pdf(data, `TBI-${this.project.name}`.replace(/ /g, '_')).then(r => {
              this.show_svg(this.pdf, restores).then(() => {
                this.creating_pdf = false;
                this.opener.open(r, 'application/pdf')
                  .catch(ex => this.message.alert('Error', `${r}\n${JSON.stringify(ex)}`));
                  this.components.filter(c => !!c.is_hot || !!c.is_cold).forEach(c => {
                    c.reports = c.reports.filter(r => !r.fictisius)
                  });
                this.navCtrl.pop({ animate: false })
              });
            })
          })
        })
      });
    }, 1500)
  }

  public get today():Date{
    return new Date();
  }


  private pages = {
    table: () => Math.ceil(this.components.length / 7),
    chart: () => (this.components.some(c => c.reports.some(r => r.energy)) ? 1 : 0)
  }

  ngOnInit(): void {
    this.project = this.navParams.data.project;
    this.has_people = this.project.has_people;
    this.get_project();
    this.get_report();

    this.content.scrollToTop(500);
    this.cdRef.detectChanges();

    this.components = [...this.components, ...[]];
    this.components.filter(c => !!c.is_hot || !!c.is_cold).forEach(c => {
      c.reports.push(new ReportBase(this.project, c, {
        summary_id: `${!!c.is_hot ? 'Hot' : 'Cold'} Surface`,
        pictures: [c.pictures[0]],
        comment: `${!!c.is_hot ? 'Hot' : 'Cold'} Surface`,
        path: REPORT.CUSTOM,
        fictisius: true
      }))
    });

    this.reports = ([].concat(...[].concat([...this.components.map(c => c.reports)])));

    this.reportPageCount =
      //Table pages
      this.pages.table()
      //Chart page
      + this.pages.chart()
      //Reports pages
      + (this.reports.reduce((a: number, r: ReportBase) => a + (r.pages - (r.has_contacts ? 1 : 0)), 0))
      //Contact page
      + (this.project.has_people ? 1 : 0);
  }

  getReportPageNumber(report: ReportBase, pictureIndex?: number): number {
    return this.reports.indexOf(report) + 1;
  }
  get_report(): void {
    this.report = new ReportBase(this.project, this.components[0], null)
    this.report.result = this.totals;
  }

  get_project(): void {
    this.totals.headLost.power = 0;
    this.totals.headLost.money = 0;
    this.totals.savingPotentialMin.power = 0;
    this.totals.savingPotentialMin.money = 0;
    this.totals.savingPotentialMax.power = 0;
    this.totals.savingPotentialMax.money = 0;
    this.totals.co2 = [0, 0, 0];

    this.components = (this.project.components || []).filter(c => !c.validation).sort((a, b) => a.date > b.date ? 1 : -1);

    this.components.filter(c => !!c.result && !c.fields.unknow_surface)
      .map(c => c.result)
      .forEach(r => {
        this.totals.headLost.power += r.headLost.power;
        this.totals.headLost.money += r.headLost.money;
        this.totals.savingPotentialMin.power += r.savingPotentialMin.power;
        this.totals.savingPotentialMin.money += r.savingPotentialMin.money;
        this.totals.savingPotentialMax.power += r.savingPotentialMax.power;
        this.totals.savingPotentialMax.money += r.savingPotentialMax.money;
        this.totals.co2[0] += r.co2[0];
        this.totals.co2[1] += r.co2[1];
        this.totals.co2[2] += r.co2[2];
      });
    //});
  }



  down(value: number): number {
    return value > 1000 ? Math.floor(Math.trunc(value) / 100) * 100 : Math.floor(Math.trunc(value) / 10) * 10;
  }

  up(value: number): number {
    return value > 1000 ? Math.ceil(Math.trunc(value) / 100) * 100 : Math.ceil(Math.trunc(value) / 10) * 10;
  }
}
