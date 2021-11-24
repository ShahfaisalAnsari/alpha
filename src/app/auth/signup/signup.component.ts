import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide = true;
  hide2=true;
  show:boolean=false;
  show2:boolean=false;
  myForm = new FormGroup({
    uname: new FormControl('',[Validators.required,Validators.minLength(3)]),
    uemail: new FormControl('',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),Validators.required]),
    upass: new FormControl('',[Validators.required,Validators.minLength(8)]),
    upassconfirm: new FormControl('',[Validators.required,Validators.minLength(8)]),
  })
  // && this.myForm.value.uemail == "" && this.myForm.value.upass=="" && this.myForm.value.upassconfirm==""
  
  onSubmit(){
    console.log(this.myForm)
    if(this.myForm.value.uname =="" && this.myForm.value.uemail == "" && this.myForm.value.upass=="" && this.myForm.value.upassconfirm=="" ){
      // alert("please fill all values");
      this.show2=true;
        setTimeout(() => {
          this.show2=false;
        }, 2000);
    }
    else{
      if(this.myForm.value.upass==this.myForm.value.upassconfirm &&
        this.myForm.value.uname.length > 0 && this.myForm.value.uemail.length > 0 &&
         this.myForm.value.upass.length > 0 && this.myForm.value.upassconfirm.length > 0
         && this.myForm.controls.uname.valid && this.myForm.controls.uemail.valid && this.myForm.controls.upass.valid && this.myForm.controls.upassconfirm.valid
         ){
        console.log(this.myForm.value)
        console.log(this.myForm.touched)
        localStorage.setItem("data",JSON.stringify(this.myForm.value));
        console.log(localStorage.getItem("data"))
        this.router.navigate(["/dashboard"])
        
      }
      else{
        this.show=true;
        setTimeout(() => {
          this.show=false;
        }, 2000);
      }
    }
  }
  // @ViewChild("faltu") faltu:ElementRef | any;
  constructor(private router:Router, private renderer:Renderer2, private el:ElementRef) {
    
  }
  
  ngOnInit(): void {
    
    // this.renderer.setStyle(this.faltu.nativeElements,"color","red")
  }

}
