import { NavController, ActionSheetController } from "ionic-angular";
import { NgForm } from '@angular/forms';
import { ViewChild } from "@angular/core";
import { ReportBase, Project } from "..";
import { CalculatorFactory } from "../calculators/calculator.factory";
import { Picture } from "../picture";
import { /*ReportPictureSlideComponent,*/ ReportErrorsComponent } from "../../pages/reports";
import { ReportService } from "../../services/report.service";

export class BaseReportPage {
  @ViewChild('form') form: NgForm;
  @ViewChild('errors') errors: ReportErrorsComponent;
  public calculator = new CalculatorFactory();
  protected view = 'form';
  protected editing_picture: Picture = new Picture();
  constructor(
    public report: ReportBase,
    protected navCtrl: NavController,
    protected service: ReportService,
    protected actionSheetCtrl: ActionSheetController,
  ) {
    [
      'https://restorationmasterfinder.com/restoration/wp-content/uploads/2016/08/pipe-burst.jpg',
      'http://www.wklawyers.com/wp-content/uploads/2015/02/plumbing-leak-pipe-burst-attorney.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QhRSAcVUI3nmDVmShbEX_BcSqx2rGJkzWshEVKV5SPvwEA0LHQ'
    ].forEach(p => this.report.pictures.push(new Picture({ src: p })));
  }

  public save() {
    this.service.save(this.report);
    this.ask_for_more_reports(this.report.project);
  }
  public ask_for_more_reports(project: Project) {
    let action_sheet = this.actionSheetCtrl.create({
      cssClass: 'picture-action-sheet',
      title: 'Create another report',
      buttons: [
        {
          text: 'Safaty',
        },
        {
          text: 'Maintenace'
        },
        {
          text: 'Other'
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    action_sheet.present();
  }
  public get has_results(): boolean {
    return !this.form.invalid && this.report.result !== null;
  }
  protected go_back(): BaseReportPage {
    this.navCtrl.pop();
    return this;
  };

  protected calculate(): ReportBase {
    if (!this.errors.form) this.errors.form = this.form;
    if (!this.form.invalid) {
      this.view = 'result';
      return this.calculator.calculate(this.report);
    } else {
      this.view = 'form';
      ;
    }
  }

  protected on_picture_start_edit(picture: Picture): void {
    this.editing_picture = picture;
    this.view = 'edit_picture';
  }
}
