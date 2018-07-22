import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReportBase } from '../../../../models';
import { Picture } from '../../../../models/picture';
import { Marker } from '../../../../models/marker';
import { Subject } from '../../../../../node_modules/rxjs/Subject';

@Component({
    selector: '[picture-slide]',
    templateUrl: './picture-slide.component.html'
})

export class ReportPictureSlideComponent {
    @Input() report: ReportBase;
    @Output() onStartEdit = new EventEmitter<Picture>();;

    public edit(picture: Picture): void{
        this.onStartEdit.emit(picture)
    }
}
