import { Component, Input } from "@angular/core"; 
import { DiscountService } from "./discount.service";

@Component({
    selector: "paDiscountDisplay",
    templateUrl: "discountDisplay.component.html"
})

export class PaDiscountDisplayComponent { 
    
    constructor(private discounter: DiscountService) { } 

}