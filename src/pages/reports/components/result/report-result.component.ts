import { Component, Input} from '@angular/core';
import { ReportBase } from '../../../../models';

@Component({
    selector: 'report-result',
    templateUrl: './report-result.component.html'
})

export class ReportResultComponent {
    @Input() report: ReportBase;
    constructor() { }

}
