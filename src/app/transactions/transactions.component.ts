import { Component, OnInit } from "@angular/core";
import { TransactionService } from "./transaction.service";

@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.scss"],
})
export class TransactionsComponent implements OnInit {
  transactions=[];
  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.getAllCustomers();
  }
  getAllCustomers(){
    this.transactionService.getTransactions().subscribe((data)=>{
      console.log(data);
      this.transactions=data;
    },
    (err)=>{
      console.log(err);
    })
  }

  searchThis(searchWord) {
    this.transactionService.searchTransactions(searchWord).subscribe((data)=>{
      console.log(data);
      this.transactions=data;
    },
    (err)=>{
      console.log(err);
    })
}
}
