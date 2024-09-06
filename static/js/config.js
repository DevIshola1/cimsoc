import {
    http,
    createConfig
} from "wagmi";
import {
    base,
    bsc,
    mainnet,
    sepolia,
    arbitrumSepolia
} from "wagmi/chains";
import {
    walletConnect
} from "wagmi/connectors";

const projectId = "8cff1ce28d43de0aef36256380727538";

export const chains = [mainnet];

export const config = createConfig({
    chains,
    connectors: [walletConnect({
        projectId,
        onError(error) {
            console.error("WalletConnect Error:", error.message || error);
            // You can handle specific errors differently if needed
            if (error.message.includes("timeout")) {
                alert("Connection timed out. Please try again.");
            }
        }
    })],
    transports: {
        [mainnet.id]: http({
            onerror: (error) => {
                console.error("HTTP Transport Error:", error.message || error);

            }
        }),
    }
});


window.addEventListener('unhandledrejection', function(event) {
    if (event.reason.message.includes('Unsupported network')) {
        console.error('Caught an unsupported network switch:', event.reason);
        // alert('Unsupported network switch detected. Please switch back to Ethereum Mainnet.');
    }
});