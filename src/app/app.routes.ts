import { ClientsComponent } from './components/clients/clients.component';
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
import { SupplierStatementComponent } from './components/supplier-statement/supplier-statement.component';
import { ClientsStatementComponent } from './components/clients-statement/clients-statement.component';
import { CashInComponent } from './components/cash-in/cash-in.component';
import { CashOutComponent } from './components/cash-out/cash-out.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { CreatePurchaseComponent } from './components/create-purchase/create-purchase.component';
import { CreateSellComponent } from './components/create-sell/create-sell.component';
import { OrderComponent } from './components/order/order.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { SafesComponent } from './components/safes/safes.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { ExpenseTypeComponent } from './components/expense-type/expense-type.component';
import { ExpenseCreateComponent } from './components/expense-create/expense-create.component';
import { RevenueComponent } from './components/revenue/revenue.component';
import { RevenueTypeComponent } from './components/revenue-type/revenue-type.component';
import { RevenueCreateComponent } from './components/revenue-create/revenue-create.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminCreateComponent } from './components/admin-create/admin-create.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
   //Auth Layouts
    {path:'auth' , component:AuthComponent , children:[
    {path:'' , redirectTo:'login', pathMatch:'full'},
    {path:'login' , component:LoginComponent},

    // {path:'register' , component:}, still not exist
  ]},

  //main Layouts
  {path:'main' , component:MainComponent , children : [
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
      { path: 'suppliers/statement', component: SupplierStatementComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'clients/statement', component: ClientsStatementComponent },
      { path: 'cash/in', component: CashInComponent },
      { path: 'cash/out', component: CashOutComponent },
      { path: 'purchase', component: PurchaseComponent },
      { path: 'purchase/create', component: CreatePurchaseComponent },
      // { path: 'sell', component:  }, still not exist
      { path: 'sell/create', component: CreateSellComponent },
      { path: 'order', component: OrderComponent },
      { path: 'order/status', component:OrderStatusComponent  },
      // { path: 'order/create', component:  },  still not exist
      {path:'safes',component:SafesComponent},
      {path:'expense',component:ExpenseComponent},
      {path:'expense/type',component:ExpenseTypeComponent},
      {path:'expense/create',component:ExpenseCreateComponent},
      {path:'revenue',component:RevenueComponent},
      {path:'revenue/type',component:RevenueTypeComponent},
      {path:'revenue/create',component:RevenueCreateComponent},
      {path:'managers',component:AdminComponent},
      {path:'managers/create',component:AdminCreateComponent},

    //... still not exist
  ]},

  {path:'**',component:NotFoundComponent},

  //dashboard Layout

  // {path:"dashboard" , loadComponent: () =>import('./layouts/dashboard-layout/dashboard/dashboard.component').then(m=>m.DashboardComponent) }
];
