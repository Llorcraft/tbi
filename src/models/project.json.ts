import { ReportBase, Project } from '.';
import { Document } from './';
import { People } from './project';
import { TbiComponentJson } from './component.json';


export class ProjectJson {
  public id: string = '';
  public name: string = '';
  public desc: string = '';
  public date: Date = new Date();
  public user: string = '';
  public picture: string = '';
  public documents: Document[] = [];
  public components: TbiComponentJson[] = [];
  public price?: number = null;
  public people: People = new People();

  constructor(project: Partial<Project>) {
    this.id = project.id;
    this.name = project.name;
    this.desc = project.desc;
    this.date = project.date;
    this.user = project.user;
    this.price = project.price;
    this.picture = project.picture;
    this.components = project.components.map(c => new TbiComponentJson(c));
    this.documents = project.documents || [];
    this.people = new People(project.people);
  }

  private flatten(arr: any[]): any[] {
    return [].concat.apply([], arr);
  }

  public get_reports_by_type(type: string): ReportBase[] {
    const reports = this.components.map(c => c.reports.filter(r => !!r.path.match(new RegExp(type, 'gi'))));
    return this.flatten(reports);
  }
}
