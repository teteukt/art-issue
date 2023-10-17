import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/menu/menu";
import About from "./pages/Main";

function App() {
  return (
    <div>
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />

        </Routes>
      </BrowserRouter>
    </div>
 
    
  );
}

export default App;
