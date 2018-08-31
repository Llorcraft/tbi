import { ReportBase } from './../report-base';
import { ReportSurfacePage } from '../../pages/reports';
import { Project } from '..';
import { REPORT } from '../../const';

export class ReportSurface extends ReportBase {

  public page = ReportSurfacePage;
  public id = '';
  public name = `Surface`;
  public path = REPORT.INSULATION.UNINSULATED_EQUIPMENTS.SURFACE;

  constructor(project: Project, item?: ReportSurface) {
    super(project, item);
    this.fields.location = 'Tengo que borrar los valores';
    this.fields.operational_time = 5000;
    this.fields.surface = 1;
    this.fields.surface_material = .9;
    this.fields.ambient_temp = 2;
    this.fields.surface_temp = 100;
  }
}
