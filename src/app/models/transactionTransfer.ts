export class TransactionTransfer {
  public type: string;
  public fromAccountId: number;
  public toAccountId: number;
  public amount: number;
  public descriptions: string;
   
    constructor(
        type: string,
        from: number,
        to: number,
        amount: number,
        desc: string,
    ) {
            this.type = type,
            this.fromAccountId = from,
            this.toAccountId = to,
            this.amount = amount,
            this.descriptions = desc
         }
}