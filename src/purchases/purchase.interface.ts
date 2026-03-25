export interface Purchases {
    id: string,
    customerName: string,
    purchaseDate: string,
    items: [],
    totalPrice: number
}

export interface PurchaseItem {
    productId: string,
    quantity: number,
    price: number
}