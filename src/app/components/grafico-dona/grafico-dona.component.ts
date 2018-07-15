import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})


export class GraficoDonaComponent implements OnInit {
  
  @Input() grafico:any = {};

  @ViewChild('graficoDona') graficoDona:ElementRef;

  
  @Input('ChartLabels') doughnutChartLabels:string[] = [];
  @Input('ChartData') doughnutChartData:number[] = [];
  @Input('ChartType') doughnutChartType:string = '';  
  
  
  
 

  constructor() { }

  ngOnInit() {
  }

}
