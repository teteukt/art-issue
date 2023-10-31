import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/menu/menu";
import About from "./pages/Main";
import Rodape from "./components/rodape/rodape";

function App() {
  return (
    <div>
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />

        </Routes>
      </BrowserRouter>
      <Rodape />
    </div>
 
    
  );
}

export default App;
