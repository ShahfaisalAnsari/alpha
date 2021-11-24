import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }
  show:boolean=true;
  ngOnInit(): void {
    // alert("login successfull")
    this.show=true;
    setTimeout(()=>{
      this.show=false
    },1000);
  }

}
