import { Component, Input } from '@angular/core';
import { NgForm, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'report-errors',
  templateUrl: './report-errors.component.html',
})

export class ReportErrorsComponent {
  private _form?: NgForm;
  @Input('form')
  set form(form: NgForm) {
    if(!!this._form) return;
    this._form = form;
    this._form.valueChanges.subscribe((ev) => {
      this.update();
    });
    this.update();
  };
  get():NgForm{
    return this._form;
  }
  public errors = [];

  constructor() {
  }

  private update(): ReportErrorsComponent {
    this.errors = [];
    Object.keys(this._form.controls).forEach(key => {
      const controlErrors: ValidationErrors = this._form.controls[key].errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(error => {
          this.errors.push({
            key: key,
            error: error,
            message: Array.from(document.getElementsByName(key))[1].attributes[`data-val-${error}`].value
          })
        });
      }
    });
    return this;
  }
}
