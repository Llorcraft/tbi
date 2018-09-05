import { Injectable } from '@angular/core';
import { ProjectService } from './project.service';
import { TbiComponent } from '../models/component';
import { Project } from '../models';

@Injectable()
export class ComponentService {

    constructor(private service: ProjectService) { }

    public save(component: TbiComponent): void {
        if (!!component.project.components.filter(r => component.id === r.id).length) this.remove(component);
        if(!component.id) component.id = Math.random().toString().substr(2);
        component.project.components.push(component);

        this.service.save(component.project);
    }

    public remove(component: TbiComponent): Project {
        component.project.components = component.project.components.filter(r => r.id !== component.id);
        return component.project
    }

}
