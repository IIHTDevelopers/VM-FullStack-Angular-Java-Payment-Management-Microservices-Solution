export interface Order {
    id: number;
    userId: number;
    productIds: number[];
    totalAmount: number;
    shippingAddress: string;
    paymentMethod: string;
    orderDate: Date;
}
