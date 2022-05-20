import { Fragment } from "react";
import { Modal, Typography, Box, CircularProgress, Stack } from "@mui/material";
import { BalanceResultProps } from "../../typings/api";

interface ModalPositionProps {
  position: string;
  top: string;
  left: string;
  transform: string;
  width: number;
  bgcolor: string;
  p: number;
}

export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  p: 4,
};

interface BalanceModalProps {
  open: boolean;
  handleClose: () => void;
  selectedAddress: string;
  loading: boolean;
  error: boolean;
  result: BalanceResultProps | undefined;
}

export const BalanceModal = ({
  open,
  handleClose,
  selectedAddress,
  loading,
  error,
  result,
}: BalanceModalProps) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Stack alignItems="center" overflow="hidden">
          <Typography marginY={2} color="blue" variant="h5">
            Address: {selectedAddress}
          </Typography>
          {loading && <CircularProgress color="secondary" />}
          {error && <Typography variant="h6">No Data Available</Typography>}
          {result && (
            <Fragment>
              <Typography variant="h6">
                Balance: {result?.balance.result.balance}
              </Typography>
              <Typography variant="h6">
                Nonce: {result?.balance.result.nonce}
              </Typography>
            </Fragment>
          )}
        </Stack>
      </Box>
    </Modal>
  );
};

export default BalanceModal;
