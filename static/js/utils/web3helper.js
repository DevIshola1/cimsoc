import {
    ethers
} from "ethers";
import claimAbi from "../abis/claim.json";
import stakeAbi from "../abis/stake.json";
import erc20Abi from "../abis/erc20.json";
import {
    formatEther,
    formatUnits,
    parseEther,
    parseUnits
} from "viem";

// 0xb7F191Df7CD0d6BEc2977c60c7dF4e9f38d99487
// stake sepolia
// 0xfB9126C6e90ECE4fe0010A571DDCCba38699b56D
// claim sepolia
// 0x5ffcdDCd084899e3510338465a53Bfd0F5F6b04d
// token sepolia
const config = {
    tokenContract: "0x55A05Cf8898dd1c582eef939Df645d5D235C6f74",
    stakeContract: "0xb7F191Df7CD0d6BEc2977c60c7dF4e9f38d99487",
    claimContract: "0x15421e439e436A93b77d05cE836Bf94605803A16",
    rpc: "https://mainnet.infura.io/v3/9e75004732bc4843881c2c3a628f338a",
    decimals: 18,
};

const provider = new ethers.providers.JsonRpcProvider(config.rpc);

export async function checkClaim(signer) {
    try {
        const [address] = await signer.getAddresses();
        const contract = new ethers.Contract(
            config.claimContract,
            claimAbi,
            provider
        );
        const pendingClaim = await contract.userBalance(address);
        // return new Intl.NumberFormat("en-EN").format(

        return parseFloat(
            formatUnits(pendingClaim.toString(), 18).toString() || "0"
        ).toFixed(2);
        // );
    } catch (error) {
        console.log(error.message);
    }
}

export async function checkClaimStatus(signer) {
    try {
        const [address] = await signer.getAddresses();
        const contract = new ethers.Contract(
            config.claimContract,
            claimAbi,
            provider
        );
        const status = await contract.isClaimActive();
        return status;
    } catch (error) {
        console.log(error.message);
    }
}

export async function calculateAPY(provider, lockupDays) {
    const contract = new ethers.Contract(
        config.claimContract,
        claimAbi,
        provider
    );
    const apy = await contract.calculateAPY(lockupDays);
    return apy;
}

export async function claimTokens(provider, signer) {
    try {
        const [address] = await signer.getAddresses();
        const {
            request
        } = await provider.simulateContract({
            ...{
                abi: claimAbi,
                address: config.claimContract,
            },
            functionName: "claimTokens",
            args: [],
            account: address,
        });
        const tx = await signer.writeContract(request);
        return {
            tx,
            success: true
        };
    } catch (error) {
        console.log(error.message);
        return {
            message: error.message,
            success: false
        };
    }
}

export async function claimReward(provider, signer, account, index) {
    try {
        const [address] = await signer.getAddresses();
        const {
            request
        } = await provider.simulateContract({
            ...{
                abi: claimAbi,
                address: config.claimContract,
            },
            functionName: "claimReward",
            args: [account, index],
            account: address,
        });
        const tx = await signer.writeContract(request);
        return {
            tx,
            success: true
        };
    } catch (error) {
        console.log(error.message);
        return {
            message: error.message,
            success: false
        };
    }
}

export async function stake(provider, signer, amount, lockupDays) {
    try {
        const [address] = await signer.getAddresses();
        const {
            request
        } = await provider.simulateContract({
            ...{
                abi: claimAbi,
                address: config.claimContract,
            },
            functionName: "stake",
            args: [amount, lockupDays],
            account: address,
        });
        const tx = await signer.writeContract(request);
        return {
            tx,
            success: true
        };
    } catch (error) {
        console.log(error.message);
        return {
            message: error.message,
            success: false
        };
    }
}

export async function unstake(provider, signer, stakeId) {
    try {
        const [address] = await signer.getAddresses();
        const {
            request
        } = await provider.simulateContract({
            ...{
                abi: claimAbi,
                address: config.claimContract,
            },
            functionName: "unstake",
            args: [address, stakeId],
            account: address,
        });
        const tx = await signer.writeContract(request);
        return {
            tx,
            success: true
        };
    } catch (error) {
        console.log(error.message);
        return {
            message: error.message,
            success: false
        };
    }
}

export async function isApproved(
    signer,
    quantityTokens = ethers.BigNumber.from(
        "115792089237316195423570985008687907853269984665640564039457584007913129639935"
    )
) {
    try {
        const tokenContract = new ethers.Contract(
            config.tokenContract,
            erc20Abi,
            provider
        );
        const [owner] = await signer.getAddresses();
        const allowance = await tokenContract.allowance(
            owner,
            config.stakeContract
        );
        console.log(allowance.toString(), owner, config.stakeContract);
        return {
            allowance: allowance.toString(),
            approved: parseFloat(ethers.utils.formatEther(`${allowance.toString()}`)) >=
                parseFloat(quantityTokens),
        };
    } catch (error) {
        console.log(error.message);
        return {
            allowance: "0",
            approved: false,
        };
    }
}

export async function approve(
    provider,
    signer,
    amount = "115792089237316195423570985008687907853269984665640564039457584007913129639935"
) {
    try {
        const [address] = await signer.getAddresses();
        const {
            request
        } = await provider.simulateContract({
            ...{
                abi: erc20Abi,
                address: config.tokenContract,
            },
            functionName: "approve",
            args: [config.stakeContract, ethers.utils.parseEther(amount)],
            account: address,
        });
        const tx = await signer.writeContract(request);
        return {
            tx,
            success: true
        };
    } catch (error) {
        // notify.show(`Error: ${errorMessage}`, "error", 7000);
        console.log(error.message);
        return {
            message: error.message,
            success: false
        };
    }
}

export async function getBalance(signer) {
    const [address] = await signer.getAddresses();
    const tokenContract = new ethers.Contract(
        config.tokenContract,
        erc20Abi,
        provider
    );
    const balance = (await tokenContract.balanceOf(address)).toString();
    const decimals = await tokenContract.decimals();
    const parsedBalance = ethers.utils.formatUnits(balance, decimals);
    return parsedBalance;
}