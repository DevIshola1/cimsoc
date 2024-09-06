import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import {
  useAccount,
  useConnect,
  useConnectorClient,
  useDisconnect,
  usePublicClient,
  useWalletClient,
} from "wagmi";
import { checkClaim, claimTokens, checkClaimStatus } from "../utils/web3helper";
import { ToastContainer, toast } from "react-toastify";

const WalletInfo = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [showError, setShowError] = useState(false);
  const handleErroClick = () => {
    setModalShow(true);
    setShowError(true);
  };
  const { disconnect } = useDisconnect();
  const { address, connector } = useAccount();

  const [amountToClaim, setAmountToClaim] = useState(0);
  const [claimStatus, setClaimStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { data: signer } = useWalletClient();
  const provider = usePublicClient();

  const checkClaimLocally = async () => {
    const data = await checkClaim(signer);
    setAmountToClaim(data);
  };

  const checkClaimStatusLocally = async () => {
    const status = await checkClaimStatus(signer);
    setClaimStatus(status);
  };

  const claimLocally = async () => {
    setIsLoading(true);
    const data = await claimTokens(provider, signer);
    if (!data.success) {
      // toast.error(data.message);
      if (!/User rejected the request./.test(data.message)) {
        setShowError(true);
        setModalShow(true);
      }
    } else {
      setShowError(false);
      setModalShow(true);
      console.log(data);
      // toast.promise(waitForTransactionReceipt(config, { hash: data.tx }), {
      //   loading: `Waiting Tx: \n${data.tx}`,
      //   success: `Success Tx: \n${data.tx}`,
      //   error: "Error",
      // });
      // toast.success(`Success: ${data.tx}`);
      setAmountToClaim(0);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    checkClaimLocally();
    checkClaimStatusLocally();
  }, [signer]);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(address)
      .then(() => {
        toast.success("Address copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy address:", err);
      });
  };
  return (
    <>
      <div className="wallet">
        <img src="/images/logo.svg" alt="logo" />
        <h2 className="pt-4">Claim Cosmic Tokens</h2>
        {/* <p>Claim Your Token</p> */}
        <div className="text-center d-flex flex-column align-items-center gap-4 justify-content-center pt-5">
          <div className="card-custom">
            <div className="d-flex align-items-center gap-2 gap-sm-4 justify-content-between">
              <div className="d-flex align-items-center gap-2 gap-sm-4">
                {connector?.icon ? (
                  <img style={{ width: 40, height: 40 }} src={connector.icon} />
                ) : connector.name === "WalletConnect" ? (
                  <svg
                    width="56"
                    height="57"
                    viewBox="0 0 56 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="28" cy="28.5" r="28" fill="#3B99FC" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M39.0237 21.3922C32.9354 15.3137 23.0644 15.3137 16.9762 21.3922L16.1719 22.1952C15.8675 22.4991 15.8675 22.9919 16.1719 23.2958L18.6785 25.7984C18.8307 25.9503 19.0774 25.9503 19.2296 25.7984L20.3095 24.7202C24.5568 20.4797 31.4431 20.4797 35.6904 24.7202L36.6987 25.727C36.8509 25.8789 37.0977 25.8789 37.2499 25.727L39.7564 23.2244C40.0609 22.9205 40.0609 22.4277 39.7564 22.1238L39.0237 21.3922ZM46.4383 28.795L44.2075 26.5678C43.903 26.2638 43.4095 26.2638 43.1051 26.5678L35.9659 33.6956C35.8898 33.7715 35.7664 33.7715 35.6903 33.6956L28.551 26.5676L28.551 26.5676C28.2466 26.2637 27.753 26.2637 27.4486 26.5676L20.3097 33.6956C20.2336 33.7716 20.1102 33.7716 20.0341 33.6956L12.8948 26.5676C12.5903 26.2637 12.0968 26.2637 11.7924 26.5676L9.56156 28.7949C9.25715 29.0988 9.25715 29.5916 9.56156 29.8955L19.6208 39.9387C19.9252 40.2426 20.4187 40.2426 20.7231 39.9387L27.8622 32.8109C27.9383 32.7349 28.0617 32.7349 28.1378 32.8109L35.277 39.9387C35.5814 40.2426 36.075 40.2426 36.3794 39.9387L46.4383 29.8956C46.7427 29.5917 46.7427 29.099 46.4383 28.795Z"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <svg
                    width="56"
                    height="57"
                    viewBox="0 0 56 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M49.0087 6.59204L30.7996 20.1728L34.1669 12.1603L49.0087 6.59204Z"
                      fill="#E2761B"
                    />
                    <path
                      d="M6.97198 6.59204L25.0347 20.3015L21.8321 12.1603L6.97198 6.59204ZM42.457 38.0722L37.6073 45.5334L47.9837 48.4002L50.9668 38.2376L42.457 38.0722ZM5.05042 38.2376L8.01512 48.4002L18.3916 45.5334L13.5419 38.0722L5.05042 38.2376Z"
                      fill="#E4761B"
                    />
                    <path
                      d="M17.8061 25.4655L14.9146 29.8576L25.2178 30.3171L24.8518 19.1988L17.8061 25.4655ZM38.1747 25.4655L31.0374 19.0702L30.7995 30.3171L41.0845 29.8576L38.1747 25.4655ZM18.3917 45.5334L24.5773 42.5012L19.2335 38.3111L18.3917 45.5334ZM31.4034 42.5012L37.6074 45.5334L36.7472 38.3111L31.4034 42.5012Z"
                      fill="#E4761B"
                    />
                    <path
                      d="M37.6073 45.5333L31.4034 42.5011L31.8975 46.5625L31.8426 48.2716L37.6073 45.5333ZM18.3916 45.5333L24.1563 48.2716L24.1197 46.5625L24.5772 42.5011L18.3916 45.5333Z"
                      fill="#D7C1B3"
                    />
                    <path
                      d="M24.2478 35.6281L19.087 34.1027L22.7289 32.4304L24.2478 35.6281ZM31.7328 35.6281L33.2517 32.4304L36.9119 34.1027L31.7328 35.6281Z"
                      fill="#233447"
                    />
                    <path
                      d="M18.3917 45.5334L19.2701 38.0722L13.542 38.2376L18.3917 45.5334ZM36.7289 38.0722L37.6074 45.5334L42.457 38.2376L36.7289 38.0722ZM41.0845 29.8576L30.7995 30.317L31.7511 35.6281L33.2701 32.4304L36.9302 34.1027L41.0845 29.8576ZM19.0871 34.1027L22.7472 32.4304L24.2479 35.6281L25.2178 30.317L14.9145 29.8576L19.0871 34.1027Z"
                      fill="#CD6116"
                    />
                    <path
                      d="M14.9146 29.8576L19.2335 38.3111L19.0871 34.1027L14.9146 29.8576ZM36.9302 34.1027L36.7472 38.3111L41.0845 29.8576L36.9302 34.1027ZM25.2178 30.317L24.2479 35.6281L25.4557 41.8947L25.7302 33.6433L25.2178 30.317ZM30.7995 30.317L30.3054 33.6249L30.525 41.8947L31.7511 35.6281L30.7995 30.317Z"
                      fill="#E4751F"
                    />
                    <path
                      d="M31.7511 35.6281L30.5249 41.8947L31.4034 42.5012L36.7472 38.3112L36.9302 34.1028L31.7511 35.6281ZM19.087 34.1028L19.2334 38.3112L24.5772 42.5012L25.4557 41.8947L24.2478 35.6281L19.087 34.1028Z"
                      fill="#F6851B"
                    />
                    <path
                      d="M31.8426 48.2716L31.8975 46.5625L31.44 46.1582H24.5406L24.1197 46.5625L24.1563 48.2716L18.3916 45.5334L20.4047 47.1873L24.4857 50.0358H31.4949L35.5942 47.1873L37.6073 45.5334L31.8426 48.2716Z"
                      fill="#C0AD9E"
                    />
                    <path
                      d="M31.4034 42.5012L30.525 41.8947H25.4557L24.5773 42.5012L24.1198 46.5625L24.5407 46.1582H31.44L31.8975 46.5625L31.4034 42.5012Z"
                      fill="#161616"
                    />
                    <path
                      d="M49.7773 21.0549L51.3328 13.557L49.0086 6.59204L31.4034 19.7134L38.1746 25.4655L47.7459 28.2772L49.8688 25.7962L48.9537 25.1347L50.4178 23.7931L49.2831 22.911L50.7472 21.79L49.7773 21.0549ZM4.66614 13.557L6.22169 21.0549L5.23346 21.79L6.69751 22.911L5.58117 23.7931L7.04522 25.1347L6.13019 25.7962L8.23477 28.2772L17.806 25.4655L24.5773 19.7134L6.97202 6.59204L4.66614 13.557Z"
                      fill="#763D16"
                    />
                    <path
                      d="M47.7458 28.2772L38.1746 25.4655L41.0844 29.8576L36.7472 38.3111L42.457 38.2376H50.9668L47.7458 28.2772ZM17.806 25.4655L8.23473 28.2772L5.05042 38.2376H13.5419L19.2334 38.3111L14.9145 29.8576L17.806 25.4655ZM30.7994 30.317L31.4034 19.7134L34.1851 12.1603H21.8321L24.5772 19.7134L25.2177 30.317L25.4373 33.6617L25.4556 41.8947H30.5249L30.5615 33.6617L30.7994 30.317Z"
                      fill="#F6851B"
                    />
                  </svg>
                )}

                <div className="text-start">
                  <p className="text-start">Wallet Address</p>
                  <h1 className="d-flex align-items-center gap-1">
                    {address.slice(0, 6)}...{address.slice(-5)}
                    <svg
                      onClick={handleCopyClick} // Add onClick handler here
                      style={{ cursor: "pointer" }}
                      className="mx-2 mx-sm-4 "
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 1H13.1C15.3402 1 16.4603 1 17.316 1.43597C18.0686 1.81947 18.6805 2.43139 19.064 3.18404C19.5 4.03969 19.5 5.15979 19.5 7.4V14.5M4.7 19H12.8C13.9201 19 14.4802 19 14.908 18.782C15.2843 18.5903 15.5903 18.2843 15.782 17.908C16 17.4802 16 16.9201 16 15.8V7.7C16 6.57989 16 6.01984 15.782 5.59202C15.5903 5.21569 15.2843 4.90973 14.908 4.71799C14.4802 4.5 13.9201 4.5 12.8 4.5H4.7C3.5799 4.5 3.01984 4.5 2.59202 4.71799C2.21569 4.90973 1.90973 5.21569 1.71799 5.59202C1.5 6.01984 1.5 6.57989 1.5 7.7V15.8C1.5 16.9201 1.5 17.4802 1.71799 17.908C1.90973 18.2843 2.21569 18.5903 2.59202 18.782C3.01984 19 3.5799 19 4.7 19Z"
                        stroke="#6A9EB2"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </h1>
                </div>
              </div>
              <button className="outline" onClick={() => disconnect()}>
                Disconnect
              </button>
            </div>
          </div>
          <div className="card-custom">
            <p>Claimable Tokens</p>
            <div className="d-flex align-items-center gap-2 justify-content-center">
              <svg
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.8896 13.5003C24.9421 13.0747 24.9691 12.6417 24.9691 12.2029C24.9691 6.02099 19.6105 1.00952 13.0003 1.00952C6.39011 1.00952 1.03149 6.02099 1.03149 12.2029C1.03149 12.6417 1.05849 13.0747 1.11102 13.5003C1.05849 13.9259 1.03149 14.3588 1.03149 14.7976C1.03149 20.9796 6.39011 25.991 13.0003 25.991C19.6105 25.991 24.9691 20.9796 24.9691 14.7976C24.9691 14.3588 24.9421 13.9259 24.8896 13.5003Z"
                  fill="#01FFCD"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25.4022 13.5C25.4523 13.0739 25.478 12.641 25.478 12.2027C25.478 5.70787 19.8588 0.5 13 0.5C6.14124 0.5 0.521973 5.70787 0.521973 12.2027C0.521973 12.641 0.547687 13.0739 0.597815 13.5C0.547687 13.9261 0.521973 14.359 0.521973 14.7973C0.521973 21.2921 6.14124 26.5 13 26.5C19.8588 26.5 25.478 21.2921 25.478 14.7973C25.478 14.359 25.4523 13.9261 25.4022 13.5ZM24.9688 12.2027C24.9688 12.6415 24.9418 13.0744 24.8893 13.5C24.9418 13.9256 24.9688 14.3585 24.9688 14.7973C24.9688 20.9793 19.6102 25.9908 13 25.9908C6.38982 25.9908 1.03121 20.9793 1.03121 14.7973C1.03121 14.3585 1.05821 13.9256 1.11073 13.5C1.05821 13.0744 1.03121 12.6415 1.03121 12.2027C1.03121 6.02071 6.38982 1.00924 13 1.00924C19.6102 1.00924 24.9688 6.02071 24.9688 12.2027Z"
                  fill="url(#paint0_linear_2794_450)"
                />
                <path
                  d="M24.9691 14.7974C24.9691 20.9794 19.6105 25.9909 13.0003 25.9909C6.39011 25.9909 1.03149 20.9794 1.03149 14.7974C1.03149 8.61547 6.39011 3.604 13.0003 3.604C19.6105 3.604 24.9691 8.61547 24.9691 14.7974Z"
                  fill="url(#paint1_linear_2794_450)"
                />
                <path
                  d="M24.9691 12.203C24.9691 18.3849 19.6105 23.3964 13.0003 23.3964C6.39011 23.3964 1.03149 18.3849 1.03149 12.203C1.03149 6.02099 6.39011 1.00952 13.0003 1.00952C19.6105 1.00952 24.9691 6.02099 24.9691 12.203Z"
                  fill="#00FF86"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.0003 23.1418C19.4862 23.1418 24.7145 18.2285 24.7145 12.203C24.7145 6.17741 19.4862 1.26414 13.0003 1.26414C6.5144 1.26414 1.28611 6.17741 1.28611 12.203C1.28611 18.2285 6.5144 23.1418 13.0003 23.1418ZM13.0003 23.3964C19.6105 23.3964 24.9691 18.3849 24.9691 12.203C24.9691 6.02099 19.6105 1.00952 13.0003 1.00952C6.39011 1.00952 1.03149 6.02099 1.03149 12.203C1.03149 18.3849 6.39011 23.3964 13.0003 23.3964Z"
                  fill="url(#paint2_linear_2794_450)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.69116 12.2769C3.89966 7.63706 7.98773 3.9353 13.0003 3.9353C18.0128 3.9353 22.1009 7.63707 22.3094 12.2769C22.1009 16.9168 18.0128 20.6186 13.0003 20.6186C7.98773 20.6186 3.89966 16.9168 3.69116 12.2769Z"
                  fill="#00D771"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.251 15.951C9.38347 14.7652 8.7834 12.4038 9.92706 10.5395C11.0635 8.68689 13.5127 7.9923 15.5304 8.89554L16.9634 6.53305C13.5646 4.89182 9.35927 6.03365 7.42812 9.18163C5.48509 12.349 6.56201 16.3774 9.81805 18.3134L11.251 15.951ZM12.6399 15.1119L11.2012 17.4839C13.8918 18.6891 17.1581 17.763 18.6737 15.2925C20.1988 12.8064 19.3982 9.65726 16.9072 8.07648L15.4686 10.4484C16.5735 11.2706 16.8999 12.7526 16.1747 13.9347C15.4544 15.1089 13.9431 15.5853 12.6399 15.1119Z"
                  fill="url(#paint3_linear_2794_450)"
                />
                <path
                  d="M14.5099 12.2937C14.5099 13.1238 13.8369 13.7968 13.0068 13.7968C12.1767 13.7968 11.5037 13.1238 11.5037 12.2937C11.5037 11.4635 12.1767 10.7906 13.0068 10.7906C13.8369 10.7906 14.5099 11.4635 14.5099 12.2937Z"
                  fill="url(#paint4_linear_2794_450)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.3095 12.2768C22.315 12.1536 22.3178 12.0298 22.3178 11.9053C22.3178 7.09273 18.1462 3.19141 13.0003 3.19141C7.85443 3.19141 3.68286 7.09273 3.68286 11.9053C3.68286 13.5303 4.15852 15.0515 4.98673 16.3536C4.22211 15.1514 3.758 13.7626 3.69127 12.2776C3.89977 7.63771 7.98784 3.93595 13.0004 3.93595C18.0127 3.93595 22.1006 7.63732 22.3095 12.2768Z"
                  fill="#028B68"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2794_450"
                    x1="13"
                    y1="1.00924"
                    x2="13"
                    y2="23.3961"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9CFFDD" />
                    <stop offset="1" stop-color="#5E9984" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2794_450"
                    x1="13.0003"
                    y1="3.604"
                    x2="13.0003"
                    y2="25.9909"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#01B88C" />
                    <stop offset="0.215" stop-color="#025B40" />
                    <stop offset="0.49" stop-color="#018B67" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_2794_450"
                    x1="13.0003"
                    y1="1.00952"
                    x2="13.0003"
                    y2="23.3964"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9CFFDD" />
                    <stop offset="1" stop-color="#5E9984" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_2794_450"
                    x1="15.3224"
                    y1="15.8287"
                    x2="7.54978"
                    y2="8.29525"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="1" stop-color="#424242" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_2794_450"
                    x1="15.3224"
                    y1="15.8287"
                    x2="7.54978"
                    y2="8.29525"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="1" stop-color="#424242" />
                  </linearGradient>
                </defs>
              </svg>
              <label className="input-balance"> {amountToClaim}</label>
              {/* <input
                style={{ width: "30%" }}
                type="text"
                disabled
                value={amountToClaim}
              /> */}
            </div>
            <button
              disabled={!claimStatus}
              // disabled={true}
              className="w-100 mt-3"
              onClick={(e) => {
                e.preventDefault();
                claimLocally();
              }}
            >
              {isLoading
                ? "Claiming, Please wait..."
                : amountToClaim == 0
                ? "There are no tokens to claim"
                : "Claim Tokens"}
            </button>
          </div>
        </div>
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <>
              {!showError ? (
                <div className="text-center staked p-4">
                  <svg
                    width="95"
                    height="95"
                    viewBox="0 0 95 95"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2441_62)">
                      <path
                        opacity="0.05"
                        d="M47.013 94.0179C72.9699 94.0179 94.0122 72.9757 94.0122 47.0187C94.0122 21.0618 72.9699 0.0195312 47.013 0.0195312C21.0561 0.0195312 0.0137939 21.0618 0.0137939 47.0187C0.0137939 72.9757 21.0561 94.0179 47.013 94.0179Z"
                        fill="url(#paint0_linear_2441_62)"
                      />
                      <g opacity="0.3" filter="url(#filter0_f_2441_62)">
                        <path
                          d="M24.682 55.3419C12.467 46.6829 8.444 31.37 15.696 21.14C22.948 10.91 38.729 9.63695 50.944 18.297C63.159 26.956 83.214 58.658 75.962 68.888C68.71 79.117 36.897 64.0009 24.682 55.3419Z"
                          fill="#3ED2E6"
                        />
                      </g>
                      <path
                        d="M47.013 75.5876C62.7908 75.5876 75.5812 62.7972 75.5812 47.0194C75.5812 31.2416 62.7908 18.4512 47.013 18.4512C31.2352 18.4512 18.4448 31.2416 18.4448 47.0194C18.4448 62.7972 31.2352 75.5876 47.013 75.5876Z"
                        fill="url(#paint1_linear_2441_62)"
                      />
                      <path
                        opacity="0.05"
                        d="M47.014 84.9378C67.9562 84.9378 84.9331 67.9608 84.9331 47.0187C84.9331 26.0766 67.9562 9.09961 47.014 9.09961C26.0719 9.09961 9.09491 26.0766 9.09491 47.0187C9.09491 67.9608 26.0719 84.9378 47.014 84.9378Z"
                        fill="url(#paint2_linear_2441_62)"
                      />
                      <path
                        d="M35.346 47.1473L43.04 54.8413L58.685 39.1973"
                        stroke="#07060D"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_2441_62"
                        x="-139.712"
                        y="-139.249"
                        width="369.014"
                        height="363.362"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="75.9"
                          result="effect1_foregroundBlur_2441_62"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_2441_62"
                        x1="72.866"
                        y1="15.5147"
                        x2="70.241"
                        y2="91.8937"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#24D6F8" />
                        <stop offset="1" stop-color="#50F2A5" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_2441_62"
                        x1="62.728"
                        y1="27.8694"
                        x2="61.132"
                        y2="74.2964"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#24D6F8" />
                        <stop offset="1" stop-color="#50F2A5" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_2441_62"
                        x1="67.871"
                        y1="21.6017"
                        x2="65.753"
                        y2="83.2247"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#24D6F8" />
                        <stop offset="1" stop-color="#50F2A5" />
                      </linearGradient>
                      <clipPath id="clip0_2441_62">
                        <rect
                          width="94.02"
                          height="94.02"
                          rx="47"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h1 className="pt-3 pb-3">
                    Your tokens <br></br> claimed <br /> Successfully
                  </h1>
                  <p className="pb-3">
                    Great job! Your tokens are now successfully claimed.
                  </p>
                  <button style={{ width: "200px" }} onClick={handleErroClick}>
                    Awesome! Got it
                  </button>
                </div>
              ) : (
                <div className="text-center staked p-4">
                  <svg
                    width="95"
                    height="95"
                    viewBox="0 0 95 95"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2446_55)">
                      <path
                        opacity="0.05"
                        d="M47.0129 94.0179C72.9698 94.0179 94.0121 72.9757 94.0121 47.0187C94.0121 21.0618 72.9698 0.0195312 47.0129 0.0195312C21.0559 0.0195312 0.0136719 21.0618 0.0136719 47.0187C0.0136719 72.9757 21.0559 94.0179 47.0129 94.0179Z"
                        fill="url(#paint0_linear_2446_55)"
                      />
                      <g opacity="0.3" filter="url(#filter0_f_2446_55)">
                        <path
                          d="M24.6819 55.3419C12.4669 46.6829 8.44394 31.37 15.6959 21.14C22.9479 10.91 38.7289 9.63695 50.9439 18.297C63.1589 26.956 83.2139 58.658 75.9619 68.888C68.7099 79.117 36.8969 64.0009 24.6819 55.3419Z"
                          fill="#3ED2E6"
                        />
                      </g>
                      <path
                        opacity="0.05"
                        d="M47.0141 84.9378C67.9562 84.9378 84.9332 67.9608 84.9332 47.0187C84.9332 26.0766 67.9562 9.09961 47.0141 9.09961C26.0719 9.09961 9.09497 26.0766 9.09497 47.0187C9.09497 67.9608 26.0719 84.9378 47.0141 84.9378Z"
                        fill="url(#paint1_linear_2446_55)"
                      />
                      <path
                        d="M47.014 75.5876C62.7918 75.5876 75.5822 62.7972 75.5822 47.0194C75.5822 31.2416 62.7918 18.4512 47.014 18.4512C31.2362 18.4512 18.4458 31.2416 18.4458 47.0194C18.4458 62.7972 31.2362 75.5876 47.014 75.5876Z"
                        fill="#F35421"
                      />
                      <path
                        d="M39.1909 54.8413L54.8359 39.1973"
                        stroke="#07060D"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M54.8359 54.8413L39.1909 39.1973"
                        stroke="#07060D"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_2446_55"
                        x="-139.712"
                        y="-139.249"
                        width="369.014"
                        height="363.362"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="75.9"
                          result="effect1_foregroundBlur_2446_55"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_2446_55"
                        x1="72.8659"
                        y1="15.5147"
                        x2="70.2409"
                        y2="91.8937"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#24D6F8" />
                        <stop offset="1" stop-color="#50F2A5" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_2446_55"
                        x1="67.8711"
                        y1="21.6017"
                        x2="65.7531"
                        y2="83.2247"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#24D6F8" />
                        <stop offset="1" stop-color="#50F2A5" />
                      </linearGradient>
                      <clipPath id="clip0_2446_55">
                        <rect
                          width="94.02"
                          height="94.02"
                          rx="47.01"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <h1 className="pt-3 pb-3">
                    Oops! Something <br /> Went Wrong
                  </h1>
                  <p className="pb-3">
                    Unfortunately, we couldn't complete your claiming request.
                    Please check your internet connection and try again. If the
                    problem persists, contact support.
                  </p>
                  <button
                    style={{ width: "200px" }}
                    onClick={(e) => {
                      e.preventDefault();
                      setModalShow(false);
                      claimLocally();
                    }}
                  >
                    Retry
                  </button>
                </div>
              )}
            </>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default WalletInfo;
