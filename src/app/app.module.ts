import { DeleteFormsModule } from './delete-forms/delete-forms.module';
import { UpdateFormsModule } from './update-forms/update-forms.module';
import { CreateFormsModule } from './create-forms/create-forms.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InfoPageComponent,
    AdminComponent,
    ContactComponent,
    PrivacyPolicyComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CreateFormsModule,
    UpdateFormsModule,
    DeleteFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
