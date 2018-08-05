import { ReportBase } from './../report-base';
import { REPORT } from '../../const/report.const';
import { ReportSurfacePage } from '../../pages/reports';
import { Project } from '..';

export class ReportSurface extends ReportBase {

  public page = ReportSurfacePage;
  public id = REPORT.INSULATION.UNINSULATED_EQUIPMENTS.SURFACE;
  public name = `Surface`;
  public path = `Insulation\\Un-Insulated Equipments\\Surface`;

  constructor(project: Project, item?: ReportSurface) {
    super(project, item);
    // this.fields.location = 'Tengo que borrar los valores';
    // this.fields.surface = 1;
    // this.fields.surface_material = .9;
    // this.fields.ambient_temp = 2;
    // this.fields.surface_temp = 100;
    // this.fields.operational_time = 5000;
  }
}
