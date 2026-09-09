import puppeteer from "puppeteer";
import Transaction from "../types/transaction";
import Receipt from "../types/receipt.js";

export default async function checkCBE(url: string,receipt:Receipt): Promise<Transaction> {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle2" });

  await page.waitForSelector(
    ".md\\:text-lg.text-sm.font-semibold.py-1.md\\:py-2.px-4.text-center.border-b.m-0",
    { visible: true, timeout: 10000 }
  );

  const transactionID = await page.$eval(`.text-black.text-right.md\\:text-sm.md\\:w-full`, (element) => element.textContent?.trim() ?? "");

  const bank = "CBE";
  const senderAccount = await page.$eval(`.text-black.text-right.md\\:text-sm.md\\:col-span-1`, (element) => element.textContent?.trim() ?? "");
  const senderName = await page.$eval(".text-black.text-right.md\\:text-sm.md\\:col-span-1", (element) => element.textContent?.trim() ?? "");

  const receiverAccount = await page.$eval(`.text-black.text-right.md\\:text-sm.md\\:col-span-1`, (element) => element.textContent?.trim() ?? "");
  const receiverName = await page.$eval(`.text-black.text-right.md\\:text-sm.md\\:col-span-1`, (element) => element.textContent?.trim() ?? "");

  const amount = parseFloat(await page.$eval(`.text-black.text-right.md\\:text-sm.md\\:col-span-1`, (element) => element.textContent?.trim() ?? ""));
  const date = await page.$eval(`.text-black.text-right.md\\:text-sm.md\\:col-span-1`, (element) => element.textContent?.trim() ?? "");

  await browser.close();

  const verified = false

  if () {

  }

  const transaction: Transaction = {
    verified,
    transactionID,

    bank,
    senderAccount,
    senderName,

    receiverAccount,
    receiverName,

    amount,
    date
  }

  return transaction;
}
