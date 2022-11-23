export class Recibo {
  id?: string;
  name: string;
  doc: string;
  description: string[];
  amount: number[];
  total_amount?: string;
  issuer: string;
  createdAt?: Date;
  updatedAt?: Date;
}
