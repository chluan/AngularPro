import { Pipe } from "@angular/core";
import { Product } from "./model/product.model";

@Pipe({
    name: "filter",
    pure: false
})

export class PaCategoryFilterPipe {
    transform(products: Product[], category: string){
        if(category ==  undefined || category == "None"){
            return products;
        } else return products.filter(p => p.category == category);
    }
}

