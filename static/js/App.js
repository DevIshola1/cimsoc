import React from "react";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Main from "./component/Main";
import {
    QueryClient,
    QueryClientProvider
} from "@tanstack/react-query";
import {
    WagmiProvider
} from "wagmi";
import "bootstrap/dist/css/bootstrap.min.css";
import WalletInfo from "./component/WalletInfo";
import {
    config
} from "./config";
import {
    ErrorBoundary
} from "react-error-boundary";

function App() {
    const queryClient = new QueryClient();

    return ( <
        > {
            /* <ErrorBoundary onError={(error) => {
                    console.log('Error: ', error);
                  }}> */
        } <
        WagmiProvider config = {
            config
        } >
        <
        QueryClientProvider client = {
            queryClient
        } >
        <
        BrowserRouter >
        <
        Routes >
        <
        Route path = "/"
        element = { < Main / >
        }
        /> <
        Route path = "/claim"
        element = { < Main / >
        }
        /> { /* <Route path="walletinfo" element={<WalletInfo />} /> */ } <
        /Routes> <
        /BrowserRouter> <
        /QueryClientProvider> <
        /WagmiProvider> { /* </ErrorBoundary> */ } <
        />
    );
}

export default App;