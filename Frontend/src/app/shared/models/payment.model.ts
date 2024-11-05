export interface Payment {
    id: number;
    userId: number;
    orderId: number;
    totalAmount: number;
    paymentMethod: string;
    creditCardNumber: string;
}
