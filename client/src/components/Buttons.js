import { IconButton, Button } from "@mui/material";

export const IconButtons = ({ children, ...rest }) => {
  return <IconButton {...rest}>{children}</IconButton>;
};
export const Buttons = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};
