import { Component, Input } from "@angular/core";
import { DiscountService } from "./discount.service";

@Component({
    selector: "paDiscountEditor",
    templateUrl: "discountEditor.component.html"
})

export class PaDiscountEditorComponent {
   
    constructor(private discounter: DiscountService) { } 
}