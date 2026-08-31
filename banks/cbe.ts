import * as cheerio from "cheerio";

interface transaction{
  verified: boolean;
  id:string
  bank: string;
  sender: string;
  receiver: string;
  amount: number;
  date: string;
}

async function checkCBE(url: string): Promise<transaction> {
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);

  return $
}
