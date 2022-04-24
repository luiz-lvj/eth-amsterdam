import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header({
    walletAccount, setWalletAccount, isConnected, setIsConnected, getConnectedChain, setConnectedChain
}){
    const navigate = useNavigate();


    useEffect(() => {
        setIsConnected(walletAccount ? true : false);
    }, [walletAccount]);
    
    const networkChanged = async () => {
        const chainID = await window.ethereum.request({ method: 'eth_chainId' });
        setConnectedChain(chainID);
    };

    const handleConnectOnce = async () => {
        if(!window.ethereum){
            alert('Metamask not found!');
            return;
        }
        if(isConnected){
            const confirmDisconnect = window.confirm("Do you really want to disconnect from Metamask?");
            if(!confirmDisconnect){
                return;
            }
            handleDisconnect();
            return;
        }
        const accounts = await window.ethereum
        .request({
            method: 'wallet_requestPermissions',
            params: [
            {
                eth_accounts: {},
            },
            ],
        })
        .then(() => window.ethereum.request({ method: 'eth_requestAccounts' }));

        setWalletAccount(accounts[0]);
    };

    const handleDisconnect = async () => {
        console.log('Disconnecting MetaMask...');
        setIsConnected(false);
        setWalletAccount('');
    };

    useEffect(() => {
        async function fetchData(){
            const chainID = await window.ethereum.request({ method: 'eth_chainId' });
            setConnectedChain(chainID);
            console.log('useEffect, chainID, ', chainID);

            const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
            });
            if (accounts[0]) {
            setWalletAccount(accounts[0]);
            }

            window.ethereum.on('chainChanged', networkChanged);
            return () => {
            window.ethereum.removeListener('chainChanged', networkChanged);
            };
        }
        fetchData();
    }, []);

    return(
        <HeaderStyle>
            <h1 onClick={() => navigate("/")}>Leibniz Protocol</h1>
            <MenuStyle>
                <h2 onClick={() => navigate("/")}>Home</h2>
                <h2 onClick={() => navigate("/vaults")}>Vaults</h2>
            </MenuStyle>
            <ConnectWalletButton onClick={handleConnectOnce}>{!isConnected? 'Connect Wallet' : 
            walletAccount.substr(0, 3) +
            '...' +
            walletAccount.substr(
                walletAccount.length - 3,
                walletAccount.length
            )
            }</ConnectWalletButton>
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