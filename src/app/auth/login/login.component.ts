import { Component, Input, OnInit } from '@angular/core';
// import { Validators } from '@angular/forms';
// import { FormControl, FormLabel } from '@mui/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  // email:any = new FormControl('', [Validators.required, Validators.email]);

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
  constructor(private router:Router) { }
  data:any;
  objData:any;
  // dashboard:boolean=false;
  // data2:any;
  ngOnInit(): void {
    this.data=localStorage.getItem("data");
    this.objData=JSON.parse(this.data)
    console.log(this.objData)
    
  }
  
  myForm = new FormGroup({
    uemail: new FormControl('',[Validators.required,Validators.minLength(5),Validators.email]),
    upass: new FormControl('',[Validators.required,Validators.minLength(8)])
  })
  show:boolean=false;
  onSubmit(){
    console.log(this.myForm)
    console.log(this.myForm.touched)
    // localStorage.setItem("data2",JSON.stringify(this.myForm.value))
    // console.log(localStorage.getItem("data2"))
    // this.data2=localStorage.getItem("data2")
    // console.log(this.myForm.value.uname)
    // console.log(this.objData.uname)
    // setTimeout(() => {
      if(this.objData.uemail==this.myForm.value.uemail && this.objData.upass==this.myForm.value.upass){
        
        setTimeout(()=>{
          this.router.navigate(["/dashboard"])
        },2000)

      }
      else{
        this.show=true;
        setTimeout(()=>{
          this.show=false;
        },3000);
      }
      
    // }, 2000);
  }


}
