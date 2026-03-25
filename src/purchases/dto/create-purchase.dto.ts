import { IsString, IsInt } from 'class-validator';

export class CreatePurchaseDto {
    @IsString()
    customerName: string;
 
    @IsString()
    purchaseDate: string;
 
    @IsInt()
    totalPrice: number;
}


export class PurchaseItemDto {
    @IsInt()
    quantity: string;
 
    @IsInt()
    price: number;
}

