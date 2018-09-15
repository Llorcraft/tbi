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
  public component?: TbiComponent = null;

  constructor(project: Project, component?: TbiComponent, item?: Partial<ReportBase>) {
    if (!!item) {
      Object.assign(this, item);
      this.project = project;
      this.component = component;
      this.result = new Result(item.result);
    }
  }
}
