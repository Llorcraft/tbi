import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Picture } from '../../../../models/picture';
import { ReportBase } from '../../../../models';
import { NON_PICTURE } from '../../../../const/images';

@Component({
    selector: '[picture-slide]',
    templateUrl: './picture-slide.component.html'
})

export class ReportPictureSlideComponent {
    @Input() report: ReportBase;
    @Input() label: boolean;
    @Output() onStartEdit = new EventEmitter<Picture>();;

    protected NON_PICTURE: string = NON_PICTURE
    public edit(picture: Picture): void{
        this.onStartEdit.emit(picture)
    }
}
