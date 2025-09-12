import { Cipher, CipherCategory } from "../../cipher";

export const keyboardCipher: Cipher = {
  id: "keyboard",
  name: "كيبورد",
  category: CipherCategory.text,
  // prettier-ignore
  symbols: [
    "h", "f", "j", "e", "[", "p", "o", "]", "'", "v", ".", "s",
    "a", "w", "q", ";", "/", "u", "y", "t", "r", ";", "g", "l",
    "k", "i", ",", "d", "x", "c", "z", "n", "m", "b"
  ],
};
