import { Account } from "./Account";

export class Transaction {
    id : number;
    description :string;
    deposit : number;
    withdrawal : number;
    date : number;
    account : Account;
    balance : number;
}