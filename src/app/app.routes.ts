import { Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth-layout/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './layouts/main-layout/main/main.component';
import { DashboardComponent } from './layouts/dashboard-layout/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { BranchesComponent } from './components/branches/branches.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { InventoriesComponent } from './components/inventories/inventories.component';
import { InventoryItemsComponent } from './components/inventory-items/inventory-items.component';

export const routes: Routes = [
   //Auth Layouts
  // {path:'' , component:AuthComponent , children:[
  {path:'auth' , component:AuthComponent , children:[
    {path:'' , redirectTo:'login', pathMatch:'full'},
    {path:'login' , component:LoginComponent},
    // {path:'register' , component:}, still not exist
  ]},

  //main Layouts
  {path:'main' , component:MainComponent , children : [
  // {path:'' , component:MainComponent , children : [
    {path:'', redirectTo : 'home' , pathMatch:'full' },
    {path:'home', component:HomeComponent },
    { path: 'branches', component: BranchesComponent },
    { path: 'departments', component: DepartmentsComponent },
    { path: 'inventories/create', component: InventoriesComponent,},
      {path: 'inventories/items', component:InventoryItemsComponent}
    //... still not exist
    // { path: 'warehouses', component: WarehousesComponent },
    // { path: 'units', component: UnitsComponent },
    // { path: 'options', component: OptionsComponent },
    // { path: 'products', component: ProductsComponent },
    // ... إضافة المزيد من الـ routes حسب الحاجة
  ]},

  //dashboard Layout

  {path:"dashboard" , loadComponent: () =>import('./layouts/dashboard-layout/dashboard/dashboard.component').then(m=>m.DashboardComponent) }
];
