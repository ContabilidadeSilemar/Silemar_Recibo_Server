export class Recibo {
  id?: string;
  name: string;
  doc: string;
  description: string[];
  amount: number[];
  total_amount?: number;
  issuer: string;
  createdAt?: Date;
  updatedAt?: Date;
  number: number;
}
