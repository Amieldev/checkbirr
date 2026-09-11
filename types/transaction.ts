export default interface Transaction {
  verified: boolean;
  transactionID: string;
  bank: string;
  senderAccountNumber: string;
  senderName: string;
  receiverAccountNumber: string;
  receiverName: string;
  amount: number;
  date: string;
}
