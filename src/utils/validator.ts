import * as z from "zod";

export const receiptSchema = z.object({
  src: z.string(),
  fileType: z.string(),
  receiverAccounts: z
    .array(
      z.object({
        bank: z.string(),
        receiverName: z.string(),
        receiverAccountNumber: z.string(),
      }),
    )
    .min(1, "receiverAccounts must have at least one entry"),
  amount: z.number(),
});

export type Receipt = z.infer<typeof receiptSchema>;

export default function validateReceipt(receipt: unknown) {
  return receiptSchema.safeParse(receipt);
}
