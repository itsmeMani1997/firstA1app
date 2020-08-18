import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  @Input() name: string;
  emailForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.emailForm = new FormGroup({
      email:new FormControl('', [Validators.email]),
     PhoneNumber:new FormControl('',[Validators.pattern('[6-9]\\d{9}')]),
     Password:new FormControl('', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')] 
  )
    });
    
    
  }
  fun1(){
    if(this.emailForm.valid == false)
    alert("Enter valid data")
    else{
      alert(this.emailForm.controls.PhoneNumber.value)
    }
  }
}
