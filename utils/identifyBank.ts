const banks = [
  {
    name: "CBE",
    url:"mbreciept.cbe.com.et"
  }
]

export default function identifyBank(url: string) {
  const baseURL: string = new URL(url).hostname;
  for (let i = 0; i < banks.length; i++) {
    const bank = banks[i];
    if (baseURL === bank.url) {
      return bank.name;
    }
  }
  return null;
}
