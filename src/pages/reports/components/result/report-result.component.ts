import { Component, Input, AfterContentInit } from '@angular/core';
import { NON_PICTURE } from '../../../../const/images/non-picture';
import { BaseReportPage } from '../../../../models/reports';

@Component({
    selector: '[report-result]',
    templateUrl: './report-result.component.html'
})

export class ReportResultComponent implements AfterContentInit {
    @Input() parent: BaseReportPage;
    @Input() show_advise?: boolean = true;
    unknow_surface: boolean = false; 
    protected get first_picture(): string {
        return this.parent.report.pictures.length ? this.parent.report.pictures[0].picture : NON_PICTURE;
    }

    ngAfterContentInit(): void {
        setTimeout(() => this.initialize_values(), 250)
    }

    initialize_values(): void {
        const height = 200;
        this.unknow_surface = this.parent.report.component && this.parent.report.component.fields.unknow_surface;

        this.scale.max = this.up(this.parent.report.result.headLost.power / 100);
        this.scale.medium = Math.ceil(this.scale.max / 1.5);
        this.scale.min = Math.ceil(this.scale.max / 2)
        this.scale.max;

        this.bars.current.losses = [
            (this.parent.report.result.headLost.power / 100 * height / (this.scale.max)),
            this.down(this.parent.report.result.headLost.money)
        ];

        this.bars.basic.losses = [
            (this.parent.report.result.headLost.power - this.parent.report.result.savingPotentialMin.power) / 100 * height / (this.scale.max),
            this.up(this.parent.report.result.headLost.money - this.parent.report.result.savingPotentialMin.money)
            //this.up(this.parent.report.result.savingPotentialMin.money)
        ];

        this.bars.basic.savings = [
            (this.bars.current.losses[0] - this.bars.basic.losses[0]),
            (this.bars.current.losses[1] - this.bars.basic.losses[1])
        ];


        this.bars.economical.losses = [
            (this.parent.report.result.headLost.power - this.parent.report.result.savingPotentialMax.power) / 100 * height / (this.scale.max),
            //this.up(this.bars.current.losses[1] - this.parent.report.result.savingPotentialMax.money)
            this.up(this.parent.report.result.headLost.money - this.parent.report.result.savingPotentialMax.money)
        ];

        this.bars.economical.savings = [
            (this.bars.current.losses[0] - this.bars.economical.losses[0]),
            (this.bars.current.losses[1] - this.bars.economical.losses[1])
        ];

        //if (!this.parent.report.result.annual_saving_from || !this.parent.report.result.annual_saving_from) {
        this.parent.report.result.annual_saving_from = this.bars.basic.savings[1];
        this.parent.report.result.annual_saving_to = this.bars.economical.savings[1];
        //}
    }

    bars: any = {
        current: {
            losses: [0, 0],
        },
        basic: {
            savings: [0, 0],
            losses: [0, 0]
        },
        economical: {
            savings: [0, 0],
            losses: [0, 0]
        }
    }

    scale: any = {
        min: 0,
        medium: 0,
        max: 0
    }

    down(value: number): number {
        return value > 1000 ? Math.floor(Math.trunc(value) / 100) * 100 : Math.floor(Math.trunc(value) / 10) * 10;
    }

    up(value: number): number {
        return value > 1000 ? Math.ceil(Math.trunc(value) / 100) * 100 : Math.ceil(Math.trunc(value) / 10) * 10;
    }
    constructor() {
    }

}
