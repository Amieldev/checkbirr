import scan from "./utils/scan.js";
import identifyBank from "./utils/identifyBank.js";
import validator from "./utils/validator.js";
import Receipt from "./types/receipt.js";

import checkCBE from "./banks/cbe.js";

export default async function checkbirr(receipt: Receipt) {
  const validationResult = validator(receipt);
  if (!validationResult.success) {
    const messages = validationResult.error.issues.map((issue) => {
      const path = issue.path.join(".");
      return path ? `"${path}": ${issue.message}` : issue.message;
    });
    throw new Error(`checkbirr: invalid receipt:\n${messages.join("\n")}`);
  }

  const validReceipt = validationResult.data;

  const url: string = await scan(validReceipt.src);
  const bank: string = identifyBank(url);

  switch (bank) {
    case "CBE": {
      const output = await checkCBE(url, validReceipt);
      return output;
    }
    default:
      throw new Error(`Unsupported bank: ${bank}`);
  }
}
