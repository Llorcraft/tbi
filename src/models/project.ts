import { ReportBase } from '.';
import { Document } from './';
import { NON_PICTURE } from '../const/images';
import { TbiComponent } from './component';

export class People {
  public leader: Contact = new Contact();
  public energy_manager: Contact = new Contact();
  public maintenance_manager: Contact = new Contact();
  public hse_manager: Contact = new Contact();

  constructor(people?: Partial<People>) {
    if (!people) return;
    Object.assign(this, people);
  }
}

export class Contact {
  public name: string = '';
  public email: string = '';
  public phone: string = '';

  constructor(contact?: Partial<Contact>) {
    if (!contact) return;
    Object.assign(this, contact);
  }
}

export class Project {
  public id: string = Math.random().toString().substr(2);
  public name: string = '';
  public desc: string = '';
  public date: Date = new Date();
  public user: string = '';
  public picture: string = NON_PICTURE;
  public documents: Document[] = [];
  public components: TbiComponent[] = [];
  public price?: number = null;
  public people: People = new People();

  constructor(project?: Partial<Project>) {
    if (!project) return;
    Object.assign(this, project);
    this.price = Number(project.price) || null;
    this.components = project.components.map(c => new TbiComponent(this, c));
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
