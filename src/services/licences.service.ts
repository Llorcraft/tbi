import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Project } from '../models';

@Injectable()
export class LicencesService {
    public lock: boolean = false;
    private _licence_type: string = 'BASIC';
    public get type(): string {
        return this._licence_type;
    }
    public set type(type: string) {
        this._licence_type = type;
    }
    private _projects: Project[] = [];
    public set projects(projects: Project[]) {
        this.lock = this.type == 'BASIC' && this.projects.reduce((a, p) => a.concat(p.components), []).length >= 5;
        this._projects = projects;
    }
    public get projects(): Project[] {
        return this._projects;
    }

    constructor(private http: Http) {

    }


}