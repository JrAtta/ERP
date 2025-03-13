import { NgClass, NgFor } from '@angular/common';
import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink,NgClass],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  isSidebarVisible:boolean = false;

    // تتبع حالة العنصر مفتوح ولا مغلق
    isCollapsed: { [key: number]: boolean } = {};

  serviceList: Iservice[] = [
    { title: 'الرئيسية', icon: 'fas fa-home' },
    { title: 'اعدادات النظام', services: ['الفروع', 'الاقسام'], icon: 'fas fa-cog' },
    { title: 'المخزن', services: [ 'عرض المخازن','عناصر المخازن',], icon: 'fas fa-warehouse' },
    { title: 'الاصناف', services: ['الوحدات', 'الخيارات', 'الاصناف'], icon: 'fas fa-boxes' },
    { title: 'الموردين', services: ['فئات الموردين', 'الموردين', 'كشف حساب الموردين'], icon: 'fas fa-truck' },
    { title: 'العملاء', services: ['كشف حساب العميل', 'العملاء'], icon: 'fas fa-users' },
    { title: 'السندات', services: ['سندات القبض', 'سندات الصرف'], icon: 'fas fa-file-invoice' },
    { title: 'المشتريات', services: ['اضافة فاتورة مشتريات', 'فواتير المشتريات'], icon: 'fas fa-shopping-cart' },
    { title: 'المبيعات', services: ['اضافة فاتورة مبيعات', 'فواتير المبيعات'], icon: 'fas fa-chart-line' },
    { title: 'الاوردرات', services: ['اضافه اوردر جديد', 'عرض الاوردرات', 'حالة الاوردرات'], icon: 'fas fa-clipboard-list' },
    { title: 'الخزينه', icon: 'fas fa-coins' },
    { title: 'المصروفات', services: ['المصاريف', 'انواع المصروفات'], icon: 'fas fa-money-bill-wave' },
    { title: 'الايرادات', services: ['انواع الايرادات', 'الايرادات'], icon: 'fas fa-hand-holding-usd' },
    { title: 'المدراء', icon: 'fas fa-user-tie' }
  ];
  // //to show side-bar
  toggleSidebar(){
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  // دالة لإرجاع المسار من العنوان الرئيسي
  getTitleRoute(title: string): string {
    switch (title) {
      case 'الرئيسية':
        return '/main/home';
      case 'الخزينه':
        return '/main/treasury';
      case 'المدراء':
        return '/main/managers';
      default:
        return ''; // إذا كان هناك services، لن يكون هناك route للعنوان الرئيسي
    }
  }

  // دالة لإرجاع المسار من الخدمة الفرعية
  getServiceRoute(service: string): string {
    switch (service) {
      case 'الفروع':
        return '/main/branches';
      case 'الاقسام':
        return '/main/departments';
      case 'عرض المخازن':
          return '/main/inventories/create';
      case 'عناصر المخازن':
            return '/main/inventories/items';
      case 'الوحدات':
        return '/main/units';
      case 'الخيارات':
        return '/main/options/create';
      case 'الاصناف':
        return '/main/items';
      case 'فئات الموردين':
        return '/main/suppliers/categories';
      case 'الموردين':
        return '/main/suppliers';
      case 'كشف حساب الموردين':
        return '/main/suppliers/statement';
      case 'كشف حساب العميل':
        return '/main/account';
      case 'العملاء':
        return '/main/list';
      case 'سندات القبض':
        return '/main/receipt';
      case 'سندات الصرف':
        return '/main/payment';
      case 'اضافة فاتورة مشتريات':
        return '/main/add';
      case 'فواتير المشتريات':
        return '/main/list';
      case 'اضافة فاتورة مبيعات':
        return '/main/add';
      case 'فواتير المبيعات':
        return '/main/list';
      case 'اضافه اوردر جديد':
        return '/main/add';
      case 'عرض الاوردرات':
        return '/main/list';
      case 'حالة الاوردرات':
        return '/main/status';
      case 'المصاريف':
        return '/main/list';
      case 'انواع المصروفات':
        return '/main/types';
      case 'انواع الايرادات':
        return '/main/types';
      case 'الايرادات':
        return '/main/list';
      default:
        return '/';
    }
  }


  // دالة لتبديل حالة القائمة المنسدلة
  toggleCollapse(index: number) {
    this.isCollapsed[index] = !this.isCollapsed[index];

  }
}

//interface
 interface Iservice {
  title:string ,
  services?:string[],
  icon:string,
 }



