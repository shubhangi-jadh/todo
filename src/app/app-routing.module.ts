import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent} from './user/user.component';
import { CatlogComponent} from './catlog/catlog.component';
import { from } from 'rxjs';
import { NewuserComponent } from './newuser/newuser.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';




const routes: Routes = [{ path: '', redirectTo: '', pathMatch: 'full' },
{ path: 'user', component: ListComponent},
{ path: 'add', component:  NewuserComponent},
{ path: 'edit/:id', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
