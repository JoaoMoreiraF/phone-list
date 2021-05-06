import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonPhoneListComponent } from './modules/personPhone/components/person-phone-list/person-phone-list.component';


const routes: Routes = [
  { path: '', component: PersonPhoneListComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
