import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers=[];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getAllCustomers();
  }
  getAllCustomers(){
    this.customerService.getCustomers().subscribe((data)=>{
      console.log(data);
      this.customers=data;
    },
    (err)=>{
      console.log(err);
    })
  }


}
