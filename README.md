# CheckBirr 💵

Verify payment screenshots instantly ⚡

---

## Installation

```bash
npm install checkbirr
```

## Usage

```ts
import checkbirr from "checkbirr";

async function main() {
  try {
    const output = await checkbirr({
      imagePath: "./screenshot.jpg",
      amount: 5000,
      receiverAccounts: [
        {
          bank: "CBE",
          receiverName: "John Doe Smith",
          receiverAccountNumber: "1000*****",
        },
      ],
    });

    console.log(output);
  } catch (error) {
    console.log(error);
  }
}

main();
```

## Output

```ts
{
    verified:true,
    bank:"CBE",
    senderName:"Jane Doe Smith",
    senderAccountNumber:"1000*****",
    receiverName:"John Doe Smith",
    receiverAccountNumber:"1000*****",
    date:"Nov 02, 2026, 4:36 PM",
    transactionID:"FM43812X",
    amount:5000,
}
```

## Supported Banks

![Commercial Bank of Ethiopia](/assets/cbe.jpg)

## Note

This library does **NOT** detect duplicate transactions and it is up to the developer to keep a history of transactions inorder to detect duplicate receipts.

## Disclaimer

This is **NOT** an official api or library published by the banks supported.

## License

This project is licensed under the **MIT License**.
