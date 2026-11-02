import scan from "./utils/scan.js";
import identifyBank from "./utils/identifyBank.js";
import Receipt from "./types/receipt.js";
import "dotenv/config";

import checkCBE from "./banks/cbe.js";

async function checkbirr(receipt: Receipt) {
  const url: string = await scan(receipt.imagePath);
  const bank: string = identifyBank(url);

  switch (bank) {
    case "CBE": {
      const output = await checkCBE(url, receipt);
      return output;
    }
    default:
      throw new Error(`Unsupported bank: ${bank}`);
  }
}

async function main() {
  const log = await checkbirr({
    imagePath: "photo.jpg",
    receiverAccounts: [
      {
        bank: "CBE",
        receiverAccountNumber: process.env.CBE_ACCOUNT_NUMBER ?? "",
        receiverName: process.env.CBE_RECEIVER_NAME ?? "",
      },
    ],
    amount: 400,
  });

  console.log(log);
}

main();
