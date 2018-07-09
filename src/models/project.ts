import { ReportBase } from '.';
import { Document } from './';
import { NON_PICTURE } from '../const/images';

export class Project {
  public id: string = '';
  public name: string = '';
  public desc: string = '';
  public date: Date = new Date();
  public user: string = '';
  public picture: string = NON_PICTURE;
  public documents: Document[] = [];
  public reports: ReportBase[] = [];
  public price: number = 0;

  constructor(project?: Partial<Project>) {
    if (!project) return;
    Object.assign(this, project);
    this.reports = project.reports.map(p => new ReportBase(this, p));
  }
}
