import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xC0dfe422B5D2450b7F95E11b68269a1bf7A74023"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/CW9glBfHdqKFEOBl7TxWl_ty0c5i96h2",
  },
};