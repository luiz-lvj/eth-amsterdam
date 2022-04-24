import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

export default function Home({
    walletAccount, setWalletAccount, isConnected, setIsConnected, getConnectedChain, setConnectedChain
}){
    const navigate = useNavigate();

    return(
        <HomeStyle>
            <Header
            walletAccount={walletAccount} setWalletAccount={setWalletAccount}
            isConnected={isConnected} setIsConnected={setIsConnected}
            getConnectedChain={getConnectedChain} setConnectedChain={setConnectedChain}
            />
            <HomeTitle>Leibniz</HomeTitle>
            <HomeSub>
            Defi Options made easy for everyone.<br/> <br/>
            Protected Principal + Derivatives Strategy = Sustainable Yield Generation
            </HomeSub>
            <ButtonVault onClick={() => navigate("/vaults")}>Go to Vaults</ButtonVault>
            <Footer/>

        </HomeStyle>
    );
}

const HomeStyle = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 100px;
    bottom: 80px;
    padding-bottom: 20px;
    padding-top: 30px;
`;

const HomeTitle = styled.h1`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 75px;
`;

const HomeSub = styled.h3`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 25px;
    text-align: center;
`;

const ButtonVault = styled.button`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 20px;
    background: #0E0026;
    border: none;
    width: 30%;
    height: 70px;
    border-radius: 10px;
    cursor: pointer;
`;