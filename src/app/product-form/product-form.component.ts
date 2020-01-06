import { Component, Output, EventEmitter,OnInit, ViewEncapsulation } from "@angular/core";
 import { Product } from "../product.model"; 
 import { ProductFormGroup } from "../form.model";

@Component({
  selector: 'paProductForm',
  templateUrl: './product-form.component.html',
 // styleUrls: ['./product-form.component.css'],
 // encapsulation: ViewEncapsulation.Emulated
})
export class ProductFormComponent implements OnInit {

  form: ProductFormGroup = new ProductFormGroup();
  newProduct: Product = new Product();
  formSubmitted: boolean = false;

  @Output("paNewProduct")
  newProductEvent = new EventEmitter<Product>();

  constructor() { }

  submitForm(form: any){
    this.formSubmitted = true;
    if (form.valid){
      this.newProductEvent.emit(this.newProduct);
      this.newProduct = new Product();
      this.form.reset;
      this.formSubmitted = false; 
    }
  }

  ngOnInit() {
  }

}
