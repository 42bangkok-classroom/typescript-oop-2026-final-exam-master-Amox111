import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.interface';
import { ProductController } from './product.Controller';
import * as fs from 'fs';
import * as path from 'path';


@Injectable()
export class ProductService {
    findAll(): Product[] {
        const filePath = path.join(process.cwd(), 'data', 'products.json');
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(fileContent) as Product[];
    }


}