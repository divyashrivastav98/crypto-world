import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import {map} from 'rxjs/operators';
import { Coins } from "./coins.model";
import { CoinsDetails } from "./coinsDetails.model";

@Injectable({providedIn:'root'})

export class AppService{
    constructor(private http:HttpClient){}

    marketPerChange : number[] = [];
    changedMarketPer = new Subject<number[]>();
    changedMarketPerInCur = new Subject<number[]>();
    details !:CoinsDetails;
    url = 'https://api.coingecko.com/api/v3/coins/a';
    priceChangePerInCur : number[] =[];
    hideDetails = new Subject<boolean>();
    coins : Coins[] = [];


    getCoinDetails(){
        return this.http.get(`${this.url}list`,
        {
            headers : new HttpHeaders({'include_platform':'false'})
        })
        .pipe(map((response)=>{
            this.coins = Object.values(response);
            return this.coins;
        }))
    }

    getCoinsList(){
        return this.coins;
    }

    getDetailById(id:number): Observable<CoinsDetails>{
        return this.http.get<CoinsDetails>(`${this.url}${id}`)
        .pipe(map((response)=>{
            this.details = response;
            return this.details;
        }))
    }

    setMarketPerChange(arr:number[]){
        this.marketPerChange = [];
        this.marketPerChange = arr;
        this.changedMarketPer.next(this.marketPerChange);
    }

    getMarketPerChange(){
        return this.marketPerChange;
    }

    getMarketChangeInINR(){
        this.priceChangePerInCur = [];
        let priceChange24hInCur = this.details.market_data["price_change_percentage_24h_in_currency"]["inr"];
        let priceChange7dInCur = this.details.market_data["price_change_percentage_7d_in_currency"]["inr"];
        let priceChange14dInCur = this.details.market_data["price_change_percentage_14d_in_currency"]["inr"];
        let priceChange30dInCur = this.details.market_data["price_change_percentage_30d_in_currency"]["inr"];
        let priceChange60dInCur = this.details.market_data["price_change_percentage_60d_in_currency"]["inr"];
        let priceChange200dInCur = this.details.market_data["price_change_percentage_200d_in_currency"]["inr"];
        let priceChange1yInCur = this.details.market_data["price_change_percentage_1y_in_currency"]["inr"];

        this.priceChangePerInCur.push(priceChange24hInCur,priceChange7dInCur,priceChange14dInCur,priceChange30dInCur,priceChange60dInCur,priceChange200dInCur,priceChange1yInCur);
        this.changedMarketPerInCur.next(this.priceChangePerInCur);
        return this.priceChangePerInCur;
    }

    hideDetailsOnChange(val : boolean){
        let value = val;
        this.hideDetails.next(value);
    }


}