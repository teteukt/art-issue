import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/menu/menu";
import { Main } from "./pages/Main";
import { Rodape } from "./components/rodape/rodape";

function App() {
  return (
    <div>
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />

        </Routes>
      </BrowserRouter>
      <Rodape />
    </div>
 
    
  );
}

export default App;
