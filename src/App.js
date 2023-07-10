import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavigationBar";
import ListofItem from "./Components/ListofItem";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { ThemeProvider } from "@mui/material";
import theme from "./Components/UI/Theme";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/listofitem" element={<ListofItem />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
