export enum CipherCategory {
  number = "أرقام",
  text = "حروف",
  symbol = "رموز",
}

export interface Cipher {
  id: string;
  name: string;
  category: CipherCategory;
  image?: string;
  features?: Partial<CipherFeatures>;
  symbols: string[];
}

interface CipherFeatures {
  reversible: boolean;
  shiftableKey: { factor: number };
  customFont: { fontFamily: string };
  audible: {
    toAudioBlob: (
      encodedText: string,
      letterSeparator: string,
      wordSeparator: string,
      speed: number
    ) => Blob;
  };
}
