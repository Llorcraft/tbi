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

  public get potential_measure(): string {
    return (!this.component || !this.component.fields || null == this.component.fields.surface) ? 'kWh/m2' : 'kWh';
  }
  public get money_measure(): string {
    return (!this.component || !this.component.fields || null == this.component.fields.surface) ? '€/m2' : '€';
  }

  constructor(public project: Project, public component?: TbiComponent, item?: ReportSurface) {
    super(project, component, item);
  }
}
