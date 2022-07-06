import AddClientModal from "./components/AddClientModal";
import Clients from "./components/Clients";
import { Containers } from "./components/Containers";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Containers>
        <AddClientModal />
        <Clients />
      </Containers>
    </>
  );
}

export default App;
