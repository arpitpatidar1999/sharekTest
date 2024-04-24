import logo from "./logo.svg";
import "./App.css";
// import { Route } from "react-router-dom";
import AllRoute from "./Routes/AllRoute";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <AllRoute />
    </BrowserRouter>
  );
}

export default App;
