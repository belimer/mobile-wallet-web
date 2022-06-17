import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.scss']
})
export class AccountBalanceComponent implements OnInit {
    account 
  constructor(private accountService: AccountService
    ) { }

  ngOnInit() {
  }
  searchThis(searchWord) {
    this.accountService.findAccount(searchWord).subscribe((data)=>{
      console.log(data);
      this.account=data;
    },
    (err)=>{
      console.log(err);
    })
}

}
