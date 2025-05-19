// fetch-data.js

import { ethers } from 'ethers';

async function fetchBlockNumber() {
  const provider = new ethers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY");
  const block = await provider.getBlockNumber();
  console.log("Current block number:", block);
}

fetchBlockNumber();
