import { Component, Input} from '@angular/core';
import { ReportBase } from '../../../../models';
import { NON_PICTURE } from '../../../../const/images/non-picture';

@Component({
    selector: 'report-result',
    templateUrl: './report-result.component.html'
})

export class ReportResultComponent {
    @Input() report: ReportBase;
    protected get first_picture(): string{
        return this.report.pictures.length ? this.report.pictures[0].picture : NON_PICTURE;
    } 
    constructor() { }

}
