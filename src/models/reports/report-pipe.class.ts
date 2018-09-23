import { ReportBase } from './../report-base';
import { Project } from '..';
import { REPORT } from '../../const';
import { TbiComponent } from '../component';
import { ReportPipePage } from '../../pages/reports/pipe/report-pipe.component';

export class ReportPipe extends ReportBase {
  public page = ReportPipePage;
  public id = '';
  public name = `Pipe`;
  public path = REPORT.INSULATION.UNINSULATED_EQUIPMENTS.PIPE;

  constructor(public project: Project, public component?: TbiComponent, item?: ReportPipe) {
    super(project, component, item);
    this.component.fields.location = 'Test ipipe borrar';
    this.component.fields.operational_time = 8760;
    this.component.fields.nominal_diameter = 200;
    this.component.fields.length = 1;
    this.component.fields.surface_material = 0.9;
    this.component.fields.ambient_temp = 12;
    this.component.fields.surface_temp = 36;
  }
}
