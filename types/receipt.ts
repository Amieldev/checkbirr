export default interface Receipt {
  imagePath: string;
  receiverAccounts: {
    bank: string;
    receiverAccount: string;
    receiverName: string;
  }[];
  amount: number;
}
