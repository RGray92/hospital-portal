 import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Clinic from "./pages/Clinic";
import Entertainment from "./pages/Entertainment";
import Medteam from "./pages/Medteam"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="clinic" element={<Clinic />} />
          <Route path="medteam" element={<Medteam />} />
          <Route path="entertainment" element={<Entertainment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);