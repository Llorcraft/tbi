import { Project, ReportBase } from ".";
import * as factory from './../factories/report.factory';
import { REPORT } from "../const/report.const";
import { NavController } from "ionic-angular";
import { TbiComponent } from "./component";

export class ReportRouter {
  constructor(public project: Project,
    public component: TbiComponent,
    public navCtrl: NavController) {
    //this.component = this.component || new TbiComponent(this.project);
  }

  public navigate_to_report(path: string): ReportRouter {
    const report = this.create_report(path);
    this.navCtrl.push(report.page, {
      project: this.project,
      component: this.component || new TbiComponent(this.project),
      report: report
    });
    return this;
  }

  public create_report(path: string): ReportBase {
    switch (path) {
      case REPORT.INSULATION.UNINSULATED_EQUIPMENTS.SURFACE:
        return factory.Report.Insulation.InunsulatedEquipment.Factory.Surface(this.project, this.component, null);
      case REPORT.INSULATION.UNINSULATED_EQUIPMENTS.FLANGE:
        return factory.Report.Insulation.InunsulatedEquipment.Factory.Flange(this.project, this.component, null);
      case REPORT.INSULATION.UNINSULATED_EQUIPMENTS.PIPE:
        return factory.Report.Insulation.InunsulatedEquipment.Factory.Pipe(this.project, this.component, null);
        case REPORT.INSULATION.UNINSULATED_EQUIPMENTS.VALVE:
        return factory.Report.Insulation.InunsulatedEquipment.Factory.Valve(this.project, this.component, null);
      case REPORT.GENERIC:
        return factory.Report.Factory.Generic(this.project, this.component, null);
    }
  }
}
