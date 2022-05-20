import { useState, useMemo } from "react";
import { Stack } from "@mui/material";
import { isBech32 } from "@zilliqa-js/util/dist/validation";
import { useBalanceContext } from "../../context/BalanceContext";
import { useRequestBalanceMutation } from "../../app/api";
import BalanceModal from "../BalanceModal";
import BalanaceAddress from "../BalanceAddress";

export const Balance = (): JSX.Element => {
  const context = useBalanceContext();
  const { currentAddress } = context!;
  const { address32, address16 } = currentAddress;
  const [selectedAddress, setSelectedAddress] = useState<string>("");
  const [modalResult, setModalResult] = useState<boolean>(false);

  const [fetchBalance, { data, isLoading, isError }] =
    useRequestBalanceMutation();

  const requestBalance = async (value: string): Promise<void> => {
    setSelectedAddress(value);
    setModalResult(true);
    await fetchBalance({
      address: value,
    });
  };

  const MemoizeDBalanaceAddress32 = useMemo(
    () => (
      <BalanaceAddress
        title="Balance Address 32"
        value={address32}
        onClick={() => requestBalance(address32)}
        disabled={!isBech32(address32)}
      />
    ),
    [currentAddress]
  );

  const MemoizeDBalanaceAddress16 = useMemo(
    () => (
      <BalanaceAddress
        title="Balance Address 16"
        value={address16}
        onClick={() => requestBalance(address16)}
        disabled={!isBech32(address32)}
      />
    ),
    [currentAddress]
  );

  const MemoizeDModalBalanace = useMemo(
    () => (
      <BalanceModal
        open={modalResult}
        handleClose={() => {
          setSelectedAddress("");
          setModalResult(false);
        }}
        selectedAddress={selectedAddress}
        result={data}
        loading={isLoading}
        error={isError}
      />
    ),
    [selectedAddress, data]
  );

  return (
    <Stack height="200px" justifyContent="space-evenly">
      {MemoizeDBalanaceAddress32}
      {MemoizeDBalanaceAddress16}
      {MemoizeDModalBalanace}
    </Stack>
  );
};

export default Balance;
