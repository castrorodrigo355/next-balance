import { createContext, useContext } from "react";
import { Address } from "../reuse/AddressForm";

interface BalanceCtxProps {
  currentAddress: Address;
  setCurrentAddress: React.Dispatch<React.SetStateAction<Address>>;
}

const BalanceContext = createContext<BalanceCtxProps | null>(null);

const useBalanceContext = (): BalanceCtxProps | null =>
  useContext(BalanceContext);

export { BalanceContext, useBalanceContext };
