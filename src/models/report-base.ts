import { Project } from './project';
import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { Result } from './result';
import { TbiComponent } from './component';

export class ReportBase {
  public id: string = '';
  public name: string = '';
  public path: string = '';
  public page: Page = null;
  public result: Result = null;
  public project: Project = null;
  public component?: TbiComponent = null

  constructor(project: Project, component?: TbiComponent, item?: Partial<ReportBase>) {
    if (!!item) {
      Object.assign(this, item);
      this.project = project;
      this.component = component || new TbiComponent(project, null);
      this.result = new Result(item.result);
    }
  }

  toJSON = () => {
    debugger;
    const report = new ReportBase(this.project, this.component, this);
    report.page = null;
    delete (report.page);
    report.project = null;
    delete (report.project);
    report.component = null;
    delete (report.component);
    return report;
  }
}
