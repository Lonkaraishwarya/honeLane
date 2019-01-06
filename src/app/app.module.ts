import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ModalService } from './services';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  entryComponents: [AppComponent],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
