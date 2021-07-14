import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from '../app-service.component';
import { Coins } from '../coins.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private appService:AppService) { }
  coins : Coins[] = [];
  isLoaded !: boolean;
  error !: string;
  filterText : string = 'Bitcoin'
  @ViewChild('f') form! : NgForm;
  coin_id! : number;
  isChange : boolean = false;
  isShowDetails : boolean = false;
  inputText : string = 'Bitcoin';

  ngOnInit() {
      this.isLoaded = false;
      this.appService.getCoinDetails().subscribe(response=>{
      this.coins = response;
     },error => {
      this.error = 'Some error occured. Please check your internet connection or try again after some time.'
      this.isLoaded = true;
     })
   this.isLoaded = true;
  }


  onChange(){
    this.coin_id = this.form.value.id;
    this.isChange = true;
    this.appService.hideDetailsOnChange(false);
  }

  onFilter(){
    this.filterText = this.inputText;
  }

  // debounceFunc(fn:any,d:number){
  //   let timer:number;
  //   return function(){
  //     let context = ,
  //     args = arguments

  //     clearTimeout(timer);
  //     let timer = setTimeout(()=>{
  //       fn.apply(,arguments)
  //     },d)
  //   }
  // }
  // betterFunction = this.debounceFunc(this.onFilter,300);
}
