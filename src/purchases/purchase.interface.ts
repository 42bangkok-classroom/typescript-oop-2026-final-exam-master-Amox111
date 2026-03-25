export interface Purchase<T> {
    id: number,
    customerName: string,
    purchaseDate: string,
    items: T[],
    totalPrice: number
}

export interface PurchaseItem {
    productId: number,
    quantity: number,
    price: number
}