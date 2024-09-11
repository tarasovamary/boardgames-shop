import { Route } from '@angular/router';

export const AppRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '/games' },
  {
    path: 'games',
    loadChildren: () => import('./features/games/games.module').then((m) => m.GamesModule),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./features/purchase-history/purchase-history.module').then((m) => m.PurchaseHistoryModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./features/shopping-cart/shopping-cart.module').then((m) => m.ShoppingCartModule),
  },
  { path: '**', redirectTo: '/games' },
];
