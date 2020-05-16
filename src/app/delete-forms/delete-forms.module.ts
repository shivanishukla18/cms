import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { DeleteBrandComponent } from './delete-brand/delete-brand.component';



@NgModule({
  declarations: [DeleteProductComponent, DeleteCategoryComponent, DeleteBrandComponent],
  imports: [
    CommonModule
  ]
})
export class DeleteFormsModule { }
