import { ReportBase } from '.';
import { Document } from './';
import { NON_PICTURE } from '../const/images';

class People {
  public leader: Contact = new Contact();
  public energy_manager: Contact = new Contact();
  public maintenance_manager: Contact = new Contact();
  public hse_manager: Contact = new Contact();

  constructor(people?: Partial<People>){
    if(!people)return;
    Object.assign(this, people);
  }
}

export class Contact {
  public name: string = '';
  public email: string = '';
  public phone: string = '';

  constructor(contact?: Partial<Contact>){
    if(!contact)return;
    Object.assign(this, contact);
  }
}

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
  public people: People = new People();

  constructor(project?: Partial<Project>) {
    if (!project) return;
    Object.assign(this, project);
    this.reports = project.reports.map(p => new ReportBase(this, p));
    this.people = new People(project.people);
  }
}
