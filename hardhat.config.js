require("@nomiclabs/hardhat-waffle"); 
const  privateKey ='d540780e2bca40d0dbb47f7023b56982606e3c65ff7ffbd56f7887b07f87bc72';
const ALCHEMY_API_KEY = "pqr-VAfSii011IkFlqrZTxCgzK5fWegs";

module.exports = {
  solidity: "0.8.4",
  networks: {  
    matic: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [privateKey],
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
};
