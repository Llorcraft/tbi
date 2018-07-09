import { Component, Input } from '@angular/core';

@Component({
  selector: 'report-header',
  templateUrl: './report-header.component.html'
})
export class ReportHeaderComponent {

  @Input() name: string

}
