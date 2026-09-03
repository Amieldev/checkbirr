export default interface Transaction {
  verified: boolean;
  id: string;
  bank: string;
  senderAccount: string;
  amount: number;
  date: string;
}
