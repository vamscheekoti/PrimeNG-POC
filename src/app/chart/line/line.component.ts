import { Component, OnInit } from '@angular/core';
import { Message } from './message';

@Component({
    selector: 'app-line',
    templateUrl: './line.component.html',
    styleUrls: ['./line.component.css']
})
export class LineComponent {
    data: any;
    chartOptions: any;
    msgs: Message[];

    constructor() {
        this.data = {
            legend: {
                display: false
            },
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 515, 40],
                    fill: false,
                    borderColor: '#dd3344'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 458, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#992233'
                },
                {
                    label: 'First Dataset',
                    data: [65, 180, 80, 81, 817, 55, 140],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 556, 55, 40],
                    fill: false,
                    borderColor: '#ddbb22'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 420, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#565656'
                },
                {
                    label: 'First Dataset',
                    data: [65, 900, 820, 81, 87, 55, 140],
                    fill: false,
                    borderColor: '#bb3311'
                }
            ]
        }
        this.chartOptions = {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        reverse: true,
                    }
                }]
            },
            elements: {
                line: {
                    tension: 0, // disables bezier curves
                }
            }
        }
    }

    selectData(event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index] });
    }
}
