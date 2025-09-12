import { Cipher, CipherCategory } from "../../cipher";

export const compassCipher: Cipher = {
  id: "compass",
  name: "بوصلة",
  category: CipherCategory.symbol,
  features: {
    reversible: false,
  },
  // prettier-ignore
  symbols: [
    "N(1)", "NE(1)", "E(1)", "SE(1)", "S(1)", "SW(1)", "W(1)", "NW(1)",
    "N(2)", "NE(2)", "E(2)", "SE(2)", "S(2)", "SW(2)", "W(2)", "NW(2)",
    "N(3)", "NE(3)", "E(3)", "SE(3)", "S(3)", "SW(3)", "W(3)", "NW(3)",
    "N(4)", "NE(4)", "E(4)", "SE(4)"
  ],
};
