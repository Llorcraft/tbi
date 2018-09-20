import { NavController, AlertController } from "ionic-angular";
import { NgForm } from '@angular/forms';
import { ViewChild } from "@angular/core";
import { ReportBase, Project } from "..";
import { CalculatorFactory } from "../calculators/calculator.factory";
import { Picture } from "../picture";
import { ReportErrorsComponent, ReportsPage } from "../../pages/reports";
import { ReportService } from "../../services/report.service";
import { CameraService } from "../../services/camera";
import { More } from "../../const/more/more";
import { TbiComponent } from "../component";

export class BaseReportPage {
  @ViewChild('form') form: NgForm;
  @ViewChild('errors') errors: ReportErrorsComponent;
  public calculator = new CalculatorFactory();
  public edit_surface_material = false;
  protected view = 'form';
  protected editing_picture: Picture = new Picture();
  protected segment = 'input';

  private _original_component: TbiComponent;
  public unknow_surface: boolean = false;
  
  constructor(
    public report: ReportBase,
    protected navCtrl: NavController,
    protected service: ReportService,
    protected alertCtrl: AlertController,
    protected camera: CameraService
  ) {
    this._original_component = this.report.component;
    this.report.component = new TbiComponent(this._original_component.project, this._original_component);
    this.report.component.id = this._original_component.id;
    [
      'https://restorationmasterfinder.com/restoration/wp-content/uploads/2016/08/pipe-burst.jpg',
      'http://www.wklawyers.com/wp-content/uploads/2015/02/plumbing-leak-pipe-burst-attorney.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QhRSAcVUI3nmDVmShbEX_BcSqx2rGJkzWshEVKV5SPvwEA0LHQ'
    ].forEach(p => this.report.pictures.push(new Picture({ picture: p })));
  }

  protected toggle_surface_material(value: boolean) {
    this.edit_surface_material = value;
    setTimeout(() => {
      if (!!value) document.getElementsByName('surface_material')[1].focus();
    }, 200);
  }

  protected set_surface_material(index?: number, event?: number | Event) {
    console.warn(typeof event == 'object')
    const material = More.MATERIALS.find(c => c[1] == index);
    this.report.component.fields.surface_material_index = typeof event == 'object' ? null : index;
    this.report.component.fields.surface_material = !!material ? Number(material[2]) : !!index ? Number(index) : index;
  }

  protected on_focus(event: FocusEvent) {
    const elm = (event.currentTarget as HTMLElement);
    elm.scrollIntoView(false);
    elm.scrollIntoView({ block: "end", behavior: "smooth" });
    const elementRect = elm.getBoundingClientRect();
    const absoluteElementTop = elementRect.top;
    elm.closest('.scroll-content').scrollTo(0, absoluteElementTop + Number(elm.getAttribute('scroll')) || 0);
  }

  protected on_keypress(event: KeyboardEvent) {
    if (event.which === 13) this.calculate();
  }

  private start_changes_observer(): void {
    this.errors.form = this.form;
    this.errors.on_change.subscribe((form: NgForm) => {
      this.view = 'form';
      this.report.result = null;
    })
  }

  protected save() {
    if (!!this.form.invalid) return;
    const project = this.report.component.project;
    if (!this.report.component.reports.find(c => c.id === this.report.id)) this.report.component.reports.push(this.report);
    if (!project.components.find(c => c.id === this.report.component.id)) project.components.push(this.report.component);
    this.service.save(this.report);
    this.ask_for_more_reports(project);
  }

  protected ask_for_more_reports(project: Project) {
    let confirm = this.alertCtrl.create({
      title: `Create report`,
      message: `Do you want to add another report associated to this component?`,
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.navCtrl.push(ReportsPage, {
              report: this.report,
              project: project
            });
          }
        },
        {
          text: 'No',
          handler: () => {
            this.navCtrl.push(ReportsPage, {
              project: project,
              message: `“${this.report.component.fields.location}” have been saved. You are going to start reports on a new component.`
            });
          }
        }
      ]
    });
    confirm.present();
  }

  protected get has_results(): boolean {
    return !this.form.invalid && this.report.result !== null;
  }

  protected go_back(): BaseReportPage {
    if (this.view === 'edit_picture') {
      this.view = 'form';
    } else {
      this.report.component = this._original_component;
      this.navCtrl.pop();
    }
    return this;
  };

  protected calculate(): ReportBase {
    this.start_changes_observer();
    if (!this.form.invalid) {
      this.view = 'result';
      return this.calculator.calculate(this.report);
    } else {
      this.view = 'form';
    }
  }

  protected on_picture_start_edit(picture: Picture): void {
    this.editing_picture = picture;
    this.view = 'edit_picture';
  }

  protected take_picture() {
    this.camera.take_picture().subscribe(d => this.report.pictures.push(new Picture({ picture: d })));
  }

  protected toggle_know() {
    if (!!this.unknow_surface) this.report.component.fields.surface = null;
  }

  protected before_calculate(temp: number) {
    this.report.component.fields.surface_temp = temp;
  }

  private _average_temp?: number = null;
  protected set average_temp(value: number) {
    this._average_temp = value;
  }
  protected get average_temp(): number {
    if (!this.report.component.has_markers) {
      this._average_temp = null;
    }
    this._average_temp = this.report.component.surface_temp;
    return this._average_temp;
  }

  protected ask_calculate(): ReportBase {
    if (isNaN(this.report.component.fields.surface_temp)
      || !this.report.component.has_markers) return this.calculate();
    let confirm = this.alertCtrl.create({
      title: `Temperature`,
      message: `Which temperature would you like to use for calculation?`,
      cssClass: `ion-dialog-horizontal`,
      enableBackdropDismiss: false,
      buttons: [
        {
          text: `Average ${this.report.component.surface_temp}ºC`,
          handler: () => this.before_calculate(this.report.component.fields.surface_temp = this.report.component.surface_temp)
        },
        {
          text: `Minimum ${this.report.component.min_temp}ºC`,
          handler: () => this.before_calculate(this.report.component.fields.surface_temp = this.report.component.min_temp)
        },
        {
          text: `Maximum ${this.report.component.max_temp}ºC`,
          handler: () => this.before_calculate(this.report.component.fields.surface_temp = this.report.component.max_temp)
        }
      ]
    });
    confirm.present();
  }
}
