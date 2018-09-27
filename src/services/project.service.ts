import { Injectable } from '@angular/core';
import { Project } from '../models';
import { ProjectJson } from '../models/project.json';
import { FileService } from './file.service';
import { MessageService } from './messages.service';

const STORAGE_KEY: string = 'tbi-app-v4';

@Injectable()
export class ProjectService {

  constructor(private file: FileService, private message: MessageService) { }

  private get_from_storage(): Project[] {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) as Project[];
    } catch (ex) {
      this.message.alert('Error', 'Invalid project version');
      return [];
    }
  }

  public get_all(): Project[] {
    this.file.read().then(r => this.message.alert('Leido', r));
    return (this.get_from_storage() || []).map(p => new Project(p));
  }

  public save_all(projects: Project[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects.map(p => new ProjectJson(p))));
    } catch (ex) {
      this.message.alert('Error', JSON.stringify(ex, null, 2));
    }
  }

  public get(id: string): Project {
    const projects = this.get_all().filter(p => p.id == id);
    return !!projects.length ? projects[0] : null;
  }

  public save(project: Project): void {
    let projects: Project[] = this.get_all().filter(p => p.id !== project.id);
    if (!project.id) project.id = Math.random().toString().substr(2);
    projects.push(project);
    this.save_all(projects);
  }

  public delete(project: Project): void {
    let projects: Project[] = this.get_all().filter(p => p.id !== project.id);
    this.save_all(projects);
  }
}
