import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { AppService } from 'src/app/app-service.component';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent {

  marketChangePer !:number[];

  constructor(public appService : AppService) { }
  
  ngOnInit() {
    this.marketChangePer = this.appService.getMarketPerChange();
    this.lineChartData[0]["data"] = this.marketChangePer;
    
    this.appService.changedMarketPer.subscribe((data)=>{
      this.marketChangePer = data;
      this.lineChartData[0]["data"] = this.marketChangePer;
    })
  }
  
  public lineChartData : ChartDataSets[] = [{ data : [0],label:'Market change in percentage'}];
  public lineChartLabels: Label[] = ['24h', '7d', '14d', '30d', '60d', '200d', '1y'];
  public lineChartColors: Color[] = [
    {
      
      borderColor: 'white',
      backgroundColor: 'rgba(248, 249, 250,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];
  public lineChartOptions = {
    responsive : true
  } 

}