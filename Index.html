import { useState } from 'react';
import { ethers } from 'ethers';

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setWalletAddress(address);
      setWalletConnected(true);
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">🚀 PumpDogFun Pre-Sale</h1>
      
      <div className="max-w-2xl mx-auto bg-black bg-opacity-30 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Send Funds Here:</h2>
        <div className="bg-yellow-100 text-black p-3 rounded-lg mb-6">
          <p className="font-mono break-all text-sm">
            0xDF21B5046cdD2EE9d7dDD2a6f8C01D5676997762
          </p>
        </div>

        <button 
          onClick={connectWallet}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-bold"
        >
          {walletConnected ? `Connected: ${walletAddress.slice(0, 6)}...` : "Connect Wallet"}
        </button>
      </div>
    </div>
  );
    }
