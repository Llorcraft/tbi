import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Picture } from '../../../../models/picture';
import { ReportBase } from '../../../../models';
import { NON_PICTURE } from '../../../../const/images';

@Component({
    selector: '[picture-slide]',
    templateUrl: './picture-slide.component.html'
})

export class ReportPictureSlideComponent implements OnInit {
    @Input() report: ReportBase;
    @Input() editable: boolean;
    @Output() onStartEdit = new EventEmitter<Picture>();;

    can_edit: boolean = false;

    ngOnInit(): void {
        this.can_edit = !!this.report.path.match(/(surface|pipe|valve|flange)/gi);
        console.log('Can edit', this.can_edit)
    }

    protected NON_PICTURE: string = NON_PICTURE
    public edit(picture: Picture): void{
        this.onStartEdit.emit(picture)
    }

    
}
