import "./App.css";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Header from "./components/Header"
import Login from "./components/Login";
import Signup from "./components/Signup";
import Plugin from "./components/Plugin"
import Dashboard from "./components/Dashboard";


function App () {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home/>} path="home" />
        <Route element={<Login/>} path="login" />
        <Route element={<Signup/>} path="signup" />
        <Route element={<Plugin />} path="plugin" />
        <Route element={<Dashboard/>} path="dashboard" />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;