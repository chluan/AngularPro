import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { Model } from "../repository.model";
import { Product } from "../product.model";
import { PaCellColor } from "../cellColor.directive";
import { ChildrenOutletContexts } from '@angular/router';
import { DiscountService } from "../discount.service";

@Component({
  selector: 'paProductTable',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  discounter: DiscountService = new DiscountService();

  @Input("model")
  dataModel: Model;

  categoryFilter: string = "None";

  constructor() { }

  getProduct(key: number): Product {
    return this.dataModel.getProduct(key);
  }

  getProducts(): Product[] {
    return this.dataModel.getProducts();
  }

  deleteProduct(key: number) {
    this.dataModel.deleteProduct(key);
  }

  // @ViewChildren(PaCellColor)
  // viewChildren: QueryList<PaCellColor>

  // ngAfterViewInit(){
  //   this.viewChildren.changes.subscribe(() => {
  //     this.updateViewChildren();
  //   });
  //   this.updateViewChildren();
  // }

  // private updateViewChildren() {
  //   setTimeout(() => {
  //     this.viewChildren.forEach((child, index) => {
  //       child.setColor(index % 2 ? true : false)
  //     });
  //   }, 0);
  // }

  ngOnInit(){

  }

}
