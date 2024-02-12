import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 
  userName:string="";
  userAge:string="";
  userEmail:string="";
  userPassword:string="";
  // foInput (){
  //   if(this.userName.length > 0){
  //     this.top="-20px";
  //     this.flag=true;
  //   }
  //   else{
  //     this.top="0px"
  //     this.flag=false;
  //   }
  // }
  

}
