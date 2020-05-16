import { CreateProductComponent } from './create-forms/create-product/create-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home' , component: InfoPageComponent},
{path: 'admin', component: AdminComponent, children: [{path: 'createProduct', component: CreateProductComponent}]},
{path: 'ContactUs', component: ContactComponent},
{path: 'PrivacyPolicy', component: PrivacyPolicyComponent},
{path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
