import { Component } from '@angular/core';
import { BaseReportPage, ReportSurface } from '../../../models/reports';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-report-surface',
  templateUrl: 'report-surface.component.html'
})

export class ReportSurfacePage extends BaseReportPage {
  public report: ReportSurface = new ReportSurface(
    this.navParams.get('project')
  );

  constructor(
    protected navCtrl: NavController,
    private navParams: NavParams,) {
    super(navCtrl);
  }

  protected calculate(): ReportSurfacePage {
    super.calculate();
    let Calc = {
      BOLTZMANN: 5.670367e-8,
      HR_FIXED: 273,
      HR_POW: 4,
      HCV_FIXED: 1.74,
      HCV_POW:0.3333333,
      KWH: 1000
    };

    let hr = Calc.BOLTZMANN
          * this.report.fields.surface_material
          * ((Math.pow((this.report.fields.surface_temp + Calc.HR_FIXED), Calc.HR_POW)
          - Math.pow((this.report.fields.ambient_temp + Calc.HR_FIXED), Calc.HR_POW)))
          / (this.report.fields.surface_temp - this.report.fields.ambient_temp);
    let hcv = Calc.HCV_FIXED
            * Math.pow(Math.abs(this.report.fields.surface_temp - this.report.fields.ambient_temp), Calc.HCV_POW);
    let hse = hr + hcv;
    let q3  = hse * Math.abs(this.report.fields.surface_temp - this.report.fields.ambient_temp);
    let kWh = q3
            * this.report.fields.operational_time
            * this.report.fields.surface
            / Calc.KWH;
    let cost = kWh * this.report.project.price;
    let sq3= Math.abs(this.report.fields.surface_temp - this.report.fields.ambient_temp)
         / (1/hse + 1 )

    console.table({
      hr:  hr.toFixed(2),
      hcv: hcv.toFixed(2),
      hse: hse.toFixed(2),
      q3: q3.toFixed(0),
      kWh: kWh.toFixed(0),
      cost: cost.toFixed(0)
    });
    return this;
  }
}
