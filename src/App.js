import "./App.css";
import Productform from "./Productform.js";
import Sale from "./Sale";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* index is start ,which is we are start,opening screen */}
          <Route index element={<Productform />} />
          <Route path="/productform" element={<Productform />} />
          <Route path="/sale" element={<Sale />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
