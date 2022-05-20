export interface BalanceProps {
  address: string;
}

interface ResultProps {
  id: number;
  jsonrpc: string;
  result: {
    balance: string;
    nonce: number;
  };
}

export interface BalanceResultProps {
  balance: ResultProps;
}
