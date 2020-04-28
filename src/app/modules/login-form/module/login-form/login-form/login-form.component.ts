import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  loginForm = this.fb.group({

   userName:[''],
   password:['']   

  })
 onSubmit(){
  console.log('submit')
}

}
