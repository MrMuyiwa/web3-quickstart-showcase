// write-to-contract.js

import { ethers } from 'ethers';

const abi = [ // Minimal ABI
  "function setValue(uint256 newValue)"
];

async function writeToContract() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contractAddress = "0xYourContractAddressHere";
  const contract = new ethers.Contract(contractAddress, abi, signer);

  const tx = await contract.setValue(42);
  await tx.wait();

  console.log("Value updated!");
}
