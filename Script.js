// Countdown to August 10, 2025
const countdown = () => {
  const endDate = new Date("August 10, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const difference = endDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = `
    ${days}d ${hours}h ${minutes}m ${seconds}s
  `;

  if (difference < 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML = "Distribution started!";
  }
};

const countdownTimer = setInterval(countdown, 1000);

// Wallet Connection
document.getElementById("connectButton").addEventListener("click", async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      
      const chainId = await window.ethereum.request({ 
        method: 'eth_chainId' 
      });
      
      if (chainId !== '0x38') {
        alert('Please switch to Binance Smart Chain Mainnet');
        return;
      }
      
      alert(`Verified: ${accounts[0]}\n\nTokens will arrive automatically`);
      
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  } else {
    alert('Please install MetaMask!');
  }
});

// Chain change detection
if (window.ethereum) {
  window.ethereum.on('chainChanged', () => {
    window.location.reload();
  });
}
