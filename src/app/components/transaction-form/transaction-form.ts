import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionService } from '../../services/transaction/tansaction';

@Component({
    // selector: 'app-transaction-form',
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './transaction-form.html',
    styleUrl: './transaction-form.css',
})
export class TransactionForm implements OnInit {
    transactionForm: FormGroup;
    incomeCategories = ['Salary', 'Freelance', 'Investment'];
    expenseCategories = ['Food', 'Transportation', 'Entertainment'];

    availableCategories: string[] = [];

    constructor(private fb: FormBuilder, private router: Router, private transactionService: TransactionService) {
        this.transactionForm = this.fb.group({
            type: ['Expense', Validators.required],
            category: ['', Validators.required],
            amount: ['', [Validators.required, Validators.min(0)]],
            createdAt: [new Date(), Validators.required],
        });
    }

    ngOnInit(): void {
        this.updateAvailableCategories();
        this.transactionForm.patchValue({ category: '' });
    }

    onTypeChange() {
        this.updateAvailableCategories();
    }

    updateAvailableCategories() {
        const type = this.transactionForm.get('type')?.value;
        this.availableCategories =
            type === 'Expense' ? this.expenseCategories : this.incomeCategories;
        this.transactionForm.patchValue({ category: '' });
    }

    onSubmit() {
        if (this.transactionForm.valid) {
            const transactionData = this.transactionForm.value;
            console.log('Transaction Submitted:', transactionData);
            this.transactionService.create(transactionData).subscribe(() => {
                this.router.navigate(['/transactions']);
            });
        }
    }

    cancel() {
        this.router.navigate(['/transactions']);
    }
}
