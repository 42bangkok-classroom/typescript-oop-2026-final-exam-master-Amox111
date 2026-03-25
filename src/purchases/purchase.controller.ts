import { Controller, Get, Param, Query } from '@nestjs/common';
import { Purchases } from './purchase.interface';
import { PurchaseService } from './purchase.service';

@Controller('purchases')
export class PurchaseController {
  constructor(private readonly productService: PurchaseService
  ) {}

  @Get()
  findAll(): Purchases[] {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne( @Param('id') id: number) {
    return this.productService.findOne(id);
  }

}