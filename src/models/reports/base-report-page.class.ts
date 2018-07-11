import { NavController } from "ionic-angular";
import { NgForm } from '@angular/forms';
import { ViewChild } from "@angular/core";
import { ReportErrorsComponent } from "../../pages/reports/components/errors/report-errors.component";
import { ReportBase } from "..";
import { CalculatorFactory } from "../calculators/calculator.factory";

export class BaseReportPage {
  @ViewChild('form') form: NgForm;
  @ViewChild('errors') errors: ReportErrorsComponent;
  private calculator = new CalculatorFactory();

  constructor(
    public report: ReportBase,
    protected navCtrl: NavController) {
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
}
