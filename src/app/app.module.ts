import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterBusinessComponent } from './register-business/register-business.component';
import { UserService } from './_service/UserService/user.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterBusinessComponent
  ],
  imports:      [ BrowserModule, FormsModule ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
