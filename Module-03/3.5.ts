{
  //access modefire
  class BankAccount {
    bankId: number;
    name: string;
    private _blance: number;
    constructor(bankId: number, name: string, blance: number) {
      this.bankId = bankId;
      this.name = name;
      this._blance = blance;
    }
    addDipositBlance(amount: number) {
      this._blance += amount;
    }
    withDrawBlance(amount: number) {
      this._blance -= amount;
    }
    getBlance() {
      return this._blance;
    }
  }

  const myAccount = new BankAccount(1, "Hamim", 100);
//   myAccount.addDipositBlance(20);
//   myAccount.withDrawBlance(3);
//   console.log(myAccount.getBlance());
}
