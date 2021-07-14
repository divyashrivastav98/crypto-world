import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route : Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onClick(redirectTo : string){
    if(redirectTo == 'home'){
      this.route.navigate(['']);
    }else{
      this.route.navigate(['contact'],{relativeTo:this.activeRoute})
    }
  }
}
