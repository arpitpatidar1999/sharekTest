import logo from "./logo.svg";
import "./App.css";
import AllRoute from "./Routes/AllRoute";
import { BrowserRouter } from "react-router-dom";
import OneStop from "./Components/Cards/OneStop/OneStop";

function App() {
  return (
    <BrowserRouter>
      <AllRoute />
    </BrowserRouter>
    // <OneStop/>
  );
}

export default App;
