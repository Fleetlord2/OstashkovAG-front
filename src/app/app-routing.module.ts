import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { IndexComponent } from './components/index/index.component';
import { AdminComponent } from './admin-components/admin/admin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
{
  path: "",component: IndexComponent
},
{
  path: "events",component: EventsComponent
},
{
  path: "admin",component: AdminComponent
},
{
  path: "profile",component: ProfileComponent
},
{
  path: "contacts", component: ContactsComponent
},
{
  path: "login", component: LoginComponent
},
{
  path: "register", component: RegisterComponent
},
{
  path: "**", redirectTo: ""
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
