{
  //Geter & Setter

  class BankAccount {
    readonly bankId: number;
    name: string;
    private _blance: number;
    constructor(bankId: number, name: string, blance: number) {
      this.bankId = bankId;
      this.name = name;
      this._blance = blance;
    }
    // Seter
    // addDipositBlance(amount: number) {
    //   this._blance += amount;
    // }
    set diposit(amount: number) {
      this._blance += amount;
    }
    set withdraw(amount: number) {
      this._blance -= amount;
    }
    // withDrawBlance(amount: number) {
    //   this._blance -= amount;
    // }

    // getBlance() {
    //   return this._blance;
    // }
    //Geter
    get blance() {
      return this._blance;
    }
  }

  const myAccount = new BankAccount(1, "Hamim", 100);
  myAccount.diposit = 90;
  myAccount.withdraw = 8;

  console.log(myAccount.blance);
}
