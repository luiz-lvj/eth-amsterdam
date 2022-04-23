import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Home from "./components/Home";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";

function App() {

  /*async function connect(){
    const provider = new WalletConnectProvider({
      infuraId: "64b719a457bb4cafb5e9124618d5ba30",
    });
  
    await provider.enable();
  
    const web3 = new Web3(provider);
    console.log(web3);

  }
  

  function subscribeToEvents(){
    provider.on("accountsChanged", (accounts) => {
      console.log(accounts);
    });
  
    provider.on("chainChanged", (chainId) => {
      console.log(chainId);
    });
  
    provider.on("disconnect", (code, reason) => {
      console.log(code, reason);
    });
  }*/

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
