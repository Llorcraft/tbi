import { Component, Output, Input, EventEmitter } from '@angular/core';
import { ActionSheetController, ActionSheet, ActionSheetButton } from 'ionic-angular';
import { More } from '../../../../const/more/more';

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
    time: More.TIMES,
    materials: More.MATERIALS
  }
  protected show_options(): ActionSheet {
    let buttons = this.options[this.type].map(b => {
      return ({
        text: b[0],
        handler: () => {
          const _elem = (this.type == 'time')
            ? document.querySelector('input[name="surface"]')
            : document.querySelector('input[name="surface_temp"]');
          if (!!_elem) {
            setTimeout(() => {
              _elem.dispatchEvent(new FocusEvent('focus'));
              (<any>_elem).focus();
              (<any>_elem).select();
            }, 250);
          }
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
