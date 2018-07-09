import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ActionSheetController, ActionSheet, ActionSheetButton } from 'ionic-angular';

@Component({
  selector: 'more',
  templateUrl: './more-button.component.html'
})
export class ReportMoreButtonComponent {
  @Output() value?: any = null;
  @Input() type: string = '';
  @Input() cancelable?: boolean = true;
  @Output('change') change = new EventEmitter<number>();

  constructor(private actionSheetCtrl: ActionSheetController) {
  }

  private options = {
    cancel: [{
      text: 'Cancel',
      role: 'cancel',
    }],
    time: [
      ['1000 hours', 1],
      ['2000 hours', 2],
      ['3000 hours', 3],
      ['4380 hours (1/2 year)', 4.38],
      ['5000 hours', 5],
      ['6000 hours', 6],
      ['7000 hours', 7],
      ['8760 hours (full year)', 8.76]
    ],
    materials: [
      ['Defaul value', 0.8],
      ['Metallic bright', 0.3],
      ['Metallic', 0.6],
      ['Corroded', 0.8],
      ['Painted', 0.8],
      ['Non metallic', 0.9]
    ]
  }
  protected show_options(): ActionSheet {
    let buttons = this.options[this.type].map(b => {
      return ({
        text: b[0],
        handler: () => {
          this.value = b[1];
          this.change.next(this.value);
        }
      }) as ActionSheetButton;
    });
    if (!!this.cancelable) {
      buttons = buttons.concat(this.options.cancel)
    }
    const actionSheet = this.actionSheetCtrl.create({
      buttons: buttons
    });
    actionSheet.present();
    return actionSheet;
  }
}
