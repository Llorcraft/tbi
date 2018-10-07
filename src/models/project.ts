import { ReportBase } from '.';
import { Document } from './';
import { TbiComponent } from './component';
import { ModelWithPicture } from './model-with-picture';

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

export class Project extends ModelWithPicture {
  public name: string = '';
  public desc: string = '';
  public date: Date = new Date();
  public user: string = '';
  public documents: Document[] = [];
  public components: TbiComponent[] = [];
  public price?: number = null;
  public people: People = new People();

  constructor(project?: Partial<Project>) {
    super(project);
    if (!project) return;
    this.name = project.name || '';
    this.desc = project.desc || '';
    this.date = project.date || new Date();
    this.user = project.user || '';
    this.price = Number(project.price) || null;
    //this.documents = Objetener del localstorage
    this.components = project.components.map(c => new TbiComponent(this, c));
    this.people = new People(project.people);
  }

  private flatten(arr: any[]): any[] {
    return [].concat.apply([], arr);
  }

  public get_reports_by_type(type: string): ReportBase[] {
    const reports = this.components.map(c => c.reports.filter(r => !!r.readonly_summary_id.match(new RegExp(type, 'gi'))));
    return this.flatten(reports);
  }

  public get_reports_by_types(types: string[]): ReportBase[] {
    let result: ReportBase[] = []
    types.forEach(type => {
      let filter = this.components.map(c => c.reports.filter(r => !!r.readonly_summary_id.match(new RegExp(type, 'gi'))));
      this.flatten(filter).forEach(r => result.push(r));
    })
    return result;
  }
}
