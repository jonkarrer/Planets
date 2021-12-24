import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Planet from "./comps/Planet";
import Home from "./comps/Home";
import MobileHeader from "./comps/MobileHeader";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MobileHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="planets/:planetId" element={<Planet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
