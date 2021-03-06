import { AuthGuard } from './_guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

// local components
import { AuthService } from './_services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { appRoutes } from './routes';
import { ApiUrlInterceptorProvider } from './_services/api-url.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiceCardComponent } from './services/service-card/service-card.component';
import { ServicesListComponent } from './services/services-list/services-list.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

// import { NbThemeModule } from '@nebular/theme';
// import { NbFlipCardComponent } from '@nebular/theme/components/card/flip-card/flip-card.component';
// import { NbCardComponent, NbCardBodyComponent } from '@nebular/theme/components/card/card.component';

// import { NbCardFrontComponent, NbCardBackComponent } from '@nebular/theme/components/card/shared/shared.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent,
    ServiceCardComponent,
    ServicesListComponent

    // NbFlipCardComponent, NbCardFrontComponent, NbCardBackComponent, NbCardComponent, NbCardBodyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    // NbThemeModule.forRoot({ name: 'default' }),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    ApiUrlInterceptorProvider,
    AlertifyService,
    TitleCasePipe,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
