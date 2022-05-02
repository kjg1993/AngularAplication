import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContacsComponent } from './contacs/contacs.component';
import { ContactListComponent } from './contacs/contact-list/contact-list.component';
import { ContactDetailComponent } from './contacs/contact-detail/contact-detail.component';
import { HeaderComponent } from './header.component';
@NgModule({
  declarations: [
    AppComponent,
    ContacsComponent,
    ContactListComponent,
    ContactDetailComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
