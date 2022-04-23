import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deposit from "./components/Deposit";
import GlobalStyle from "./components/GlobalStyle";
import Home from "./components/Home";
import Vaults from "./components/Vaults";

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Vaults/>}/>
        <Route path="/ppn" element={<Deposit/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
