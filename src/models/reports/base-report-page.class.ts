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

export class BaseReportPage {
  @ViewChild('form') form: NgForm;
  @ViewChild('errors') errors: ReportErrorsComponent;
  public calculator = new CalculatorFactory();
  public edit_surface_material = false;
  protected view = 'form';
  protected editing_picture: Picture = new Picture();
  protected segment = 'input';
  constructor(
    public report: ReportBase,
    protected navCtrl: NavController,
    protected service: ReportService,
    protected alertCtrl: AlertController,
    protected camera: CameraService
  ) {
    [
      'https://restorationmasterfinder.com/restoration/wp-content/uploads/2016/08/pipe-burst.jpg',
      'http://www.wklawyers.com/wp-content/uploads/2015/02/plumbing-leak-pipe-burst-attorney.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QhRSAcVUI3nmDVmShbEX_BcSqx2rGJkzWshEVKV5SPvwEA0LHQ'
    ].forEach(p => this.report.component.pictures.push(new Picture({ src: p })));
  }

  public toggle_surface_material(value: boolean) {
    this.edit_surface_material = value;
    setTimeout(() => {
      if (!!value) document.getElementsByName('surface_material')[1].focus();
    }, 200);
  }

  public set_surface_material(index?: number, event?: number | Event) {
    console.warn(typeof event == 'object')
    const material = More.MATERIALS.find(c => c[1] == index);
    this.report.component.fields.surface_material_index = typeof event == 'object' ? null : index;
    this.report.component.fields.surface_material = !!material ? Number(material[2]) : !!index ? Number(index) : index;
  }

  protected on_focus(event: FocusEvent) {
    const elm = (event.currentTarget as HTMLElement);
    elm.scrollIntoView();
    elm.closest('.scroll-content').scrollTop += Number(elm.getAttribute('scroll')) || 0;
  }


  private start_changes_observer(): void {
    this.errors.form = this.form;
    this.errors.on_change.subscribe((form: NgForm) => {
      this.view = 'form';
      this.report.result = null;
    })
  }

  public save() {
    if (!!this.form.invalid) return;
    const project = this.report.component.project;
    this.service.save(this.report);
    this.ask_for_more_reports(project);
  }

  public ask_for_more_reports(project: Project) {
    let confirm = this.alertCtrl.create({
      title: `Create report`,
      message: `Do you want to add another report associated to this component?`,
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

  public get has_results(): boolean {
    return !this.form.invalid && this.report.result !== null;
  }

  protected go_back(): BaseReportPage {
    if (this.view === 'edit_picture') {
      this.view = 'form';
    } else {
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

  public take_picture() {
    this.camera.take_picture().subscribe(d => this.report.component.pictures.push(new Picture({ src: d })));
  }
}
