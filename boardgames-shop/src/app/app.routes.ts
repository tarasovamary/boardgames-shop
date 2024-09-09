import { Route } from '@angular/router';

export const AppRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '/games' },
  {
    path: 'games',
    loadChildren: () => import('./features/games-list/games-list.module').then((m) => m.GamesListModule),
  },
  {
    path: 'purchase',
    loadChildren: () =>
      import('./features/purchase-history/purchase-history.module').then((m) => m.PurchaseHistoryModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./features/shopping-cart/shopping-cart.module').then((m) => m.ShoppingCartModule),
  },
  { path: '**', redirectTo: '/games' },
];
