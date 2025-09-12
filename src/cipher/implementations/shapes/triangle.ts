import { Cipher, CipherCategory } from "../../cipher";

export const triangleCipher: Cipher = {
  id: "triangle",
  name: "مثلث",
  category: CipherCategory.symbol,
  features: {
    reversible: false,
  },
  // prettier-ignore
  symbols: [
    "1▲",
    "2◣◼", "2◼◢",
    "3◣◼", "3◼(1)", "3◼◢",
    "4◣◼", "4◼(1)", "4◼(2)", "4◼◢",
    "5◣◼", "5◼(1)", "5◼(2)", "5◼(3)", "5◼◢",
    "6◣◼", "6◼(1)", "6◼(2)", "6◼(3)", "6◼(4)", "6◼◢",
    "7◣◼", "7◼(1)", "7◼(2)", "7◼(3)", "7◼(4)", "7◼(5)", "7◼◢"
  ],
};
