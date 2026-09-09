export default interface Transaction {
  verified: boolean;
  transactionID: string;
  bank: string;
  senderAccount: string;
  senderName: string;
  receiverAccount: string;
  receiverName: string;
  amount: number;
  date: string;
}
