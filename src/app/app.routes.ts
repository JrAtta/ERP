import { CreateDepartmentComponent } from './components/create-department/create-department.component';
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
import { UnitsComponent } from './components/units/units.component';
import { OptionsComponent } from './components/options/options.component';
import { ItemsComponent } from './components/items/items.component';
import { CreateItemsComponent } from './components/create-items/create-items.component';
import { SupplierCategoriesComponent } from './components/supplier-categories/supplier-categories.component';
import { SupplierComponent } from './components/supplier/supplier.component';

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
    { path: 'departments/create', component: CreateDepartmentComponent },
    { path: 'inventories/create', component: InventoriesComponent,},
      {path: 'inventories/items', component:InventoryItemsComponent},
      { path: 'units', component: UnitsComponent },
      { path: 'options/create', component: OptionsComponent },
      { path: 'items', component: ItemsComponent },
      { path: 'items/create', component: CreateItemsComponent },
      { path: 'suppliers', component:SupplierComponent  },
      { path: 'suppliers/categories', component: SupplierCategoriesComponent },

    //... still not exist

  ]},

  //dashboard Layout

  {path:"dashboard" , loadComponent: () =>import('./layouts/dashboard-layout/dashboard/dashboard.component').then(m=>m.DashboardComponent) }
];
