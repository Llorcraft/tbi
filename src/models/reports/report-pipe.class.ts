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
    // this.component.fields.location = 'Test pipe borrar';
    // this.component.fields.operational_time = 3000;
    // this.component.fields.nominal_diameter = 300;
    // this.component.fields.length = 5;
    // this.component.fields.surface_material = 0.8;
    // this.component.fields.ambient_temp = 10;
    // this.component.fields.surface_temp = 34;
  }
}
