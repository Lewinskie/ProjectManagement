import { Link } from "react-router-dom";

export const Links = ({ children, ...rest }) => {
  return <Link {...rest}>{children}</Link>;
};
