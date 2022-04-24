import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";

export default function Deposit({
    walletAccount, setWalletAccount, isConnected, setIsConnected, getConnectedChain, setConnectedChain
}){
    const [depositing, setDepositing] = useState(true);
    const [valueDepositWithDraw, setValueDepositDraw] = useState(0);
    const [balance, setBalance] = useState(0);
    const [vault, setVault] = useState(100000);
    const [ratio, setRatio] = useState('1');

    function handleDepositWithDraw(){
        if(depositing){
            setBalance('50,000');
            setVault('150,000');
            return;
        }
        setBalance(0);
        setVault('100,000');
    }

    function handleSetWithdraw(){
        setDepositing(false);
        setVault('150,195');
        setRatio('1.0012')
    }

    return(
        <DepositStyle>
            <Header
            walletAccount={walletAccount} setWalletAccount={setWalletAccount}
            isConnected={isConnected} setIsConnected={setIsConnected}
            getConnectedChain={getConnectedChain} setConnectedChain={setConnectedChain}
            />
            <UpStyle>
                <div>
                    <h1>USDC-T-ETH</h1>
                    <h2>Current Vault Deposits ---- ${vault}</h2>
                    <h2>Max Vault Capacity     ---- $1000000</h2>
                </div>
                <ImgStyle src={"/static/img/usdc.png"}/>
            </UpStyle>
            <BottomStyle>
                <DescriptionStyle>
                    <h1>Strategy</h1>
                    <p>
                    The vault firstly generates yield by lending USDC from Aave pools. 
                    The yields are then used to mint ETH out-of-the money put options on Opyn,
                    which we will sell to collect the premium.
                    </p>
                    <p>
                    On expiry Date, if the market price is above the strike price, the options will be
                    worthless, meaning that the vault will collect the entirety of the premium,
                    hence leveraging the initial yield from Aave, which is reinvested, essentially
                    auto-compounding over time.
                    </p>
                    <p>
                    As the options strategies only uses the interest generated from the principal,
                    it is guaranteed that on the worst possible case scenario, which is the underlying
                    asset going to zero, the user won't lose any money at all and will get their principal back.
                    </p>
                </DescriptionStyle>
                <DepositWithDrawStyle>
                    <HeaderDeposits>
                        <LeftHeader onClick={() => setDepositing(true)} 
                        depositing={depositing}>
                            Deposit
                        </LeftHeader>
                        <RightHeader onClick={handleSetWithdraw}
                        withdrawing={!depositing}>
                            Withdraw
                        </RightHeader>
                    </HeaderDeposits>
                    <DepositingOrWithdrawingStyle>
                        <div>
                            <h3>Amount (USDC)   ---------------- <span>Vault Shares: {balance} / 1 share = {ratio} USDC</span> </h3>
                            <input
                            value={valueDepositWithDraw}
                            onChange={ e => setValueDepositDraw(e.target.value)}
                            ></input>
                        </div>
                        <DepositWithDrawButton
                        connected={isConnected}
                        onClick={handleDepositWithDraw}
                        >{depositing ? 'Deposit' : 'Withdraw'}</DepositWithDrawButton>
                    </DepositingOrWithdrawingStyle>
                </DepositWithDrawStyle>
            </BottomStyle>
            <Footer/>
        </DepositStyle>
    );
}

const DepositStyle = styled.div`
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

const UpStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    align-items: center;
    padding-bottom: 15px;
    border-bottom: 2px solid #085257;
    h1, h2{
        color: #FFFFFF;
    }
    div{
        height: 90px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h1{
            font-size: 30px;
            display: block;
            margin-bottom: 5px;
        }
    }
`;

const ImgStyle = styled.img`
    height: 70px;
    width: 70px;
`;

const BottomStyle = styled.div`
    display: flex;
    width: 90%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const DescriptionStyle = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1{
        color: #FFFFFF;
        font-weight: bold;
        font-size: 25px;
        display: block;
        margin-bottom: 10px;
    }
    p{
        color: #FFFFFF;
        display: block;
        margin-bottom: 5px;
        text-align: justify;
    }
`;

const DepositWithDrawStyle = styled.div`
    height: 230px;
    display: flex;
    flex-direction: column;
    background: #00010E;
    width: 50%;
    border-radius: 30px;
`;

const HeaderDeposits = styled.div`
    display: flex;
    flex-direction: row;
    height: 50px;
`;

const LeftHeader = styled.h1`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 50%;
    color: #FFFFFF;
    align-items: center;
    font-weight: bold;
    border-bottom: ${props => props.depositing ? '2px solid #08FBEC;' : 'none;'}
    :hover{
        opacity: 0.5;
        cursor: pointer;
    }
`;

const RightHeader = styled.h1`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 50%;
    color: #FFFFFF;
    align-items: center;
    font-weight: bold;
    border-bottom: ${props => props.withdrawing ? '2px solid #08FBEC;' : 'none;'}
    :hover{
        opacity: 0.5;
        cursor: pointer;
    }
`;

const DepositingOrWithdrawingStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 250px;
    margin-bottom: 20px;
    div{
        display: flex;
        flex-direction: column;
        justify-content: left;
        width: 80%;
        margin-top: 15px;
        h3{
            color: #FFFFFF;
            display: block;
            margin-bottom: 10px;
            span{
                font-weight: bold;
            }
        }
        input{
            border: none;
            background: #303A4F;
            height: 45px;
        }
    }
`;

const DepositWithDrawButton = styled.button`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 20px;
    background: #068189;
    border: none;
    width: 55%;
    height: 61px;
    border-radius: 10px;
    cursor: pointer;
    opacity: ${props => props.connected ? '1' : '0.4'};
`;