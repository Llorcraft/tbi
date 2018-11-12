import { Component, Input, OnInit, AfterContentInit } from '@angular/core';
import { NON_PICTURE } from '../../../../const/images/non-picture';
import { BaseReportPage } from '../../../../models/reports';

@Component({
    selector: 'report-result',
    templateUrl: './report-result.component.html'
})

export class ReportResultComponent implements AfterContentInit {
    @Input() parent: BaseReportPage;

    protected get first_picture(): string {
        return this.parent.report.pictures.length ? this.parent.report.pictures[0].picture : NON_PICTURE;
    }

    ngAfterContentInit(): void {
        setTimeout(() => this.initialize_values(), 250)
    }

    initialize_values(): void {
        const height = 115;

        this.scale.max = Math.ceil(this.parent.report.result.headLost.power / 100) + 3;
        this.scale.medium = Math.ceil(this.scale.max / 1.5);
        this.scale.min = Math.ceil(this.scale.max / 3)
        this.scale.max += 1;

        this.bars.current.losses = [
            this.parent.report.result.headLost.power / 100 * height / (this.scale.max + 1),
            this.parent.report.result.headLost.money
        ];

        this.bars.basic.savings = [
            this.parent.report.result.savingPotentialMin.power / 100 * height / (this.scale.max + 1),
            this.parent.report.result.savingPotentialMin.money
        ];
        this.bars.basic.losses = [
            (this.parent.report.result.headLost.power - this.parent.report.result.savingPotentialMin.power) / 100 * height / (this.scale.max + 1),
            this.parent.report.result.headLost.money - this.parent.report.result.savingPotentialMin.money
        ];

        this.bars.economical.savings = [
            this.parent.report.result.savingPotentialMax.power / 100 * height / (this.scale.max + 1),
            this.parent.report.result.savingPotentialMax.money
        ];
        this.bars.economical.losses = [
            (this.parent.report.result.headLost.power - this.parent.report.result.savingPotentialMax.power) / 100 * height / (this.scale.max + 1),
            this.parent.report.result.headLost.money - this.parent.report.result.savingPotentialMax.money
        ];
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
    constructor() {
    }

}
