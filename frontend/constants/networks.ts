enum ChainName {
  ETHEREUM = "Ethereum",
  SENECA = "Seneca",
  AFRODITE = "Afrodite",
  IRENE = "Irene",
  IRIS = "Iris",
  LOCAL = "Local",
}

export enum ChainId {
  ETHEREUM = 1,
  SENECA = 1500,
  AFRODITE = 1501,
  IRENE = 1502,
  IRIS = 1503,
  LOCAL = 1337,
}

export interface Chain {
  id: ChainId;
  name: ChainName;
  rpc: string;
}

export const chains: Chain[] = [
  {
    id: ChainId.ETHEREUM,
    name: ChainName.ETHEREUM,
    rpc: `https://mainnet.infura.io/v3/${process.env.DEPLOY_INFURA_KEY}`,
  },
  {
    id: ChainId.LOCAL,
    name: ChainName.LOCAL,
    rpc: "http://localhost:8545",
  },
  {
    id: ChainId.SENECA,
    name: ChainName.SENECA,
    rpc: "https://eth-seneca.taikai.network:8080",
  },
  {
    id: ChainId.AFRODITE,
    name: ChainName.AFRODITE,
    rpc: "https://eth-afrodite.taikai.network:8080",
  },
  {
    id: ChainId.IRENE,
    name: ChainName.IRENE,
    rpc: "https://eth-irene.taikai.network:8080",
  },
  {
    id: ChainId.IRIS,
    name: ChainName.IRIS,
    rpc: "https://eth-iris.taikai.network:8080",
  },
];

interface ChainDictionary {
  [key: number]: Chain;
}

function getChainDictionary(): any {
  return {};
}

export const chainDict: ChainDictionary = chains.reduce((value, chain) => {
  value[chain.id] = chain;
  return value;
}, getChainDictionary());
