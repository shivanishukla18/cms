import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UpdateBrandComponent } from './update-brand/update-brand.component';



@NgModule({
  declarations: [UpdateProductComponent, UpdateCategoryComponent, UpdateBrandComponent],
  imports: [
    CommonModule
  ]
})
export class UpdateFormsModule { }
