import { Injectable } from '@angular/core';
import { Project } from '../models';

const STORAGE_KEY: string = 'tbi-app';

@Injectable()
export class ProjectService {

  constructor() { }

  private get_from_storage(): Project[] {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) as Project[];
  }

  public get_all(): Project[] {
    return (this.get_from_storage() || []).map(p => new Project(p));
  }

  public save_all(projects: Project[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects, null, 2));
  }

  public get(id: string): Project {
    const projects = this.get_all().filter(p => p.id == id);
    return !!projects.length ? projects[0] : null;
  }

  public save(project: Project): void {
    let projects: Project[] = this.get_all().filter(p => p.id !== project.id);
    if(!project.id) project.id = Math.random().toString().substr(2);
    projects.push(project);
    this.save_all(projects);
  }

  public delete(project: Project): void {
    let projects: Project[] = this.get_all().filter(p=>p.id !== project.id);
    this.save_all(projects);
  }
}
