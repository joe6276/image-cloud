import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private metaService: Meta) { }
  ngOnInit(): void {
    this.remove()
  }
  remove(){
    this.metaService.removeTag( "name='robots'")
    this.metaService.removeTag("name='description'")
  }

  
}


