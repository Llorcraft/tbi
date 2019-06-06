import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PDFExportComponent } from '@progress/kendo-angular-pdf-export';
import { NavParams, NavController } from 'ionic-angular';
import { Group, exportPDF } from '@progress/kendo-drawing';
import { FileService, MessageService } from '../../../services';
import { ReportBase } from '../../../models';
import { FileOpener } from '@ionic-native/file-opener';
import { IMAGES } from '../../../const/images';

@Component({
  selector: 'report-pdf-page',
  templateUrl: './report-pdf.component.html'
})
export class ReportPdfPage implements OnInit {
  @ViewChild('pdf') public pdf: PDFExportComponent;
  @Input() autoprint = true;
  report: ReportBase;
  images = IMAGES;
  constructor(private nav: NavController,
    private params: NavParams,
    private file: FileService,
    private message: MessageService,
    private opener: FileOpener) { }

  ngOnInit(): void {
    this.report = this.params.data.report;
  }

  setPageNumber(index: number): number {
    return (index % 4 == 0) ? 4 - index - 2 : null;
  }

  setPageCount(): number {
    return Math.ceil(this.report.filtered_pictures.length || 1 / 4) + 1
  }
  public report_ready() {
    if(!this.autoprint) return;
    Array.from(document.getElementsByClassName('scroll-content')).reverse()[0].scrollTo(0, 0);
    setTimeout(() => {
      this.pdf.export().then((g: Group) => {
        exportPDF(g).then(data => {
          this.file.create_pdf(data, `TBI-${this.report.summary_id}`.replace(/ /g, '_')).then(r => {
            this.nav.pop({animate: false});
            this.opener.open(r, 'application/pdf')
              .catch(ex => this.message.alert('Error', `${r}\n${JSON.stringify(ex)}`));
          })
        })
      })
    }, 10);
  }

}
