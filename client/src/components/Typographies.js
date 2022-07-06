import { Typography } from "@mui/material";

export const Typographies = ({ children, ...rest }) => {
  return <Typography {...rest}>{children}</Typography>;
};
