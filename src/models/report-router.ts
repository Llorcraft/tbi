import { Project, ReportBase } from ".";
import * as factory from './../factories/report.factory';
import { REPORT } from "../const/report.const";
import { NavController } from "ionic-angular";

export class ReportRouter {
  constructor(public project: Project,
    public navCtrl: NavController) {
  }

  public navigate_to_report(id: number): ReportRouter {
    const report = this.create_report(id);
    this.navCtrl.push(report.page, {
      project: this.project,
      report: report
    });
    return this;
  }

  public create_report(id: number): ReportBase {
    switch (id) {
      case REPORT.INSULATION.UNINSULATED_EQUIPMENTS.SURFACE:
        return factory.Report.Insulation.InunsulatedEquipment.Factory.Surface();
    }
  }
}
