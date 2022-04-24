import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import usdcImg from "../img/usdc.png";
import { useState } from "react";

export default function Deposit(){
    const [depositing, setDepositing] = useState(true);

    return(
        <DepositStyle>
            <Header/>
            <UpStyle>
                <div>
                    <h1>USDC-T-ETH</h1>
                    <h2>Current Vault Deposits ---- $100,000</h2>
                    <h2>Max Vault Capacity     ---- $1,000,000</h2>
                </div>
                <ImgStyle src={usdcImg}/>
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
                        <LeftHeader>
                            Deposit
                        </LeftHeader>
                        <RightHeader>
                            Withdraw
                        </RightHeader>
                    </HeaderDeposits>
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
    border-bottom: 2px solid #08FBEC;
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
    border-right: 2px solid #08FBEC;
`;

const RightHeader = styled.h1`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 50%;
    color: #FFFFFF;
    align-items: center;
    font-weight: bold;
`;