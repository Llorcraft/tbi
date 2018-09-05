import { ReportBase } from './../report-base';
import { GenericReportPage } from '../../pages/reports';
import { Project } from '..';
import { REPORT } from '../../const';
import { TbiComponent } from '../component';

export class ReportGeneric extends ReportBase {
  public page = GenericReportPage;
  public id = '';
  public name = `Generic`;
  public path = REPORT.INSULATION.UNINSULATED_EQUIPMENTS.GENERIC;

  constructor(public project: Project, public component?: TbiComponent, item?: ReportGeneric) {
    super(project, component, item);
    // this.component = component || new TbiComponent(project, component);
    // this.component.fields.location = 'Tengo que borrar los valores';
    // this.component.fields.operational_time = 5000;
    // this.component.fields.surface = 1;
    // this.component.fields.surface_material = .9;
    // this.component.fields.ambient_temp = 2;
    // this.component.fields.surface_temp = 100;
  }
}
