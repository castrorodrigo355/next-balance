type ContractBalance = {
  [key: string]: string;
}

type ContractAllowances = {
  [key: string]: ContractBalance
}

export type ContractState = {
  _balance: string;
  allowances: ContractAllowances;
  balances: ContractBalance;
  contractowner: string;
  lock_proxy: string;
  total_supply: string;
}