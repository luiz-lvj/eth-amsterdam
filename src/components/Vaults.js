import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function Vaults({
    walletAccount, setWalletAccount, isConnected, setIsConnected, getConnectedChain, setConnectedChain
}){
    const navigate = useNavigate();
    return(
        <VaultsStyle>
            <Header
            walletAccount={walletAccount} setWalletAccount={setWalletAccount}
            isConnected={isConnected} setIsConnected={setIsConnected}
            getConnectedChain={getConnectedChain} setConnectedChain={setConnectedChain}
            />
            <UpImgs>
                <ImgHeader src={"/static/img/img4.png"}/>
            </UpImgs>
            <DownImgs>
                <ImgStyle onClick={() => navigate("/ppn")} src={"/static/img/img1.png"}/>
                <ImgStyle src={"/static/img/img2.png"}/>
                <ImgStyle src={"/static/img/img3.png"}/>
            </DownImgs>
            <Footer/>
        </VaultsStyle>
    );

}

const VaultsStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const UpImgs = styled.div`
    margin-top: 100px;
`;

const ImgHeader = styled.img`
    width: 100%;
`;

const DownImgs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    left: auto;
    right: auto;
    margin-bottom: 80px;
`;

const ImgStyle = styled.img`
    width: 20%;
    cursor: pointer;
    margin-bottom: 10px;
`;