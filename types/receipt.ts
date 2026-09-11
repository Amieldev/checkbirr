export default interface Receipt {
  imagePath: string;
  receiverAccounts: {
    bank: string;
    receiverAccountNumber: string;
    receiverName: string;
  }[];
  amount: number;
}
