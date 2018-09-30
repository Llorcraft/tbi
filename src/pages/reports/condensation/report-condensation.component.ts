import { Component } from '@angular/core';
import { BaseReportPage, ReportCondensation } from '../../../models/reports';
import { NavController, NavParams, AlertController, TextInput } from 'ionic-angular';
import { ReportService } from '../../../services/report.service';
import { ReportBase } from '../../../models/report-base';
import { Camera } from '@ionic-native/camera';
import { MessageService } from '../../../services/messages.service';

@Component({
  selector: 'page-report-condensation',
  templateUrl: 'report-condensation.component.html'
})

export class ReportCondensationPage extends BaseReportPage {
  public selection: boolean[] = [!1, !1, !1, !1];

  constructor(protected navCtrl: NavController,
    navParams: NavParams,
    protected service: ReportService,
    protected alertCtrl: AlertController,
    protected camera: Camera,
    protected message: MessageService,
  ) {
    super(new ReportCondensation(navParams.get('project'), navParams.get('component')), navCtrl, service, alertCtrl, camera,message);
      if(!!this.report.component.fields.condensation_selection) this.selection[this.report.component.fields.condensation_selection] = true;
  }

  public set_other(input: TextInput) {
    this.report.component.fields.condensation_other = input.value;
  }

    public set_selection(index: number, event: MouseEvent) {
    this.report.component.fields.condensation_selection = Boolean((event.currentTarget as any).children[1].attributes['aria-checked'].value) ? index : null
    this.selection.forEach((c, i) => {
      this.selection[i] = i == this.report.component.fields.condensation_selection;
    });
  }


  protected calculate(): ReportBase {
    this.start_changes_observer();
    if (!this.form.invalid) {
      this.view = 'result';
    } else {
      this.view = 'form';
    }
    return null;
  }
}
