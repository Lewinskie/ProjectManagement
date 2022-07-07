import { Containers } from "./components/Containers";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";

function App() {
  return (
    <>
      <Header />
      <Containers>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Containers>
    </>
  );
}

export default App;
