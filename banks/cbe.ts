import * as cheerio from "cheerio";
import Transaction from "../types/transaction";

async function checkCBE(url: string): Promise<Transaction> {
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);

  return $;
}
