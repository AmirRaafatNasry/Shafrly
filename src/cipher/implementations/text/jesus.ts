import { Cipher, CipherCategory } from "../../cipher";

export const jesusCipher: Cipher = {
  id: "jesus",
  name: "يسوع",
  category: CipherCategory.text,
  features: {
    shiftableKey: { factor: 1 },
  },
  // prettier-ignore
  symbols: [
    "ي1", "ي2", "ي3", "ي4", "ي5", "ي6", "ي7",
    "س1", "س2", "س3", "س4", "س5", "س6", "س7",
    "و1", "و2", "و3", "و4", "و5", "و6", "و7",
    "ع1", "ع2", "ع3", "ع4", "ع5", "ع6", "ع7"
  ],
};
