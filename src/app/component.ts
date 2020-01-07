import { Component } from "@angular/core";
// import { NgForm } from "@angular/forms";
// import { Model } from "./repository.model";
// import { Product } from "./product.model";
// import { ProductFormGroup } from "./form.model";


@Component({
    selector: "app",
    templateUrl: "template.html",
   // styles: ["/deep/ div { border: 2px black solid;  font-style:italic }"] 
})

export class ProductComponent {
    //model: Model = new Model();
    // form: ProductFormGroup = new ProductFormGroup();
    // showTable: boolean = true;

    // constructor(private model: Model){}
    
    // addProduct(p: Product) {
    //     this.model.saveProduct(p);
    // }

//     getProductByPosition(position: number): Product {
//         return this.model.getProducts[position];
//     }

//     getProduct(key: number): Product {
//         return this.model.getProduct(key);
//     }

//     getProducts(): Product[] {
//         return this.model.getProducts();
//     }

//     getProductCount(): number {
//         return this.getProducts().length;
//     }

//     selectedProduct: string;

//     getSelected(product: Product): boolean {
//         return this.selectedProduct == product.name;
//     }

//     newProduct: Product = new Product();

//     get jsonProduct() {
//         return JSON.stringify(this.newProduct);
//     }

//     addProduct(p: Product) {
//         this.model.saveProduct(p);
//     }

//    deleteProduct(key: number){
//        this.model.deleteProduct(key);
//    }

//     formSubmitted: boolean = false;

//     submitForm(form: NgForm) {      
//         this.formSubmitted = true;
//         if (form.valid) {
//             this.addProduct(this.newProduct);
//             this.newProduct = new Product();
//             form.reset;
//             this.formSubmitted = false;
//         }
//     }

   
}