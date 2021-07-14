import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { AppService } from 'src/app/app-service.component';
 

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(public appService : AppService) { }
  marketChangePerInCur : number[] = [];

  ngOnInit(): void {
    this.marketChangePerInCur = this.appService.getMarketChangeInINR();
    this.barChartData[0]["data"] = this.marketChangePerInCur;
    
    
    this.appService.changedMarketPerInCur.subscribe((data)=>{
      this.marketChangePerInCur = data;
      this.barChartData[0]["data"] = this.marketChangePerInCur;
    })
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['24h', '7d', '14d', '30d', '60d', '200d', '1y'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
 
  public barChartData : ChartDataSets[] = [
    { data: [0], label: 'Market change percentage in INR' }
  ];

  public barChartColors : Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ]

}
