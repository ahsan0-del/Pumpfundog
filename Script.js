document.getElementById("connectButton").onclick = async function() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      alert("Your wallet is connected. Tokens will be sent to:\n" + accounts[0] + "\n\nPlease wait for distribution.");
    } catch (error) {
      alert("Error connecting: " + error.message);
    }
  } else {
    alert("Please install MetaMask to check your wallet!");
  }
};
