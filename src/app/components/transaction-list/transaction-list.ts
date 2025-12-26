import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../models/transaction/transaction';

@Component({
  selector: 'app-transaction-list',
  imports: [CommonModule],
  templateUrl: './transaction-list.html',
  styleUrl: './transaction-list.css'
})
export class TransactionListComponent {

  transactions: Transaction[] = [
    {
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      category: 'Food',
      type: 'Expense',
      amount: 50
    },
    {
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      category: 'Food',
      type: 'Expense',
      amount: 50
    }
  ];

}