import { Component, OnInit } from '@angular/core';
import { EmployeeRegService } from '../employee-reg.service';
import { User } from '../User';

@Component({
  selector: 'app-employee-reg',
  templateUrl: './employee-reg.component.html',
  styleUrls: ['./employee-reg.component.css']
})
export class EmployeeRegComponent implements OnInit {
  user:User=new User("","",0,"");
  message:any;
  constructor(private service:EmployeeRegService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnChanges() {
    
    
  }

  public registerNow(){
    let response=this.service.doRegistration(this.user);
    response.subscribe((data=>this.message=data))
  }

}
