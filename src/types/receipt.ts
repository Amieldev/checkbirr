export default interface Receipt {
  src: string;
  fileType: string;
  receiverAccounts: {
    bank: string;
    receiverAccountNumber: string;
    receiverName: string;
  }[];
  amount: number;
}
