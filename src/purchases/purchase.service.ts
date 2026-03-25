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

    findOne(id: number) {
        const purchases = this.findAll().find(p => p.id === id);

        if (!purchases) throw new NotFoundException('Purchases not found');

        if (id === id) return purchases;
    }

}