//  static side-bar >> Dont Remove that **************
/*
     <!-- الرئيسية -->
     @for (item of serviceList; track $index) {
      <li class="nav-item">
        <a class="flex-between nav-link" >
          <div class="d-flex align-items-center gap-2">
            <i class="fas fa-home"></i>
            <span class="fs-5">الرئيسية</span>
          </div>
        </a>
      </li>
     }

      <!-- اعدادات النظام -->
      <li class="nav-item">
        <a class="flex-between nav-link" data-bs-toggle="collapse" href="#collapse1" aria-expanded="false" aria-controls="collapse1">
          <div class="d-flex align-items-center gap-2">
            <i class="fas fa-home fa-lg"></i>
            <span class="fs-5">اعدادات النظام</span>
          </div>
          <i class="fas fa-chevron-down"></i>
        </a>
        <div class="collapse" id="collapse1">
          <ul class="d-flex flex-column pe-4">
            <li class="nav-item">
              <a class="nav-link pt-0" href="#">الفروع</a>
            </li>
            <li class="nav-item">
              <a class="nav-link pt-0" href="#">الاقسام</a>
            </li>
          </ul>
        </div>
      </li>

      <!-- االمخزن-->
      <li class="nav-item">
        <a class="flex-between nav-link" data-bs-toggle="collapse" href="#collapse2" aria-expanded="false" aria-controls="collapse2">
          <div class="d-flex align-items-center gap-2">
            <i class="fa-solid fa-shop fa-lg"></i>
            <span class="fs-5">المخزن</span>
          </div>
          <i class="fas fa-chevron-down"></i>
        </a>
        <div class="collapse" id="collapse2">
          <ul class="d-flex flex-column pe-4">
            <li class="nav-item">
              <a class="nav-link pt-0" href="#">عرض المخازن</a>
            </li>
            <li class="nav-item">
              <a class="nav-link pt-0" href="#">عناصر المخازن</a>
            </li>
          </ul>
        </div>
      </li>

      <!-- الاصناف-->
      <li class="nav-item">
        <a class="flex-between nav-link" data-bs-toggle="collapse" href="#collapse3" aria-expanded="false" aria-controls="collapse3">
          <div class="d-flex align-items-center gap-2">
            <i class="fa-solid fa-shop fa-lg"></i>
            <span class="fs-5">الاصناف</span>
          </div>
          <i class="fas fa-chevron-down"></i>
        </a>
        <div class="collapse" id="collapse3">
          <ul class="d-flex flex-column pe-4">
            <li class="nav-item">
              <a class="nav-link pt-0" href="#">الوحدات </a>
            </li>
            <li class="nav-item">
              <a class="nav-link pt-0" href="#">الخيارات </a>
            </li>
            <li class="nav-item">
              <a class="nav-link pt-0" href="#">الاصناف</a>
            </li>
          </ul>
        </div>
      </li>

      <!-- الموردين-->
      <li class="nav-item">
        <a class="flex-between nav-link" data-bs-toggle="collapse" href="#collapse4" aria-expanded="false" aria-controls="collapse4">
          <div class="d-flex align-items-center gap-2">
            <i class="fa-solid fa-shop fa-lg"></i>
            <span class="fs-5 ">الموردين</span>
          </div>
          <i class="fas fa-chevron-down"></i>
        </a>
        <div class="collapse" id="collapse4">
          <ul class="d-flex flex-column pe-4">
            <li class="nav-item">
              <a class="nav-link pt-0" href="#">فئات الموردين  </a>

            </li>
            <li class="nav-item">
              <a class="nav-link pt-0" href="#">الموردين  </a>
            </li>
            <li class="nav-item">
              <a class="nav-link pt-0" href="#">كشف حساب الموردين</a>
            </li>
          </ul>
        </div>
      </li>

       <!-- العملاء-->
       <li class="nav-item">
        <a class="flex-between nav-link" data-bs-toggle="collapse" href="#collapse5" aria-expanded="false" aria-controls="collapse5">
          <div class="d-flex align-items-center gap-2">
            <i class="fa-solid fa-shop fa-lg"></i>
            <span class="fs-5 ">العملاء</span>
          </div>
          <i class="fas fa-chevron-down"></i>
        </a>
        <div class="collapse" id="collapse5">
          <ul class="d-flex flex-column pe-4">
            <li class="nav-item">
              <a class="nav-link pt-0" href="#">العملاء </a>
            </li>
            <li class="nav-item">
              <a class="nav-link pt-0" href="#">كشف حساب العميل </a>
            </li>

          </ul>
        </div>
      </li>

         <!-- السندات-->
         <li class="nav-item">
          <a class="flex-between nav-link" data-bs-toggle="collapse" href="#collapse6" aria-expanded="false" aria-controls="collapse6">
            <div class="d-flex align-items-center gap-2">
              <i class="fa-solid fa-shop fa-lg"></i>
              <span class="fs-5 ">السندات</span>
            </div>
            <i class="fas fa-chevron-down"></i>
          </a>
          <div class="collapse" id="collapse6">
            <ul class="d-flex flex-column pe-4">
              <li class="nav-item">
                <a class="nav-link pt-0" href="#">سندات الصرف </a>
              </li>
              <li class="nav-item">
                <a class="nav-link pt-0" href="#">سندات القبض </a>
              </li>

            </ul>
          </div>
        </li>

          <!-- المشتريات-->
          <li class="nav-item">
            <a class="flex-between nav-link" data-bs-toggle="collapse" href="#collapse7" aria-expanded="false" aria-controls="collapse7">
              <div class="d-flex align-items-center gap-2">
                <i class="fa-solid fa-shop fa-lg"></i>
                <span class="fs-5 ">المشتريات</span>
              </div>
              <i class="fas fa-chevron-down"></i>
            </a>
            <div class="collapse" id="collapse7">
              <ul class="d-flex flex-column pe-4">
                <li class="nav-item">
                  <a class="nav-link pt-0" href="#">اضافة فاتورة مشتريات </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link pt-0" href="#">فواتير المشتريات</a>
                </li>

              </ul>
            </div>
          </li>


          <!-- المبيعات-->
          <li class="nav-item">
            <a class="flex-between nav-link" data-bs-toggle="collapse" href="#collapse8" aria-expanded="false" aria-controls="collapse8">
              <div class="d-flex align-items-center gap-2">
                <i class="fa-solid fa-shop fa-lg"></i>
                <span class="fs-5 ">المبيعات</span>
              </div>
              <i class="fas fa-chevron-down"></i>
            </a>
            <div class="collapse" id="collapse8">
              <ul class="d-flex flex-column pe-4">
                <li class="nav-item">
                  <a class="nav-link pt-0" href="#">اضافة فاتورة مبيعات </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link pt-0" href="#">فواتير المبيعات</a>
                </li>

              </ul>
            </div>
          </li>

          <!-- الاوردرات-->
          <li class="nav-item">
            <a class="flex-between nav-link" data-bs-toggle="collapse" href="#collapse9" aria-expanded="false" aria-controls="collapse9">
              <div class="d-flex align-items-center gap-2">
                <i class="fa-solid fa-shop fa-lg"></i>
                <span class="fs-5 ">الاوردرات</span>
              </div>
              <i class="fas fa-chevron-down"></i>
            </a>
            <div class="collapse" id="collapse9">
              <ul class="d-flex flex-column pe-4">
                <li class="nav-item">
                  <a class="nav-link pt-0" href="#">عرض الاوردرات</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link pt-0" href="#">اضافه اوردر جديد</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link pt-0" href="#">حالة الاوردرات</a>
                </li>
              </ul>
            </div>
          </li>

                 <!-- الخزينه -->
      <li class="nav-item justify-content-start flex-center gap-2">
        <i class="fas fa-home fa-lg"></i>
        <a class="nav-link fs-5" aria-current="page" href="" routerLink='/main' routerLinkActive="router-link-active">
          <span class="fa-5">الخزينه</span>
        </a>
      </li>

          <!-- المصروفات-->
          <li class="nav-item">
            <a class="flex-between nav-link" data-bs-toggle="collapse" href="#collapse10" aria-expanded="false" aria-controls="collapse10">
              <div class="d-flex align-items-center gap-2">
                <i class="fa-solid fa-shop fa-lg"></i>
                <span class="fs-5 ">المصروفات</span>
              </div>
              <i class="fas fa-chevron-down"></i>
            </a>
            <div class="collapse" id="collapse10">
              <ul class="d-flex flex-column pe-4">
                <li class="nav-item">
                  <a class="nav-link pt-0" href="#">انواع المصروفات</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link pt-0" href="#">المصاريف</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link pt-0" href="#">الايرادات</a>
                </li>
              </ul>
            </div>
          </li>

          <!-- الايرادات-->
          <li class="nav-item">
            <a class="flex-between nav-link" data-bs-toggle="collapse" href="#collapse11" aria-expanded="false" aria-controls="collapse11">
              <div class="d-flex align-items-center gap-2">
                <i class="fa-solid fa-shop fa-lg"></i>
                <span class="fs-5 ">الايرادات</span>
              </div>
              <i class="fas fa-chevron-down"></i>
            </a>
            <div class="collapse" id="collapse11">
              <ul class="d-flex flex-column pe-4">
                <li class="nav-item">
                  <a class="nav-link pt-0" href="#">الايرادات</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link pt-0" href="#">انواع الايرادات</a>
                </li>
              </ul>
            </div>
          </li>

            <!-- المدراء -->
      <li class="nav-item justify-content-start flex-center gap-2">
        <i class="fas fa-home fa-lg"></i>
        <a class="nav-link fs-5" aria-current="page" href="" routerLink='/main' routerLinkActive="router-link-active">
          <span class="fa-5">المدراء</span>
        </a>
      </li>*/
