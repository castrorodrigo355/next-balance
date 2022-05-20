import { Typography, Toolbar, AppBar, CircularProgress } from "@mui/material";
import { useGetPriceQuery } from "../../app/api";

export const Navbar = (): JSX.Element => {
  const { data, isFetching } = useGetPriceQuery();

  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          Address Converter
        </Typography>
        <Typography>
          {isFetching ? (
            <CircularProgress color="secondary" />
          ) : data ? (
            `XCAD: ${data["xcad-network"].usd} `
          ) : (
            ""
          )}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
