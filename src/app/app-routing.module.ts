import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ProductsComponent } from './product/components/products/products.component';
import { ContactComponent } from './contact/components/contact/contact.component';
import { DemoComponent } from './demo/components/demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product/components/product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'products',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./contact/contact.module').then((m) => m.ContactModule),
      },
      {
        path: 'demo',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./demo/demo.module').then((m) => m.DemoModule),
      },
    ],
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
