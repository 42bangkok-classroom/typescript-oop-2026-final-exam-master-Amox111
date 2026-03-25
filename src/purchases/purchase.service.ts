import { Injectable, NotFoundException } from '@nestjs/common';
import { Purchases } from './purchase.interface';
import * as fs from 'fs';
import * as path from 'path';


@Injectable()
export class PurchaseService {
    findAll(): Purchases[] {
        const filePath = path.join(process.cwd(), 'data', 'purchases.json');
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(fileContent) as Purchases[];
    }

    findOne(id: string) {
        const purchases = this.findAll().find(p => p.id === id);

        if (!purchases) throw new NotFoundException('Purchases not found');

        if (id === id) return purchases;
    }

    remove(id: string) {
        const purchases = [];
        const purchaseIndex = this..findIndex(p => p.id === id);
        if (purchaseIndex === -1) {
          throw new NotFoundException(`Book with ID ${id} not found`);
        }
        const removedBook = this.purchases.splice(purchaseIndex, 1);
        return removedBook;
    }
}