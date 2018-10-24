import { Component, Input, ViewEncapsulation } from '@angular/core';
import { BaseReportPage } from '../../../../models/reports';

@Component({
  selector: 'report-header',
  templateUrl: './report-header.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ReportHeaderComponent {

  @Input() parent: BaseReportPage;

}
