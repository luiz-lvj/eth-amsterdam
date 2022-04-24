import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

export default function Vaults({
    walletAccount, setWalletAccount, isConnected, setIsConnected, getConnectedChain, setConnectedChain
}){
    return(
        <VaultsStyle>
            <Header
            walletAccount={walletAccount} setWalletAccount={setWalletAccount}
            isConnected={isConnected} setIsConnected={setIsConnected}
            getConnectedChain={getConnectedChain} setConnectedChain={setConnectedChain}
            />
            <Footer/>
        </VaultsStyle>
    );

}

const VaultsStyle = styled.div``;