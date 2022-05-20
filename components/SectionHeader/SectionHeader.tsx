import { Alert, AlertColor } from "@mui/material";

interface SectionHeaderProps {
  severity: AlertColor;
  title: string;
}

export const SectionHeader = ({
  title,
  severity = "info",
}: SectionHeaderProps): JSX.Element => {
  return <Alert severity={severity}>{title}</Alert>;
};

export default SectionHeader;
