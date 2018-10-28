import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FileService, ProjectService } from '../../services';
import { Document } from '../../models';
import { Picture } from '../../models/picture';

@Component({
  selector: 'page-download',
  templateUrl: 'download.html'
})
export class DownloadPage {
  public files: Document[] = [];
  public pictures: Picture[] = [];
  constructor(private navCtrl: NavController, private file: FileService, private service: ProjectService) {
    // for (let i = 1; i < 11; i++) {
    //   this.files.push(new Document({ 
    //     file: `Files ${i}`, 
    //     folder: `${this.file.working_folder}${i}`,
    //   }));
    // }
    //this.file.get_documents().then(d => this.files = d);
    service.get_all().then(projects => {
      projects.forEach(p => {
        this.files = this.files.concat(p.documents);
        p.components.forEach(c => c.reports.forEach(r => this.pictures = this.pictures.concat(r.pictures)));
      });
    })
  }

  private create_file() {
    this.service.create_database().then(blob => {
      //   var a = document.createElement("a"),
      //     url = URL.createObjectURL(blob);
      //   a.href = url;
      //   a.download = 'db.zip';
      //   a.click();
      //   setTimeout(function () {
      //     window.URL.revokeObjectURL(url);
      //   }, 0);
    })
  }

}
