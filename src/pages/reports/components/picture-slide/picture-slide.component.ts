import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Picture } from '../../../../models/picture';
import { TbiComponent } from '../../../../models/component';

@Component({
    selector: '[picture-slide]',
    templateUrl: './picture-slide.component.html'
})

export class ReportPictureSlideComponent {
    @Input() component: TbiComponent;
    @Input() label: boolean;
    @Output() onStartEdit = new EventEmitter<Picture>();;

    public edit(picture: Picture): void{
        this.onStartEdit.emit(picture)
    }
}
