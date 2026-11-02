import banks from "./banks.js"

export default function identifyBank(url: string): string {
  const baseURL = new URL(url).hostname;
  const bank = banks.find(b => b.url === baseURL);
  if (!bank) throw new Error(`Unknown bank for URL: ${url}`);
  return bank.name;
}
