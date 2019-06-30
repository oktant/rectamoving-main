import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ContactComponent} from './pages/contact/contact.component';
import {CorporateManagementSystemsComponent} from './pages/corporate-management-systems/corporate-management-systems.component';
import {AiServicesComponent} from './pages/ai-services/ai-services.component';
import {ProductsComponent} from './pages/products/products.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';


const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
//  {path: 'index', component: DashboardComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'corporateManagementServices', component: CorporateManagementSystemsComponent},
  {path: 'aiServices', component: AiServicesComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'aboutus', component: AboutUsComponent}




]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouting {


}
