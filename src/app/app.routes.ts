import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // เส้นทางเริ่มต้น
  { path: 'login', component: LoginComponent },          // เส้นทางหน้าล็อกอิน
];
