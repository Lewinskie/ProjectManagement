import { IconButtons } from "./Buttons";
import { TableCells, TableRows } from "./Containers";
import { Delete } from "@mui/icons-material";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";
import { GET_PROJECTS } from "../queries/projectQueries";

const ClientRow = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    // Refetch the updated clients and projects
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
  });
  return (
    <TableRows>
      <TableCells>{client.name}</TableCells>
      <TableCells>{client.email}</TableCells>
      <TableCells>{client.phone}</TableCells>
      <TableCells>
        <IconButtons style={{ color: "red" }} onClick={deleteClient}>
          <Delete />
        </IconButtons>
      </TableCells>
    </TableRows>
  );
};

export default ClientRow;
