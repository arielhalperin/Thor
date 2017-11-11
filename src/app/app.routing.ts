import { Routes, RouterModule } from "@angular/router";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";
import {CustomersListComponent} from "./customers/customers-list/customers-list.component";
import {LoginComponent} from "./auth/login/login.component";
import {LogoutComponent} from "./auth/logout/logout.component";
import {WizardComponent} from "./register/wizard/wizard.component";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  { path: 'customers', component: CustomersListComponent },
  { path: 'about-us', component: AboutUsComponent  },
  { path: 'contact-us', component: ContactUsComponent  },
  { path: 'register', component: WizardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
