import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQueries";
import ClientRow from "./ClientRow";
import {
  TableBodies,
  TableCells,
  TableHeads,
  TableRows,
  Tables,
} from "./Containers";
import Spinner from "./Spinner";

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  if (loading) return <Spinner/>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {!loading && !error && (
        <Tables>
          <TableHeads>
            <TableRows>
              <TableCells>Name</TableCells>
              <TableCells>Email</TableCells>
              <TableCells>Phone</TableCells>
              <TableCells>Actions</TableCells>
            </TableRows>
          </TableHeads>
          <TableBodies>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </TableBodies>
        </Tables>
      )}
    </>
  );
};

export default Clients;
