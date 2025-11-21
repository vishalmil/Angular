export interface Investment{
    id: number;
    name: string;
    type: 'Equity' | 'Debt' | 'Mutual Fund';
    amount: number;
    purchaseDate: string; //ISO format like '2024-01-15'
    currentValue: number;
}