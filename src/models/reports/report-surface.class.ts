import { ReportBase } from './../report-base';
import { ReportSurfacePage } from '../../pages/reports';
import { Project } from '..';
import { REPORT } from '../../const';
import { TbiComponent } from '../component';

export class ReportSurface extends ReportBase {
  public page = ReportSurfacePage;
  public id = '';
  public name = `Surface`;
  public path = REPORT.INSULATION.UNINSULATED_EQUIPMENTS.SURFACE;

  constructor(public project: Project, public component?: TbiComponent, item?: ReportSurface) {
    super(project, component, item);
    this.component = component || new TbiComponent(project, component);
    this.component.fields.location = 'Tengo que borrar los valores';
    this.component.fields.operational_time = 5000;
    this.component.fields.surface = 1;
    this.component.fields.surface_material = .9;
    this.component.fields.surface_material_index = 10000000004;
    this.component.fields.ambient_temp = 2;
    this.component.fields.surface_temp;
  }
}
