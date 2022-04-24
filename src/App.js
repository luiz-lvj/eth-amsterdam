import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deposit from "./components/Deposit";
import GlobalStyle from "./components/GlobalStyle";
import Home from "./components/Home";
import Vaults from "./components/Vaults";

function App() {

  const [walletAccount, setWalletAccount] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [getConnectedChain, setConnectedChain] = useState('');


  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home
        walletAccount={walletAccount} setWalletAccount={setWalletAccount}
        isConnected={isConnected} setIsConnected={setIsConnected}
        getConnectedChain={getConnectedChain} setConnectedChain={setConnectedChain}
        />}/>
        <Route path="/vaults" element={<Vaults
        walletAccount={walletAccount} setWalletAccount={setWalletAccount}
        isConnected={isConnected} setIsConnected={setIsConnected}
        getConnectedChain={getConnectedChain} setConnectedChain={setConnectedChain}
        />}/>
        <Route path="/ppn" element={<Deposit
        walletAccount={walletAccount} setWalletAccount={setWalletAccount}
        isConnected={isConnected} setIsConnected={setIsConnected}
        getConnectedChain={getConnectedChain} setConnectedChain={setConnectedChain}
        />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
