import scan from "./utils/scan.js"
import identifyBank from "./utils/identifyBank.js"
import banks from "./utils/banks.js"

interface Receipt {
  imagePath: string;
  receiverAccounts: {
    bank: string;
    accountNumber: string;
  }[];
  amount: number;
}

async function checkbirr(imagePath: string) {
  const url: string = await scan(imagePath);
  const bank: string = identifyBank(url);
}

checkbirr(`photo.jpg`)
