import { Injectable } from '@angular/core';
import { Project } from '../models';
import { ProjectJson } from '../models/project.json';
import { FileService } from './file.service';
import { MessageService } from './messages.service';

const STORAGE_KEY: string = 'tbi-app-v4';

@Injectable()
export class ProjectService {

  constructor(private file: FileService, private message: MessageService) { }

  public async get_all(): Promise<Project[]> {
    return new Promise<Project[]>((resolve, reject) => {
      this.file.read_text(STORAGE_KEY)
        .then(r => {
          //window['projects'] = JSON.parse(r || '[]');
          resolve((JSON.parse(r || '[]') as Project[]).map(p => new Project(p)));
        })
        .catch(ex => {
          reject(ex);
          this.message.alert('Error', JSON.stringify(ex, null, 2));
        });
    })
  }

  public async save_all(projects: Project[]): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const content: string = JSON.stringify(projects.map(p => new ProjectJson(p)));
      this.file.write_text(STORAGE_KEY, content)
        .then(_ => resolve(true))
        .catch(ex => {
          reject(ex);
          this.message.alert('Error', JSON.stringify(ex, null, 2));
        })
    })
  }

  public async get(id: string): Promise<Project> {
    return new Promise<Project>((resolve, reject) => {
      this.get_all().then(p => {
        resolve(!!p.filter(p => p.id == id).length ? p.filter(p => p.id == id)[0] : null);
      }).catch(ex => {
        reject(ex);
        this.message.alert('Error', JSON.stringify(ex, null, 2));
      });
    });

  }

  public async save(project: Project): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.get_all().then(p => {
        let projects: Project[] = p.filter(p => p.id !== project.id)
        if (!project.id) project.id = Math.random().toString().substr(2);
        projects.push(project);
        this.save_all(projects).then(_ => resolve(true))
          .catch(ex => {
            reject(ex);
            this.message.alert('Error', JSON.stringify(ex, null, 2));
          });
      }).catch(ex => {
        reject(ex);
        this.message.alert('Error', JSON.stringify(ex, null, 2));
      });

    });

  }

  public async delete(project: Project): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.get_all().then(r => {
        let projects: Project[] = r.filter(p => p.id !== project.id);
        this.save_all(projects).then(_ => resolve(true))
          .catch(ex => {
            reject(ex);
            this.message.alert('Error', JSON.stringify(ex, null, 2));
          });
      }).catch(ex => {
        reject(ex);
        this.message.alert('Error', JSON.stringify(ex, null, 2));
      })

    })
  }

  public async create_database(): Promise<Blob> {
    return this.file.create_database(STORAGE_KEY);
  }
}
