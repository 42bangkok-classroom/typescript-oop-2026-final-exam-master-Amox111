export interface Purchases {
    id: number,
    customerName: string,
    purchaseDate: string,
    items: [],
    totalPrice: number
}

export interface PurchaseItem {
    productId: number,
    quantity: number,
    price: number
}