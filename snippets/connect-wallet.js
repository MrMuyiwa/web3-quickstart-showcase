async function connectWallet() {
  if (!window.ethereum) {
    alert('MetaMask not found!');
    return;
  }

  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  console.log('Connected wallet:', accounts[0]);
}

connectWallet();
