document.getElementById("connectButton").onclick = async function() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      alert("Connected: " + accounts[0]);
    } catch (error) {
      alert("Error connecting: " + error.message);
    }
  } else {
    alert("Please install MetaMask!");
  }
};
