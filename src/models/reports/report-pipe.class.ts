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
  }
}
