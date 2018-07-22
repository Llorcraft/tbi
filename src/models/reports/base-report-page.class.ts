import { NavController} from "ionic-angular";
import { NgForm } from '@angular/forms';
import { ViewChild } from "@angular/core";
import { ReportBase } from "..";
import { CalculatorFactory } from "../calculators/calculator.factory";
import { Picture } from "../picture";
import { /*ReportPictureSlideComponent,*/ ReportErrorsComponent } from "../../pages/reports";

export class BaseReportPage {
  @ViewChild('form') form: NgForm;
  @ViewChild('errors') errors: ReportErrorsComponent;
  //@ViewChild('pictures_slide') pictures_slide: ReportPictureSlideComponent
  private calculator = new CalculatorFactory();
  protected view = 'form';
  protected editing_picture: Picture = new Picture();
  constructor(
    public report: ReportBase,
    protected navCtrl: NavController) {
    [
      'https://restorationmasterfinder.com/restoration/wp-content/uploads/2016/08/pipe-burst.jpg',
      'http://www.wklawyers.com/wp-content/uploads/2015/02/plumbing-leak-pipe-burst-attorney.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QhRSAcVUI3nmDVmShbEX_BcSqx2rGJkzWshEVKV5SPvwEA0LHQ'
    ].forEach(p => this.report.pictures.push(new Picture({ src: p })));
  }

  protected go_back(): BaseReportPage {
    this.navCtrl.pop();
    return this;
  };

  protected calculate(): ReportBase {
    if (!this.errors.form) this.errors.form = this.form;
    if (this.form.invalid && (() => this.report.result = null)()) return;
    return this.calculator.calculate(this.report);
  }

  protected on_picture_start_edit(picture: Picture): void{
    this.editing_picture = picture;
    this.view = 'edit_picture';
  }
}
