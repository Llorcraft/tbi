import { NavController } from "ionic-angular";
import { NgForm } from '@angular/forms';
import { ViewChild } from "@angular/core";
import { ReportErrorsComponent } from "../../pages/reports/components/errors/report-errors.component";

export class BaseReportPage {
  @ViewChild('form') form: NgForm;
  @ViewChild('errors') errors: ReportErrorsComponent;

  constructor(protected navCtrl: NavController){
  }

  protected go_back(): BaseReportPage{
    this.navCtrl.pop();
    return this;
  };

  protected calculate(): BaseReportPage{
    if(!this.errors.form) this.errors.form = this.form;
    if(this.form.invalid) return;
    return this;
  }
}
