import {
  Grid,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  // Modal,
} from "@mui/material";

export const Containers = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export const GridContainer = ({ children, ...rest }) => {
  return (
    <Grid container {...rest}>
      {children}
    </Grid>
  );
};
export const GridItem = ({ children, ...rest }) => {
  return (
    <Grid item {...rest}>
      {children}
    </Grid>
  );
};
export const ImageWrapper = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

export const TableContainers = ({ children, ...rest }) => {
  return <TableContainer {...rest}>{children}</TableContainer>;
};
export const TableHeads = ({ children, ...rest }) => {
  return <TableHead {...rest}>{children}</TableHead>;
};
export const TableRows = ({ children, ...rest }) => {
  return <TableRow {...rest}>{children}</TableRow>;
};
export const TableCells = ({ children, ...rest }) => {
  return <TableCell {...rest}>{children}</TableCell>;
};
export const TableBodies = ({ children, ...rest }) => {
  return <TableBody {...rest}>{children}</TableBody>;
};
export const Tables = ({ children, ...rest }) => {
  return <Table {...rest}>{children}</Table>;
};

// export const Modals = ({ children, ...rest }) => {
//   return <Modal {...rest}>{children}</Modal>;
// };
