import { Injectable } from '@angular/core';
import { Project } from '../models';
import { ReportBase } from '../models';
import { ComponentService } from './component.service';

@Injectable()
export class ReportService {

    constructor(private service: ComponentService) { }

    public save(report: ReportBase): void {
        if (!!report.component.reports.filter(r => report.id === r.id).length) this.remove(report);
        if(!report.id) report.id = Math.random().toString().substr(2);
        report.component.reports.push(report);

        this.service.save(report.component);
    }

    public remove(report: ReportBase): Project {
        report.component.reports = report.component.reports.filter(r => r.id !== report.id);
        return report.component.project
    }

}
