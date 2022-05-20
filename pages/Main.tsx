import { useState, useMemo } from "react";
import { Container } from "@mui/material";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import AddressForm from "../components/AddressForm";
import Balance from "../components/Balance";
import { BalanceContext } from "../context/BalanceContext";
import { Address, initialAddress } from "../reuse/AddressForm";

export const Main = (): JSX.Element => {
  const [currentAddress, setCurrentAddress] = useState<Address>(initialAddress);

  const MemoizedNavbar = useMemo(() => <Navbar />, []);

  return (
    <BalanceContext.Provider
      value={{
        currentAddress,
        setCurrentAddress,
      }}
    >
      {MemoizedNavbar}
      <Container>
        <Head>
          <title>Address Converter</title>
          <meta name="description" content="Zilliqa Address Converter" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <AddressForm />
        <Balance />
      </Container>
    </BalanceContext.Provider>
  );
};
