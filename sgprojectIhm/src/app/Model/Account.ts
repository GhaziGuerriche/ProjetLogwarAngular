import { Transaction } from './Transaction'
export interface Account{
    accountNumber : number;
    balance : number;
    transactions : Array<Transaction>
    
}