import { Injectable } from '@angular/core';
import { Project } from '../models';
import { ReportBase } from '../models';
import { ProjectService } from './project.service';

@Injectable()
export class ReportService {

    constructor(private service: ProjectService) { }

    public save(report: ReportBase): void {
        if (!!report.project.reports.filter(r => report.id).length) this.remove(report);
        report.project.reports.push(report);
        this.service.save(report.project);
    }

    public remove(report: ReportBase): Project {
        report.project.reports = report.project.reports.filter(r => r.id !== report.id);
        return report.project
    }

}
