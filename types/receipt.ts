export default interface Receipt {
  imagePath: string;
  receiverAccounts: {
    bank: string;
    accountNumber: string;
  }[];
  amount: number;
}
