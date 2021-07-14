import { Pipe, PipeTransform } from '@angular/core';
import { AppService } from './app-service.component';
import { Coins } from './coins.model';

@Pipe({
  name: 'filterOne'
})
export class FilterPipe implements PipeTransform {
  constructor(public appService : AppService){}

  details !: Coins[];

  transform(value: Coins[],filter:string) {
    this.details = this.appService.getCoinsList();

     if(filter == '' || filter == undefined){
       return value;
     }

    const res = this.details.filter((item)=>{
      if(item.name.toLowerCase().includes(filter.toLowerCase())){
        return item;
      }else{
        return;
      }
    })
    return res;
  }
}
