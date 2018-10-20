import { Component } from '@angular/core';
import { BaseReportPage, ReportDamaged } from '../../../models/reports';
import { NavController, NavParams, AlertController, TextInput, Keyboard } from 'ionic-angular';
import { ReportService } from '../../../services/report.service';
import { ReportBase } from '../../../models/report-base';
import { MessageService } from '../../../services/messages.service';
import { PictureService } from '../../../services';

@Component({
  selector: 'page-report-damaged',
  templateUrl: 'report-damaged.component.html'
})

export class ReportDamagedPage extends BaseReportPage {
  public damaged_cladding: boolean[] = [!1, !1, !1, !1, !1, !1];
  public damaged_insulation: boolean[] = [!1, !1, !1, !1, !1, !1];

  constructor(protected navCtrl: NavController,
    navParams: NavParams,
    protected service: ReportService,
    protected alertCtrl: AlertController,
    protected picture: PictureService,
    protected message: MessageService,
    protected keyboard: Keyboard
  ) {
    super(new ReportDamaged(navParams.data.project, navParams.data.component, navParams.data.report), navCtrl, service, alertCtrl, picture, message, keyboard);

    if (!!this.report.component.fields.damaged_cladding_selection) this.damaged_cladding[this.report.component.fields.damaged_cladding_selection] = !0;
    if (!!this.report.component.fields.damaged_insulation_selection) this.damaged_insulation[this.report.component.fields.damaged_insulation_selection] = !0;
  }

  public set_damaged_cladding_other(input: TextInput) {
    this.report.component.fields.damaged_cladding_other = input.value;
  }

  public set_damaged_insulation_other(input: TextInput) {
    this.report.component.fields.damaged_insulation_other = input.value;
  }

  public set_damaged_cladding(index: number, event: MouseEvent) {
    this.report.component.fields.damaged_cladding_selection = Boolean((event.currentTarget as any).children[1].attributes['aria-checked'].value) ? index : null
    this.damaged_cladding.forEach((c, i) => {
      this.damaged_cladding[i] = i == this.report.component.fields.damaged_cladding_selection;
    });
  }

  public set_damaged_insulation(index: number, event: MouseEvent) {
    this.report.component.fields.damaged_insulation_selection = Boolean((event.currentTarget as any).children[1].attributes['aria-checked'].value) ? index : null
    this.damaged_insulation.forEach((c, i) => {
      this.damaged_insulation[i] = i == this.report.component.fields.damaged_insulation_selection;
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
