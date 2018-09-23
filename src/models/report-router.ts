import { Project, ReportBase } from ".";
import { REPORT } from "../const/report.const";
import { NavController } from "ionic-angular";
import { TbiComponent } from "./component";
import { ReportFlange, ReportPipe, ReportSurface, ReportValve, ReportInsulatedSurface } from "./reports";
import { ReportGeneric } from "./reports/report-generic.class";

export class ReportRouter {
  constructor(public project: Project,
    public component: TbiComponent,
    public navCtrl: NavController) {
    this.component = this.component || new TbiComponent(this.project);
  }

  public navigate_to_report(path: string, report?: ReportBase, event?: MouseEvent): ReportRouter {
    const r = this.create_report(path, report)
    this.navCtrl.push(r.page, {
      project: this.project,
      component: this.component,
      report: r
    });
    return this;
  }

  public create_report(path: string, report?: ReportBase): ReportBase {
    debugger;
    switch (path) {
      case REPORT.INSULATION.UNINSULATED_EQUIPMENTS.SURFACE:
        return new ReportSurface(this.project, this.component, report);
      case REPORT.INSULATION.INSULATED_EQUIPMENTS.SURFACE:
        return new ReportInsulatedSurface(this.project, this.component, report);
      case REPORT.INSULATION.UNINSULATED_EQUIPMENTS.FLANGE:
        return new ReportFlange(this.project, this.component, report);
      case REPORT.INSULATION.UNINSULATED_EQUIPMENTS.PIPE:
        return new ReportPipe(this.project, this.component, report);
      case REPORT.INSULATION.UNINSULATED_EQUIPMENTS.VALVE:
        return new ReportValve(this.project, this.component, report);
      default:
        return new ReportGeneric(this.project, this.component, report);
    }
  }
}
