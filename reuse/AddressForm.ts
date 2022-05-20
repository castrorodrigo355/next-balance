import { fromBech32Address } from "@zilliqa-js/crypto";
import { isBech32, isAddress } from "@zilliqa-js/util/dist/validation";

export interface Address {
  address32: string;
  address16: string;
}

export const initialAddress: Address = {
  address32: "",
  address16: "",
};

enum DescriptionType {
  EMPTY = "",
}

export const proccessAddress32 = (address32: string): string => {
  try {
    const baseAddress16 = isBech32(address32)
      ? fromBech32Address(address32)
      : DescriptionType.EMPTY;
    return isAddress(baseAddress16) ? baseAddress16 : DescriptionType.EMPTY;
  } catch (error) {
    return DescriptionType.EMPTY;
  }
};
