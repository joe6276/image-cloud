import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private router:Router,private title:Title,
     private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
   this.router.events.pipe(
    filter(event=>event instanceof NavigationEnd)
   ).subscribe(()=>{
   let route= this.getChildRoute(this.activatedRoute)
    route.data.subscribe(
      data=>
        this.title.setTitle(data['title'])
        )
         
   }
   )
  }

  getChildRoute(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return activatedRoute.firstChild
    } else {
      return activatedRoute;
    }
  }
  
}
