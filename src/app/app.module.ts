import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';

import { PaAttrDirective } from "./attr.directive";
import { PaModel } from './twoway.directive';
import { PaStructureDirective } from "./structure.directive";
import { PaIteratorDirective } from "./iterator.directive"
import { PaCellColor } from "./cellColor.directive"; 
import { PaCellColorSwitcher } from "./cellColorSwitcher.directive";
import { PaDiscountAmountDirective } from "./discountAmount.directive";

import { ProductComponent } from "./component";
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { PaDiscountDisplayComponent } from "./discountDisplay.component"; 
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { PaToggleView } from "./toggleView.component";

import { PaAddTaxPipe } from "./addTax.pipe";
import { PaCategoryFilterPipe } from "./categoryFilter.pipe";
import { PaDiscountPipe } from "./discount.pipe";

import { DiscountService } from "./discount.service";

import { SimpleDataSource } from "./model/datasource.model";
import { Model } from "./model/repository.model";

import { LOCALE_ID } from "@angular/core"; 
import localeFr from '@angular/common/locales/fr'; 
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    ProductComponent,
    PaAttrDirective,
    PaModel,
    PaStructureDirective,
    PaIteratorDirective,
    PaCellColor,
    PaCellColorSwitcher,
    ProductFormComponent,
    ProductTableComponent,
    PaToggleView,
    PaAddTaxPipe,
    PaDiscountPipe,
    PaCategoryFilterPipe,
    PaDiscountDisplayComponent,
    PaDiscountEditorComponent,
    PaDiscountAmountDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[ DiscountService, SimpleDataSource, Model],
  //providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
  bootstrap: [ProductComponent]
})
export class AppModule { }
