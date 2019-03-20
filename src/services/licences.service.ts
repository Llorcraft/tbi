import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Project } from '../models';

@Injectable()
export class LicencesService {

    async validate(code: string): Promise<{ ok: boolean, message: string }> {
        return new Promise<{ ok: boolean, message: string }>(resolve => {
            if (code.toLocaleLowerCase() == 'pro') {
                resolve({ ok: true, message: 'Validation code is valid.' });
                this.type = 'PRO';
            } else {
                this.type = 'BASIC';
                resolve({ ok: false, message: 'Validation code is invalid.' });
            }
        })
        //let result  = await this.http.post("http://eiif.testengineonline.com/tbi-app/validate-code", {code: code}).toPromise();
        //debugger;
        //return (<any>result).message.toString();
    }
    public lock: boolean = false;
    public get type(): string {
        return localStorage.getItem('tbi-licence') || 'BASIC';
    }
    public set type(type: string) {
        localStorage.setItem('tbi-licence', type);
    }
    private _projects: Project[] = [];
    public set projects(projects: Project[]) {
        this.lock = this.type == 'BASIC' && this.projects.reduce((a, p) => a.concat(p.components), []).length >= 1;
        this._projects = projects;
    }
    public get projects(): Project[] {
        return this._projects;
    }

    constructor(private http: Http) {

    }


}