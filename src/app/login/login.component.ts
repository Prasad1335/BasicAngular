import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  flag = true;
  hide = true;
  namebtn = "Show Form";

  btnFun(btnf: any) {

    if (this.flag == true || this.hide == true) {
      btnf.style.backgroundColor = 'orange';
      this.namebtn = "Hide Form";
    }
    else {
      btnf.style.backgroundColor = 'green';
      this.namebtn = "Show Form";
    }
    this.flag = !this.flag;
    this.hide = !this.hide;


  }

  flag2 = true;
  hide2 = true;
  namebtnrr = "Show register Form";
  btnrFun(btnr: any) {

    if (this.flag2 == true || this.hide2 == true) {
      btnr.style.backgroundColor = 'orange';
      this.namebtnrr = "Hide register Form";
    }
    else {
      btnr.style.backgroundColor = 'green';
      this.namebtnrr = "Show register Form";
    }
    this.flag2 = !this.flag2;
    this.hide2 = !this.hide2;


  }
}
