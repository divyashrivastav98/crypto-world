import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from 'src/app/app-service.component';
import { CoinsDetails } from 'src/app/coinsDetails.model';
import { Currency } from 'src/app/currency.model';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.hideDetails.subscribe((data)=>{
      this.isShowDetails = data;
    })
  }

  details !: CoinsDetails;
  @Input('id') id!: number;
  @Input() isShowDetails !:boolean;
  marketChangePer : number[] = [];
  cmp !:Currency;
  cmpInINR !: string;
  cmpInUSD !: string;
  marCapInINR !: string;
  marCapInUSD !: string;
  totalVolInINR !: string;
  totalVolInUSD !: string;
  high24hINR !: string;
  high24hUSD !: string;
  low24hINR !: string;
  low24hUSD !: string;
  homepageLink !: string;
  blockChainSite !: string;
  chatUrl !: string;
  desc !:string;
  imgSrc !:string;
  contentType : string = 'details';
  isLoading !: boolean;
  fb !:string;
  twitter !:string;
  reddit !:string;
  telegram !:string;

  onShowDetails() {
    this.isLoading = true;
    setTimeout(()=>{
        this.appService.getDetailById(this.id).subscribe((response: CoinsDetails) => {
        this.details = response;
        this.desc = this.details.description["en"].substr(0,934);
        this.imgSrc = this.details.image["small"];
        this.setMarketData();
        this.setLinks();
        this.lineChart();
        this.setCommunityData();
        this.isLoading = false;
      })
    },1000)
    this.contentType = 'details';
    this.isShowDetails = true;
  }

  setCommunityData(){
    this.fb = this.details.community_data["facebook_likes"] ? this.details.community_data["facebook_likes"].toLocaleString() : '';
    this.twitter = this.details.community_data["twitter_followers"] ? this.details.community_data["twitter_followers"].toLocaleString() : '';
    this.reddit = this.details.community_data["reddit_subscribers"] ? this.details.community_data["reddit_subscribers"].toLocaleString() : '';
    this.telegram = this.details.community_data["telegram_channel_user_count"] ? this.details.community_data["telegram_channel_user_count"].toLocaleString() : '';
  }
  setLinks(){
    this.homepageLink = this.details.links["homepage"][0];
    this.blockChainSite = this.details.links["blockchain_site"][0];
    this.chatUrl = this.details.links["chat_url"][0];
  }

  setMarketData(){
    this.cmp = this.details.market_data["current_price"];

    this.cmpInINR = this.cmp["inr"] ? this.cmp["inr"].toLocaleString() : '0';
    this.cmpInUSD = this.cmp["usd"] ? this.cmp["usd"].toLocaleString() : '0';

    this.marCapInINR = this.details.market_data["market_cap"]["inr"] ? this.details.market_data["market_cap"]["inr"].toLocaleString() : '0';
    this.marCapInUSD = this.details.market_data["market_cap"]["usd"] ? this.details.market_data["market_cap"]["usd"].toLocaleString() : '0';

    this.totalVolInINR = this.details.market_data["total_volume"]["inr"] ? this.details.market_data["total_volume"]["inr"].toLocaleString() : '0';
    this.totalVolInUSD = this.details.market_data["total_volume"]["usd"] ? this.details.market_data["total_volume"]["usd"].toLocaleString() : '0';
    
    this.high24hINR = this.details.market_data["high_24h"]["inr"] ? this.details.market_data["high_24h"]["inr"].toLocaleString() : '0';
    this.high24hUSD = this.details.market_data["high_24h"]["usd"] ? this.details.market_data["high_24h"]["usd"].toLocaleString() : '0';

    this.low24hINR = this.details.market_data["low_24h"]["inr"] ? this.details.market_data["low_24h"]["inr"].toLocaleString() : '0';
    this.low24hUSD = this.details.market_data["low_24h"]["usd"] ? this.details.market_data["low_24h"]["usd"].toLocaleString() : '0';
  }

  lineChart(){
    this.marketChangePer = [];
    let per24h = this.details.market_data["price_change_percentage_24h"];
    let per7d = this.details.market_data["price_change_percentage_7d"];
    let per14d = this.details.market_data["price_change_percentage_14d"];
    let per30d = this.details.market_data["price_change_percentage_30d"];
    let per60d = this.details.market_data["price_change_percentage_60d"];
    let per200d = this.details.market_data["price_change_percentage_200d"];
    let per1y = this.details.market_data["price_change_percentage_1y"];

    this.marketChangePer.push(per24h,per7d,per14d,per30d,per60d,per200d,per1y);

    this.appService.setMarketPerChange(this.marketChangePer);
  }

  onButtonClicked(type:string){
    this.contentType = type
  }

  onClear(){
    this.isShowDetails = false;
  }

}
