import { useEffect } from "react";
import { Grid, Stack } from "@mui/material";
import AddressInput from "../AddressInput";
import { proccessAddress32 } from "../../reuse/AddressForm";
import { useBalanceContext } from "../../context/BalanceContext";
import SectionHeader from "../SectionHeader";

export const AddressForm = (): JSX.Element => {
  const context = useBalanceContext();
  const { currentAddress, setCurrentAddress } = context!;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { target } = event;
    const { name, value } = target;
    setCurrentAddress({
      ...currentAddress,
      [name]: value,
    });
  };

  useEffect(() => {
    const { address32 } = currentAddress;
    const address16 = proccessAddress32(address32);
    setCurrentAddress({
      ...currentAddress,
      ["address16"]: address16,
    });
  }, [currentAddress.address32]);

  return (
    <Stack marginTop={10} height="200px" justifyContent="space-evenly">
      <form>
        <SectionHeader severity="info" title={"Address 32 to 16 Conversion"} />
        <Grid marginY={2} container spacing={3}>
          <Grid item xs={6}>
            <AddressInput
              placeholder="Bech32 Address"
              value={currentAddress!.address32!}
              name="address32"
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={6}>
            <AddressInput
              placeholder="Hex Address"
              name="address16"
              value={currentAddress!.address16!}
              disabled={true}
            />
          </Grid>
        </Grid>
      </form>
    </Stack>
  );
};

export default AddressForm;
