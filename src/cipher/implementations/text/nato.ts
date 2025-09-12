import { Cipher, CipherCategory } from "../../cipher";

export const natoCipher: Cipher = {
  id: "nato",
  name: "ناتو",
  category: CipherCategory.text,
  // prettier-ignore
  symbols: [
    "ألفا", "برافو", "تشارلي", "دلتا", "إيكو", "فوكستروت", "جولف",
    "هوتيل", "إنديا", "جوليت", "كيلو", "ليما", "مايك", "نوفمبر",
    "أوسكار", "بابا", "كيبيك", "روميو", "سيرا", "تانغو", "يونيـفورم",
    "فيكتور", "ويسكي", "إكس راي", "يانكي", "زولو"
  ],
};
