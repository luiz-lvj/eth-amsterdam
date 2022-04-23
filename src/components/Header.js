import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header(){
    const navigate = useNavigate();
    const [connected, setConnected] = useState(false);

    return(
        <HeaderStyle>
            <h1 onClick={() => navigate("/")}>Leibniz Protocol</h1>
            <MenuStyle>
                <h2 onClick={() => navigate("/")}>Home</h2>
                <h2 onClick={() => navigate("/vaults")}>Vaults</h2>
            </MenuStyle>
            <ConnectWalletButton onClick={() => setConnected(true)}>{!connected? 'Connect Wallet' : 'abc'}</ConnectWalletButton>
        </HeaderStyle>
    );
}


const HeaderStyle = styled.div`
    display: flex;
    flex-direction: row;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 100px;
    align-items: center;
    padding-left: 5%;
    padding-right: 5%;
    justify-content: space-between;
    h1,h2{
        color: #FFFFFF;
        font-weight: bold;
        cursor: pointer;
    }
    h1{
        font-size: 25px;
    }
    h2{
        font-size: 18px;
    }
`;

const MenuStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 20%;
    h2:hover{
        text-decoration: underline;
    }
`;

const ConnectWalletButton = styled.button`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 20px;
    background: #2561ED;
    border: none;
    width: 24%;
    height: 61px;
    border-radius: 10px;
    cursor: pointer;
`;