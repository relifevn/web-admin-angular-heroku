import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { FooterComponent } from './components/footer/footer.component'
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io'
import { SocketService } from './core/services'


const config: SocketIoConfig = {
  url: 'https://khkt-thcs-hiep-phuoc-server.herokuapp.com?deviceType=web',
  // url: 'localhost:3000/?deviceType=web',
  options: {},
}

@NgModule({
  declarations: [
    AppComponent,

    // Todo: put in share-modules
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    
  ],
  providers: [
    SocketService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
