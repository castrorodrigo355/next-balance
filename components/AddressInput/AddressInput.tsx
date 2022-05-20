import { Input } from "@mui/material";

interface AddressInputProps {
  placeholder: string;
  value: string;
  name: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddressInput = ({
  placeholder,
  name,
  value,
  disabled,
  onChange,
}: AddressInputProps): JSX.Element => {
  return (
    <Input
      fullWidth
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default AddressInput;
