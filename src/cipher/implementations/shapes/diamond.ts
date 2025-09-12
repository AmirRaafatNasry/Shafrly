import { Cipher, CipherCategory } from "../../cipher";

export const diamondCipher: Cipher = {
  id: "diamond",
  name: "معين",
  category: CipherCategory.symbol,
  features: {
    shiftableKey: { factor: 4 },
    reversible: false,
  },
  // prettier-ignore
  symbols: [
    "1◣", "1◢", "1◤", "1◥",
    "2◣", "2◢", "2◤", "2◥",
    "3◣", "3◢", "3◤", "3◥",
    "4◣", "4◢", "4◤", "4◥",
    "5◣", "5◢", "5◤", "5◥",
    "6◣", "6◢", "6◤", "6◥",
    "7◣", "7◢", "7◤", "7◥"
  ],
};
