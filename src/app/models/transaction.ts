export class Transaction {
  public type: string;
  public accountId: number;
  public amount: number;
//   public transactionDate: string;
  public descriptions: string;
  
   
    constructor(
        type: string,
        accountId: number,
        amount: number,
        //transactionDate: string,
        desc: string,
    ) {
            this.type = type,
            this.accountId = accountId,
            this.amount = amount,
            //this.transactionDate = transactionDate,
            this.descriptions = desc
         }
}