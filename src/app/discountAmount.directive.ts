import { Directive, HostBinding, Input,    SimpleChange, KeyValueDiffer, KeyValueDiffers,    ChangeDetectorRef } from "@angular/core"; 
import { DiscountService } from "./discount.service";

@Directive({    
    selector: "td[pa-price]",    
    exportAs: "discount"
 })

 export class PaDiscountAmountDirective{

    
 }
