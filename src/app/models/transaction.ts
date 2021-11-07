export class Transaction {
  public type: string;
  public from: string;
  public to: string;
  public amount: number;
  public desc: string;
   
    constructor(
        type: string,
        from: string,
        to: string,
        amount: number,
        desc: string,
    ) {
            this.type = type,
            this.from = from,
            this.to = to,
            this.amount = amount,
            this.desc = desc
         }
}