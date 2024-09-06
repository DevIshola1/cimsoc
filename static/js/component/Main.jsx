import React, { useState, useEffect } from "react";
import Splash from "./Splash";
import ConnectWallet from "./ConnectWallet";
import WalletInfo from "./WalletInfo";
import { useAccount, useSwitchChain } from "wagmi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
  const [phase, setPhase] = useState("splash");
  const { isConnected, chain } = useAccount();
  const switchChain = useSwitchChain()
  const [ isValid, setIsValid ] = useState(false);

  useEffect(() => {
    console.log('chain ', chain);
    if(chain?.id?.toString() === '1') setIsValid(true);
    else setIsValid(false);
  }, [chain?.id])

  // useEffect(() => {
  //   if(isConnected) {
  //     if(chainId.toString() !== '1') {
  //       switchChain.switchChainAsync({ chainId: 1 }).then(() => {
  //         setIsValid(true);
  //       }).catch(e => {

  //       });
  //     }
  //   }
  // }, [isConnected]);

  useEffect(() => {
    let timer;

    if (phase === "splash") {
      timer = setTimeout(() => setPhase("checkConnection"), 2000);
    }

    return () => clearTimeout(timer);
  }, [phase]);

  const handleConnectClick = () => {
    setPhase("walletInfo");
  };

  const getContent = () => {
    if (phase === "checkConnection") {
      if (!isConnected) {
        return <ConnectWallet />;
      } else if(isValid) {
        return <WalletInfo />;
      } else {
        return (
          <div className="wallet">
          <img src="/images/logo.svg" alt="logo" />
           <h2 className="pt-4">Switch Network</h2>
           <button
              className="mt-3"
              onClick={(e) => {
                e.preventDefault();
                try {
                  switchChain.switchChain({ chainId: 1 });
                } catch(e) {}
               }}
            >
              Switch 
            </button>
        </div>     
        )
      }
    }
    return null;
  };

  return (
    <>
      <ToastContainer />
      {phase === "splash" && <Splash />}
      <div className="main">
        <div className="content-main">
          {getContent()}
        </div>
      </div>
    </>
  );
};

export default Main;
