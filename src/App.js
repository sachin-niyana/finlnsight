import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import NewFile from "./view/dashboard/NewFile";
import Navbar from "./components/Common/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NewFile />} />
      </Routes>
    </>
  );
}

export default App;
