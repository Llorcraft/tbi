import { Component, Input} from '@angular/core';
import { NON_PICTURE } from '../../../../const/images/non-picture';
import { BaseReportPage } from '../../../../models/reports';

@Component({
    selector: 'report-result',
    templateUrl: './report-result.component.html'
})

export class ReportResultComponent {
    @Input() parent: BaseReportPage;
    protected get first_picture(): string{
        return this.parent.report.pictures.length ? this.parent.report.pictures[0].picture : NON_PICTURE;
    } 
    constructor() { }

}
