import { Stack, Button } from "@mui/material";
import SectionHeader from "../SectionHeader";

interface BalanceAddressProps {
  title: string;
  value: string;
  onClick: () => void;
  disabled: boolean;
}

export const BalanceAddress = ({
  title,
  value,
  onClick,
  disabled,
}: BalanceAddressProps): JSX.Element => {
  return (
    <Stack width="100%" direction="row" justifyContent="space-between">
      <Stack width="50%" overflow="hidden">
        <SectionHeader
          title={`${title}: ${value}`}
          severity={disabled ? "error" : "info"}
        />
      </Stack>
      <Button variant="contained" disabled={disabled} onClick={onClick}>
        Balance
      </Button>
    </Stack>
  );
};

export default BalanceAddress;
